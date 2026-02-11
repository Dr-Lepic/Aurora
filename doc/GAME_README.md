# 🎮 Aurora Mystery - WebOS Puzzle Game

## 🌟 Overview

Aurora Mystery transforms a fully functional WebOS into an immersive escape-room style puzzle game. Players must discover hidden clues throughout the system to decode a Caesar cipher and unlock a classified folder.

---

## 🎯 Game Concept

You're an intelligence agent tasked with unlocking a **CLASSIFIED folder** on the Aurora WebOS. The folder is password-protected, and the password is encrypted using a **Caesar cipher with a shift of 7**.

### The Challenge
- **Encrypted Password**: `ZALSSHY`
- **Actual Password**: `STELLAR`
- **Attempts**: 5 before lockout
- **Clues**: 7 scattered throughout the system

---

## 🕵️ How to Play

### 1. **Start Your Mission**
- Open the desktop and read `MISSION_BRIEFING.txt`
- Notice the locked 🔒 **CLASSIFIED** folder on your desktop
- Click the **📖 Clue Journal** button (bottom-right) to track progress

### 2. **Discover Clues**
Clues are hidden in various locations:

| Clue | Location | How to Discover |
|------|----------|-----------------|
| #1 | Terminal | Type `status` command in Celestia Terminal |
| #2 | Code Editor | Open `Projects/demo.js` in Aurora Code Studio |
| #3 | Paint App | Draw at least 5 strokes in Radiant Canvas |
| #4 | File Manager | Create a file named `HINT.txt` in any folder |
| #5 | System Clock | Wait until 7:00 or 19:00 (or set system time) |
| #6 | Notifications | Click the bell icon 🔔 in the taskbar |
| #7 | Welcome File | Open `Documents/Welcome.txt` in TextPad |

### 3. **Decode the Cipher**
- Use the **Caesar Cipher Decoder** in the Clue Journal
- Enter the encrypted password: `ZALSSHY`
- Set shift value to: `7`
- Discover the actual password: `STELLAR`

### 4. **Unlock the Folder**
- Double-click the **CLASSIFIED** folder
- Enter the decoded password: `STELLAR`
- Enjoy your victory! 🎉

---

## 🔐 Caesar Cipher Explanation

### What is it?
A **Caesar cipher** shifts each letter in the alphabet by a fixed number of positions.

### Example (Shift of 7):
```
Original:  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Encrypted: H I J K L M N O P Q R S T U V W X Y Z A B C D E F G
```

### Encoding STELLAR with +7 shift:
```
S → Z
T → A
E → L
L → S
L → S
A → H
R → Y
```
Result: **ZALSSHY**

### Decoding ZALSSHY with -7 shift:
```
Z → S
A → T
L → E
L → L
S → L
H → A
Y → R
```
Result: **STELLAR**

---

## 🎨 Game Features

### 🗂️ **Clue Journal** (📖 Button)
- Track discovered and undiscovered clues
- Reveal hints for hidden clues (uses hint counter)
- Built-in Caesar cipher decoder tool
- Progress tracking

### 🔒 **Password Prompt**
- Secure folder access system
- Attempt counter (5 attempts max)
- Real-time feedback on wrong attempts
- Hints for common mistakes

### 🏆 **Victory Screen**
- Complete statistics breakdown
- Time tracking
- Clues discovered count
- Attempts used
- Option to play again

### 💾 **Progress Persistence**
- Game state saved to localStorage
- Continue where you left off
- Reset option available

---

## 🛠️ Technical Implementation

### Architecture
```
index.html          - Main WebOS interface and apps
game_logic.js        - Puzzle game engine
mystery_styles.css   - Game UI styling
aurora.css          - Base OS styling
```

### Key Technologies
- **Vanilla JavaScript** - No frameworks, pure JS
- **localStorage** - Persistent game state
- **CSS Animations** - Smooth transitions and effects
- **Modular Design** - Clean separation of concerns

### Game State Management
```javascript
{
  cluesDiscovered: [],      // Array of discovered clue IDs
  attemptsRemaining: 5,     // Password attempts left
  hintsUsed: 0,            // Hint button clicks
  gameStartTime: timestamp, // For time tracking
  gameComplete: false,      // Win condition
  folderUnlocked: false    // Folder access state
}
```

### Clue Detection System
The game uses event interceptors to detect player actions:
- **Terminal**: Hooks into command output
- **Paint**: Monitors stroke count
- **Files**: Watches file creation
- **Clock**: Interval checking for specific times
- **Notifications**: Event listener on bell icon
- **File Reading**: Triggers on specific file opens

---

## 🎓 Educational Value

