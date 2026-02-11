# 📚 Aurora Mystery - Navigation Index

## 🚀 START HERE

**To play the game immediately:**
1. Open `web_os.html` in your browser
2. Read the on-screen instructions
3. Have fun! 🎮

---

## 📖 Documentation

### New User?
→ Read **`doc/QUICK_START.md`** for a 60-second introduction

### Want Full Details?
→ Read **`doc/GAME_README.md`** for complete documentation

### Developer/Curious?
→ Read **`doc/PROJECT_SUMMARY.md`** for technical insights

---

## 🗂️ File Overview

### Core Game Files
| File | Purpose | Lines |
|------|---------|-------|
| `web_os.html` | Main application + OS integration | 1,200+ |
| `game_logic.js` | Complete puzzle game engine | 520 |
| `mystery_styles.css` | Game UI styling & animations | 800+ |
| `aurora.css` | Base WebOS styles | 600+ |

### Documentation
| File | Purpose | Read Time |
|------|---------|-----------|
| `doc/QUICK_START.md` | Fast introduction | 3 min |
| `doc/GAME_README.md` | Complete guide | 15 min |
| `doc/PROJECT_SUMMARY.md` | Technical overview | 10 min |
| `README.md` | This navigation file | 2 min |

---

## 🎯 Quick Reference

### The Challenge
- **Password**: Find and decode it
- **Clues**: 7 hidden across the system
- **Attempts**: 5 before lockout
- **Tools**: Clue Journal (📖 button)

### Clue Locations (Spoiler-Free)
1. Terminal command
2. Code file
3. Paint application
4. File creation
5. System clock
6. Notifications
7. Welcome document

### Solution (Full Spoiler)
<details>
<summary>Click to reveal the password</summary>

**Encrypted**: `ZALSSHY`  
**Cipher**: Caesar +7 shift  
**Password**: `STELLAR`

</details>

---

## 🎨 Features At-a-Glance

### Game Elements
- 🔒 Locked CLASSIFIED folder
- 🕵️ Mission briefing document
- 📖 Interactive Clue Journal
- 🔢 Caesar cipher decoder
- 🎉 Victory screen with stats
- 💾 Auto-save progress

### WebOS Applications
- 📝 **Nebula TextPad** - Text editor
- 💻 **Aurora Code Studio** - Code editor (Ace)
- >_ **Celestia Terminal** - Python (Pyodide)
- 🗂️ **Nova File Explorer** - File manager
- 🎨 **Radiant Canvas** - Paint app
- 🕹️ **Stellar Runner** - Mini-game

---

## 🛠️ Developer Tools

### Browser Console Commands
```javascript
// View game state
AuroraMystery.getGameState()

// Testing shortcuts
AuroraMystery.__dev.revealAllClues()
AuroraMystery.__dev.unlockFolder()
AuroraMystery.__dev.resetAttempts()

// Manual clue discovery
AuroraMystery.discoverClue('clue1')

// Reset everything
AuroraMystery.resetGame()
```

---

## 📊 Project Stats

- **Total Files**: 7
- **Total Code**: ~3,200 lines
- **Documentation**: ~1,000 lines
- **Clues Hidden**: 7
- **Applications**: 6
- **Development Time**: 1 session
- **External Dependencies**: 2 (Ace, Pyodide - already existed)

---

## 🎓 Educational Value

Players will learn:
- ✅ Caesar cipher cryptography
- ✅ Pattern recognition
- ✅ Problem decomposition
- ✅ Code analysis
- ✅ File system navigation
- ✅ Persistence in challenges

---

## 🔧 Customization

### Easy Changes
- Password: Edit `ACTUAL_PASSWORD` in `game_logic.js`
- Attempts: Change `attemptsRemaining` initial value
- Clues: Modify `CLUES` object
- Styling: Edit `mystery_styles.css`

### See `GAME_README.md` for full customization guide

---

## 🐛 Troubleshooting

### Game won't load?
- Enable JavaScript
- Use modern browser (Chrome, Firefox, Edge, Safari)
- Check browser console for errors
- If Pyodide fails under `file://`, serve the folder with a local HTTP server and open `http://localhost:8000/web_os.html`

### Folder won't unlock?
- Type `STELLAR` in ALL CAPS
- No extra spaces
- Not the encrypted version!

### Lost progress?
- Game saves to localStorage automatically
- Don't clear browser data
- Use same browser to continue

---

## 🎯 Recommended Play Order

1. **First Playthrough**: Explore naturally, use hints
2. **Second Run**: Find all clues, minimize attempts
3. **Speedrun**: Beat your time
4. **Teaching**: Share with a friend

---

## 🏆 Challenge Goals

### Beginner
- [ ] Complete the puzzle
- [ ] Find at least 5 clues
- [ ] Use the cipher decoder

### Intermediate
- [ ] Find all 7 clues
- [ ] Solve under 15 minutes
- [ ] Use 3 or fewer attempts

### Advanced
- [ ] No hints used
- [ ] Solve under 10 minutes
- [ ] Only 1 password attempt

### Master
- [ ] Sub-5-minute completion
- [ ] Perfect memory of clue locations
- [ ] Manual cipher decoding

---

## 💡 Tips for Success

1. **Read Everything**: Every file has purpose
2. **Explore All Apps**: Clues are everywhere
3. **Use the Journal**: Track progress easily
4. **Think Like Caesar**: The cipher is the key
5. **Don't Give Up**: All clues are findable

---

## 🌟 Special Features

### Animations
- Locked folder pulse effect
- Modal slide-ins
- Confetti on victory
- Smooth transitions

### UI Polish
- Glassmorphism effects
- Color-coded feedback
- Responsive design
- Keyboard shortcuts

### Quality of Life
- Auto-save progress
- Attempt counter
- Hint system
- Cipher decoder tool

---

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ⚠️ JavaScript required
- ⚠️ localStorage needed

---

## 🎉 Have Fun!

This isn't just a game—it's an **educational experience** wrapped in an **engaging narrative**. You'll learn real cryptography while having a blast!

**Ready to become an elite intelligence agent?**

### 🚀 Open `web_os.html` and start your mission!

---

## 📞 Need Help?

1. Check `QUICK_START.md` for solutions
2. Use the in-game Clue Journal
3. Open browser console for debug tools
4. Read `GAME_README.md` for deep dive

---

## 🎁 Share the Fun

If you enjoy the game:
- Share it with friends
- Challenge them to beat your time
- Teach them about ciphers
- Customize it further!

---

**Good luck, Agent!** 🕵️‍♀️🔐🎮

*The CLASSIFIED folder awaits your genius.*
