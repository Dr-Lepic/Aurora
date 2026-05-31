(function(window) {
  "use strict";

  const CANVAS_ID = "game-canvas";
  const OVERLAY_ID = "game-overlay";
  const START_BUTTON_ID = "game-start";

  let phaserGame = null;
  let sceneRef = null;
  let overlayEl = null;
  let startButtonEl = null;
  let defaultOverlayHtml = "";
  let pendingStart = false;

  const buildSceneClass = () => class StellarScene extends Phaser.Scene {
    constructor() {
      super({ key: "StellarScene" });
      this.player = null;
      this.playerTargetX = 0;
      this.meteors = [];
      this.gameRunning = false;
      this.gameScore = 0;
      this.gameSpeed = 3;
      this.lastScoreTier = 0;
      this.scoreText = null;
      this.spawnTimer = null;
      this.cursors = null;
    }

    create() {
      sceneRef = this;
      this.cameras.main.setBackgroundColor("#08112a");
      this.cursors = this.input.keyboard.createCursorKeys();

      this.player = this.add.circle(320, 360, 18, 0x64d8ff);
      this.playerTargetX = this.player.x;

      this.scoreText = this.add.text(18, 12, "Score: 0", {
        fontFamily: "Roboto, Arial, sans-serif",
        fontSize: "16px",
        color: "#ffffff"
      });

      this.spawnTimer = this.time.addEvent({
        delay: 600,
        callback: this.spawnMeteor,
        callbackScope: this,
        loop: true,
        paused: true
      });

      this.input.keyboard.on("keydown-SPACE", () => {
        if (!this.gameRunning) return;
        this.player.setScale(1.4);
        this.time.delayedCall(180, () => this.player.setScale(1));
      });

      if (pendingStart) {
        pendingStart = false;
        this.startGame();
      }
    }

    resetGame() {
      this.clearMeteors();
      this.gameScore = 0;
      this.gameSpeed = 3;
      this.lastScoreTier = 0;
      this.player.setPosition(320, 360);
      this.player.setScale(1);
      this.playerTargetX = this.player.x;
      this.scoreText.setText("Score: 0");
    }

    startGame() {
      this.resetGame();
      this.gameRunning = true;
      this.spawnTimer.paused = false;
    }

    endGame() {
      this.gameRunning = false;
      this.spawnTimer.paused = true;
      StellarRunner.showCrash(this.gameScore);
    }

    clearMeteors() {
      this.meteors.forEach((meteor) => meteor.destroy());
      this.meteors = [];
    }

    spawnMeteor() {
      if (!this.gameRunning) return;
      const x = Phaser.Math.Between(20, 620);
      const size = Phaser.Math.Between(16, 42);
      const speed = this.gameSpeed + Phaser.Math.FloatBetween(0.5, 2.5);
      const meteor = this.add.circle(x, -20, size, 0xff9f43);
      meteor.setStrokeStyle(2, 0xffd166, 0.85);
      meteor.setData("speed", speed);
      meteor.setData("size", size);
      this.meteors.push(meteor);
    }

    update() {
      if (!this.gameRunning) return;

      if (this.cursors.left.isDown) {
        this.playerTargetX = Math.max(20, this.playerTargetX - 8);
      }
      if (this.cursors.right.isDown) {
        this.playerTargetX = Math.min(620, this.playerTargetX + 8);
      }

      this.player.x += (this.playerTargetX - this.player.x) * 0.12;

      for (let i = this.meteors.length - 1; i >= 0; i -= 1) {
        const meteor = this.meteors[i];
        meteor.y += meteor.getData("speed");

        if (meteor.y > 460) {
          meteor.destroy();
          this.meteors.splice(i, 1);
          this.gameScore += 10;
          this.scoreText.setText(`Score: ${this.gameScore}`);

          const tier = Math.floor(this.gameScore / 120);
          if (tier > this.lastScoreTier) {
            this.lastScoreTier = tier;
            this.gameSpeed = Math.min(12, this.gameSpeed + 0.5);
          }
          continue;
        }

        const playerRadius = 18; // Ignore scale penalty
        const distance = Phaser.Math.Distance.Between(meteor.x, meteor.y, this.player.x, this.player.y);
        if (distance < meteor.getData("size") + playerRadius - 4) {
          if (this.player.scaleX > 1) {
            meteor.destroy();
            this.meteors.splice(i, 1);
            continue;
          } else {
            this.endGame();
            return;
          }
        }
      }
    }
  };

  const StellarRunner = {
    init() {
      overlayEl = document.getElementById(OVERLAY_ID);
      startButtonEl = document.getElementById(START_BUTTON_ID);
      if (overlayEl && !defaultOverlayHtml) {
        defaultOverlayHtml = overlayEl.innerHTML;
      }

      if (!window.Phaser) {
        console.warn("Phaser failed to load. Stellar Runner is unavailable.");
        if (overlayEl) {
          overlayEl.innerHTML = "<h2>Engine unavailable</h2><p>Unable to load Phaser. Check your network connection and reload.</p>";
        }
        return;
      }

      if (startButtonEl) {
        startButtonEl.addEventListener("click", () => {
          StellarRunner.hideOverlay();
          StellarRunner.start();
        });
      }

      if (phaserGame) return;
      const canvas = document.getElementById(CANVAS_ID);
      if (!canvas) return;

      const StellarScene = buildSceneClass();
      phaserGame = new Phaser.Game({
        type: Phaser.CANVAS,
        width: 640,
        height: 420,
        canvas,
        transparent: true,
        scene: [StellarScene],
        fps: { target: 60 }
      });
    },

    start() {
      if (!sceneRef) {
        pendingStart = true;
        return;
      }
      sceneRef.startGame();
    },

    showCrash(score) {
      if (!overlayEl) return;
      overlayEl.innerHTML = `<h2>Crashed!</h2><p>Score: ${score}</p><button id="game-restart" style="margin-top:12px; padding:8px 18px; border-radius:10px; border:none; background:rgba(51,161,255,0.6); color:#fff; cursor:pointer;">Try Again</button>`;
      overlayEl.style.display = "block";
      const restartButton = document.getElementById("game-restart");
      if (restartButton) {
        restartButton.addEventListener("click", () => {
          StellarRunner.resetOverlay();
          StellarRunner.hideOverlay();
          StellarRunner.start();
        });
      }
    },

    hideOverlay() {
      if (overlayEl) overlayEl.style.display = "none";
    },

    resetOverlay() {
      if (!overlayEl || !defaultOverlayHtml) return;
      overlayEl.innerHTML = defaultOverlayHtml;
      startButtonEl = document.getElementById(START_BUTTON_ID);
      if (startButtonEl) {
        startButtonEl.addEventListener("click", () => {
          StellarRunner.hideOverlay();
          StellarRunner.start();
        });
      }
    }
  };

  window.StellarRunner = StellarRunner;
})(window);