### Skills Developed
1. **Cryptography Basics** - Understanding Caesar ciphers
2. **Pattern Recognition** - Finding hidden clues
3. **Problem Decomposition** - Breaking down complex puzzles
4. **File System Navigation** - OS exploration
5. **Code Analysis** - Reading and understanding source
6. **Persistence** - Not giving up on challenges
7. **Logical Reasoning** - Connecting disparate clues

### Learning Outcomes
- Introduction to classical cryptography
- Hands-on experience with cipher decoding
- System exploration and documentation reading
- Attention to detail in problem-solving

---

## 🎯 Difficulty Levels

### Beginner Strategy
1. Read ALL documentation files first
2. Use the hint system liberally
3. Use the cipher decoder tool
4. Take your time - no time pressure

### Advanced Challenge
- Find all clues without using hints
- Minimize password attempts (ideally 1)
- Complete in under 10 minutes
- Manually decode without the tool

### Speedrun Mode
- Memorize clue locations
- Skip tutorial files
- Direct decode in head
- Target: Sub-5 minutes

---

## 🐛 Debugging / Testing

### Developer Console Commands

```javascript
// Show current game state
AuroraMystery.getGameState()

// Reveal all clues (testing)
AuroraMystery.__dev.revealAllClues()

// Unlock folder immediately (testing)
AuroraMystery.__dev.unlockFolder()

// Reset attempts to 5
AuroraMystery.__dev.resetAttempts()

// Manually discover a clue
AuroraMystery.discoverClue('clue1')

// Reset entire game
AuroraMystery.resetGame()
```

---

## 🎨 Customization Ideas

### Easy Modifications

1. **Change Password**
   - Edit `ACTUAL_PASSWORD` in `game_logic.js`
   - Update cipher clues in file system
   - Recalculate encrypted form

2. **Adjust Difficulty**
   - Modify `attemptsRemaining` initial value
   - Add/remove clues
   - Change clue trigger conditions

3. **Add More Clues**
   - Create new clue objects in `CLUES`
   - Add triggers in `setupClueDetection()`
   - Update file content hints

4. **Custom Cipher**
   - Implement different shift value
   - Or use a completely different cipher
   - Update decoder tool accordingly

---

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ⚠️ Requires JavaScript enabled
- ⚠️ Requires localStorage access

---

## 📝 Future Enhancements

### Potential Features
- [ ] Multiple difficulty levels
- [ ] Leaderboard system
- [ ] Daily challenge mode
- [ ] Multiplayer co-op
- [ ] Additional cipher types (ROT13, Vigenère, etc.)
- [ ] Easter egg achievements
- [ ] Sound effects and music
- [ ] Mobile-responsive design
- [ ] Story mode with multiple chapters
- [ ] User-created puzzle sharing

---

## 🏆 Achievement System (Concept)

### Achievements to Implement
- 🥇 **Perfect Run** - Unlock on first attempt
- 🔍 **Detective** - Find all clues without hints
- ⚡ **Speedrunner** - Complete under 5 minutes
- 🧠 **Cryptographer** - Manually decode without tool
- 📚 **Completionist** - Read every file in system
- 🎨 **Artist** - Create a painting before unlocking
- 💻 **Hacker** - Execute Python code in terminal
- 🎮 **Gamer** - Play Stellar Runner before solving

---

## 📄 License & Credits

### Created For
This project was created as a demonstration of:
- Interactive web-based puzzle design
- Educational cryptography introduction
- WebOS simulation with practical applications
- Gamification of learning experiences

### Technologies Used
- **Ace Editor** - Code syntax highlighting
- **Pyodide** - Python in the browser
- **Modern CSS** - Animations and effects
- **HTML5 Canvas** - Paint and game rendering

### Attribution
Based on Aurora WebOS, enhanced with mystery puzzle mechanics.

---

## 🎉 Conclusion

Aurora Mystery is more than just a game—it's an educational experience that teaches cryptography, problem-solving, and persistence through an engaging narrative. The combination of a fully functional WebOS with puzzle mechanics creates a unique and immersive experience.

**Ready to become an elite intelligence agent? Start your mission now!**

---

## 📞 Support & Feedback

### Having Issues?
1. Check browser console for errors
2. Verify localStorage is enabled
3. Try clearing browser cache
4. Use the developer console commands

### Need a Hint?
All clues are discoverable through normal system exploration. If stuck:
1. Read the `MISSION_BRIEFING.txt` carefully
2. Open the Clue Journal (📖 button)
3. Use hint reveals strategically
4. Remember: The number 7 is key!

**Good luck, Agent! 🕵️‍♀️🕵️‍♂️**

