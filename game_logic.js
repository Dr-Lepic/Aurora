/**
 * Aurora Mystery - Puzzle Game Logic
 * An escape room mystery hidden within the WebOS
 * 
 * The player must discover clues scattered throughout the system to unlock
 * the CLASSIFIED folder and reveal its secret contents.
 */

(function(window) {
  'use strict';

  const GAME_STATE_KEY = 'aurora-mystery-state-v1';
  
  // The ultimate password (Caesar cipher: "STELLAR" shifted by 7)
  const ENCRYPTED_PASSWORD = 'ZALSSHY';
  const ACTUAL_PASSWORD = 'STELLAR';
  
  // Clue fragments that piece together the solution
  const CLUES = {
    clue1: {
      id: 'clue1',
      name: 'Terminal Command',
      hint: 'Type "status" in the Celestia Terminal',
      content: 'First clue found! Note: "Seven steps forward in the alphabet"',
      discovered: false,
      location: 'terminal'
    },
    clue2: {
      id: 'clue2',
      name: 'Hidden Code Comment',
      hint: 'Check the demo.js file in Projects folder',
      content: 'Clue #2: The encrypted password is "ZALSSHY"',
      discovered: false,
      location: 'code'
    },
    clue3: {
      id: 'clue3',
      name: 'Paint Canvas Secret',
      hint: 'Draw a star pattern (5 strokes minimum) in Radiant Canvas',
      content: 'Clue #3: Each letter moves 7 positions in the alphabet',
      discovered: false,
      location: 'paint'
    },
    clue4: {
      id: 'clue4',
      name: 'File Creation Pattern',
      hint: 'Create a file named "HINT.txt" in Documents',
      content: 'Clue #4: Z→S, A→T, L→E (pattern continues...)',
      discovered: false,
      location: 'files'
    },
    clue5: {
      id: 'clue5',
      name: 'System Time Analysis',
      hint: 'The system clock holds a secret at 7:00 or 19:00',
      content: 'Clue #5: The cipher key is always 7. ZALSSHY = ?',
      discovered: false,
      location: 'clock'
    },
    clue6: {
      id: 'clue6',
      name: 'Notification Message',
      hint: 'Open the notification center (bell icon)',
      content: 'Clue #6: Backwards 7 steps unlocks the truth',
      discovered: false,
      location: 'notification'
    },
    clue7: {
      id: 'clue7',
      name: 'Welcome File Cipher',
      hint: 'Read the Welcome.txt file carefully',
      content: 'Clue #7: Password format - 7 letters, all caps',
      discovered: false,
      location: 'welcome'
    }
  };

  // Game state management
  let gameState = {
    cluesDiscovered: [],
    attemptsRemaining: 5,
    hintsUsed: 0,
    gameStartTime: null,
    gameComplete: false,
    folderUnlocked: false
  };

  // Initialize or load game state
  function initGameState() {
    try {
      const saved = localStorage.getItem(GAME_STATE_KEY);
      if (saved) {
        gameState = { ...gameState, ...JSON.parse(saved) };
        // Update CLUES based on discovered clues
        gameState.cluesDiscovered.forEach(clueId => {
          if (CLUES[clueId]) {
            CLUES[clueId].discovered = true;
          }
        });
      } else {
        gameState.gameStartTime = Date.now();
        saveGameState();
      }
    } catch (err) {
      console.warn('Failed to load game state:', err);
    }
  }

  function saveGameState() {
    try {
      localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
    } catch (err) {
      console.warn('Failed to save game state:', err);
    }
  }

  function resetGame() {
    gameState = {
      cluesDiscovered: [],
      attemptsRemaining: 5,
      hintsUsed: 0,
      gameStartTime: Date.now(),
      gameComplete: false,
      folderUnlocked: false
    };
    Object.values(CLUES).forEach(clue => {
      clue.discovered = false;
    });
    saveGameState();
  }

  // Clue discovery
  function discoverClue(clueId, silent = false) {
    const clue = CLUES[clueId];
    if (!clue || clue.discovered) return false;
    
    clue.discovered = true;
    gameState.cluesDiscovered.push(clueId);
    saveGameState();
    
    if (!silent) {
      showClueNotification(clue);
    }
    
    updateClueJournal();
    return true;
  }

  function showClueNotification(clue) {
    const notification = document.createElement('div');
    notification.className = 'mystery-notification';
    notification.innerHTML = `
      <div class="mystery-notification-header">🔍 Clue Discovered!</div>
      <div class="mystery-notification-title">${clue.name}</div>
      <div class="mystery-notification-content">${clue.content}</div>
      <div class="mystery-notification-footer">
        ${gameState.cluesDiscovered.length} of ${Object.keys(CLUES).length} clues found
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.5s ease forwards';
      setTimeout(() => notification.remove(), 500);
    }, 6000);
  }

  // Password verification
  function attemptUnlock(inputPassword) {
    if (gameState.folderUnlocked) {
      return { success: true, message: 'Folder already unlocked!' };
    }

    const normalized = (inputPassword || '').toUpperCase().trim();
    gameState.attemptsRemaining--;
    saveGameState();

    if (normalized === ACTUAL_PASSWORD) {
      gameState.folderUnlocked = true;
      gameState.gameComplete = true;
      saveGameState();
      revealSecretFolder();
      showVictoryScreen();
      return {
        success: true,
        message: 'Access Granted! The CLASSIFIED folder has been unlocked.'
      };
    }

    if (gameState.attemptsRemaining <= 0) {
      return {
        success: false,
        message: 'System Locked! Too many failed attempts. Restart the game to try again.',
        locked: true
      };
    }

    const hints = [];
    if (normalized.length !== 7) {
      hints.push('The password is exactly 7 letters.');
    }
    if (!/^[A-Z]+$/.test(normalized)) {
      hints.push('Password should be all capital letters.');
    }
    if (normalized === ENCRYPTED_PASSWORD) {
      hints.push('You entered the ENCRYPTED password. Try decoding it first!');
    }

    return {
      success: false,
      message: `Access Denied! ${gameState.attemptsRemaining} attempts remaining.`,
      hints: hints
    };
  }

  // Caesar cipher helper for players
  function caesarDecode(text, shift) {
    return text.split('').map(char => {
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
      }
      if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
      }
      return char;
    }).join('');
  }

  // UI Components
  function createLockedFolder() {
    if (document.getElementById('classified-folder')) return;
    
    const folder = document.createElement('div');
    folder.id = 'classified-folder';
    folder.className = 'icon locked-folder';
    folder.innerHTML = `
      <span class="emoji">🔒</span>
      <span>CLASSIFIED</span>
    `;
    
    folder.addEventListener('dblclick', () => {
      if (gameState.folderUnlocked) {
        openSecretFolder();
      } else {
        showPasswordPrompt();
      }
    });
    
    const desktopIcons = document.getElementById('desktop-icons');
    if (desktopIcons) {
      desktopIcons.insertBefore(folder, desktopIcons.firstChild);
    }
  }

  function showPasswordPrompt() {
    const existingPrompt = document.getElementById('password-prompt');
    if (existingPrompt) {
      existingPrompt.remove();
    }

    const prompt = document.createElement('div');
    prompt.id = 'password-prompt';
    prompt.className = 'mystery-modal';
    prompt.innerHTML = `
      <div class="mystery-modal-content">
        <div class="mystery-modal-header">
          <span>🔐 CLASSIFIED ACCESS</span>
          <button class="mystery-modal-close">×</button>
        </div>
        <div class="mystery-modal-body">
          <p>This folder is protected. Enter the password to unlock.</p>
          <p class="mystery-hint">Attempts remaining: <strong>${gameState.attemptsRemaining}</strong></p>
          <p class="mystery-hint">Clues found: <strong>${gameState.cluesDiscovered.length}/${Object.keys(CLUES).length}</strong></p>
          <input type="text" id="password-input" placeholder="Enter password..." maxlength="20" />
          <div class="mystery-button-group">
            <button id="password-submit" class="mystery-button primary">Unlock</button>
            <button id="password-hint" class="mystery-button secondary">Get Hint</button>
            <button id="password-cancel" class="mystery-button">Cancel</button>
          </div>
          <div id="password-feedback"></div>
        </div>
      </div>
    `;

    document.body.appendChild(prompt);

    const input = document.getElementById('password-input');
    const submit = document.getElementById('password-submit');
    const cancel = document.getElementById('password-cancel');
    const close = prompt.querySelector('.mystery-modal-close');
    const hintBtn = document.getElementById('password-hint');
    const feedback = document.getElementById('password-feedback');

    const closePrompt = () => prompt.remove();

    input.focus();
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        submit.click();
      } else if (e.key === 'Escape') {
        closePrompt();
      }
    });

    submit.addEventListener('click', () => {
      const result = attemptUnlock(input.value);
      feedback.className = result.success ? 'mystery-feedback success' : 'mystery-feedback error';
      feedback.innerHTML = `
        <div>${result.message}</div>
        ${result.hints ? result.hints.map(h => `<div class="mystery-hint-text">💡 ${h}</div>`).join('') : ''}
      `;
      
      if (result.success) {
        setTimeout(closePrompt, 2000);
      } else if (result.locked) {
        submit.disabled = true;
        input.disabled = true;
      } else {
        input.value = '';
        input.focus();
        prompt.querySelector('.mystery-hint').innerHTML = 
          `Attempts remaining: <strong>${gameState.attemptsRemaining}</strong>`;
      }
    });

    hintBtn.addEventListener('click', () => {
      showHintSystem();
    });

    cancel.addEventListener('click', closePrompt);
    close.addEventListener('click', closePrompt);
  }

  function showHintSystem() {
    const modal = document.createElement('div');
    modal.className = 'mystery-modal';
    
    const undiscoveredClues = Object.values(CLUES).filter(c => !c.discovered);
    const discoveredClues = Object.values(CLUES).filter(c => c.discovered);
    
    modal.innerHTML = `
      <div class="mystery-modal-content">
        <div class="mystery-modal-header">
          <span>📖 Clue Journal</span>
          <button class="mystery-modal-close">×</button>
        </div>
        <div class="mystery-modal-body clue-journal">
          <h3>Discovered Clues (${discoveredClues.length}/${Object.keys(CLUES).length})</h3>
          ${discoveredClues.length > 0 ? `
            <div class="clue-list">
              ${discoveredClues.map(clue => `
                <div class="clue-card discovered">
                  <div class="clue-name">✓ ${clue.name}</div>
                  <div class="clue-content">${clue.content}</div>
                </div>
              `).join('')}
            </div>
          ` : '<p class="mystery-hint">No clues discovered yet. Explore the system!</p>'}
          
          <h3 style="margin-top: 24px;">Undiscovered Clues (${undiscoveredClues.length})</h3>
          ${undiscoveredClues.length > 0 ? `
            <div class="clue-list">
              ${undiscoveredClues.map((clue, index) => `
                <div class="clue-card locked">
                  <div class="clue-name">🔒 Mystery Clue ${index + 1}</div>
                  <button class="mystery-button small hint-reveal" data-clue="${clue.id}">
                    Reveal Hint (${gameState.hintsUsed + 1} hints used)
                  </button>
                  <div class="clue-hint hidden" id="hint-${clue.id}">${clue.hint}</div>
                </div>
              `).join('')}
            </div>
          ` : '<p class="mystery-hint">All clues discovered! 🎉</p>'}
          
          <div class="cipher-helper">
            <h3>🔢 Caesar Cipher Decoder</h3>
            <p>Use this tool to decode encrypted text:</p>
            <input type="text" id="cipher-input" placeholder="Enter encrypted text..." />
            <input type="number" id="cipher-shift" value="7" min="1" max="25" style="width: 60px;" />
            <button class="mystery-button" id="cipher-decode">Decode</button>
            <div id="cipher-output"></div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.mystery-modal-close').addEventListener('click', () => {
      modal.remove();
    });

    modal.querySelectorAll('.hint-reveal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const clueId = e.target.dataset.clue;
        const hintEl = document.getElementById(`hint-${clueId}`);
        if (hintEl) {
          hintEl.classList.remove('hidden');
          e.target.disabled = true;
          e.target.textContent = 'Hint Revealed';
          gameState.hintsUsed++;
          saveGameState();
        }
      });
    });

    const cipherInput = document.getElementById('cipher-input');
    const cipherShift = document.getElementById('cipher-shift');
    const cipherDecode = document.getElementById('cipher-decode');
    const cipherOutput = document.getElementById('cipher-output');

    cipherDecode.addEventListener('click', () => {
      const text = cipherInput.value.toUpperCase();
      const shift = parseInt(cipherShift.value) || 7;
      const decoded = caesarDecode(text, shift);
      cipherOutput.innerHTML = `<strong>Decoded:</strong> ${decoded}`;
      cipherOutput.className = 'cipher-result';
    });
  }

  function revealSecretFolder() {
    const folder = document.getElementById('classified-folder');
    if (folder) {
      folder.classList.remove('locked-folder');
      folder.classList.add('unlocked-folder');
      folder.innerHTML = `
        <span class="emoji">🔓</span>
        <span>CLASSIFIED</span>
      `;
    }
  }

  function openSecretFolder() {
    // This will open the secret contents
    if (window.openApp && window.loadTextIntoEditor) {
      window.loadTextIntoEditor('CLASSIFIED/SECRET_MISSION.txt');
    }
  }

  function showVictoryScreen() {
    const modal = document.createElement('div');
    modal.className = 'mystery-modal victory-modal';
    
    const elapsedTime = Math.floor((Date.now() - gameState.gameStartTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    
    modal.innerHTML = `
      <div class="mystery-modal-content victory-content">
        <div class="victory-header">🎉 MISSION COMPLETE! 🎉</div>
        <div class="victory-body">
          <h2>Congratulations, Agent!</h2>
          <p>You've successfully decoded the cipher and unlocked the CLASSIFIED folder.</p>
          <div class="victory-stats">
            <div class="stat-item">
              <div class="stat-value">${gameState.cluesDiscovered.length}/${Object.keys(CLUES).length}</div>
              <div class="stat-label">Clues Found</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${5 - gameState.attemptsRemaining}</div>
              <div class="stat-label">Attempts Used</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${minutes}:${seconds.toString().padStart(2, '0')}</div>
              <div class="stat-label">Time Elapsed</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${gameState.hintsUsed}</div>
              <div class="stat-label">Hints Used</div>
            </div>
          </div>
          <p class="victory-message">
            The secret files reveal Operation Aurora's true purpose...<br>
            Double-click the unlocked CLASSIFIED folder to read the mission details.
          </p>
          <button class="mystery-button primary victory-close">Continue</button>
          <button class="mystery-button secondary" id="victory-restart">Play Again</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.victory-close').addEventListener('click', () => {
      modal.remove();
      openSecretFolder();
    });

    modal.querySelector('#victory-restart').addEventListener('click', () => {
      if (confirm('Are you sure you want to restart? All progress will be lost.')) {
        resetGame();
        modal.remove();
        window.location.reload();
      }
    });

    // Trigger confetti effect
    createConfetti();
  }

  function createConfetti() {
    const colors = ['#33a1ff', '#4be0c3', '#ffd366', '#ff6f91', '#c977ff'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
      }, i * 30);
    }
  }

  function updateClueJournal() {
    // Update any existing journal displays
    const journal = document.querySelector('.clue-journal');
    if (journal) {
      // Refresh the hint system if it's open
      journal.closest('.mystery-modal')?.remove();
    }
  }

  // Clue trigger system
  function setupClueDetection() {
    // Intercept terminal commands
    const originalAppendTerminalOutput = window.appendTerminalOutput;
    if (originalAppendTerminalOutput) {
      window.appendTerminalOutput = function(text) {
        originalAppendTerminalOutput.apply(this, arguments);
        
        // Check for "status" command
        if (text && text.includes('cwd:') && text.includes('files opened:')) {
          discoverClue('clue1');
        }
      };
    }

    // Monitor paint strokes
    const originalIncrementStat = window.incrementStat;
    if (originalIncrementStat) {
      window.incrementStat = function(key) {
        originalIncrementStat.apply(this, arguments);
        
        if (key === 'strokes' && window.paintStrokes >= 5) {
          discoverClue('clue3');
        }
      };
    }

    // Monitor file operations
    const originalAddFile = window.addFile;
    if (originalAddFile) {
      window.addFile = function(path, content) {
        const result = originalAddFile.apply(this, arguments);
        
        if (path && path.toLowerCase().includes('hint.txt')) {
          discoverClue('clue4');
        }
        
        return result;
      };
    }

    // Monitor clock for 7:00 or 19:00
    setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      
      if ((hour === 7 || hour === 19) && minute === 0) {
        discoverClue('clue5');
      }
    }, 30000);

    // Monitor notification center
    const trayNotifications = document.getElementById('tray-notifications');
    if (trayNotifications) {
      trayNotifications.addEventListener('click', () => {
        setTimeout(() => {
          discoverClue('clue6');
        }, 1000);
      });
    }
  }

  // Public API
  window.AuroraMystery = {
    init: function() {
      initGameState();
      createLockedFolder();
      setupClueDetection();
      
      // Add game menu button
      this.addGameMenu();
      
      console.log('%c🔍 Aurora Mystery Game Initialized', 'color: #33a1ff; font-size: 14px; font-weight: bold;');
      console.log('%cFind the clues hidden throughout the system to unlock the CLASSIFIED folder!', 'color: #4be0c3;');
    },
    
    discoverClue: discoverClue,
    attemptUnlock: attemptUnlock,
    showHint: showHintSystem,
    resetGame: resetGame,
    getGameState: () => ({ ...gameState }),
    
    // Developer tools (for testing)
    __dev: {
      revealAllClues: () => {
        Object.keys(CLUES).forEach(id => discoverClue(id, true));
        updateClueJournal();
      },
      unlockFolder: () => {
        gameState.folderUnlocked = true;
        saveGameState();
        revealSecretFolder();
      },
      resetAttempts: () => {
        gameState.attemptsRemaining = 5;
        saveGameState();
      }
    },
    
    addGameMenu: function() {
      const menu = document.createElement('div');
      menu.id = 'mystery-menu';
      menu.className = 'mystery-menu';
      menu.innerHTML = `
        <button class="mystery-menu-button" title="Clue Journal">📖</button>
      `;
      
      document.body.appendChild(menu);
      
      menu.querySelector('.mystery-menu-button').addEventListener('click', () => {
        showHintSystem();
      });
    }
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => window.AuroraMystery.init(), 100);
    });
  } else {
    setTimeout(() => window.AuroraMystery.init(), 100);
  }

})(window);
