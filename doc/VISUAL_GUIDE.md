# 🎨 Visual Guide - Aurora Mystery

## 📸 What You'll See When Playing

### 1. Boot Sequence (First 5 seconds)
```
┌─────────────────────────────────────┐
│                                     │
│         A U R O R A                 │
│                                     │
│     [████████░░░░░░░░░░░░]         │
│                                     │
│   Initializing immersive desktop   │
│        experience...                │
│                                     │
└─────────────────────────────────────┘
```
- Starfield background
- Aurora logo
- Progress bar animation
- Blue gradient theme

---

### 2. Desktop View
```
Desktop Icons:              System Tray:
┌──────┐ ┌──────┐          ╔══════════════╗
│  🔒  │ │  📝  │          ║  🔔  12:34  ║
│CLASS │ │ Text │          ╚══════════════╝
│IFIED │ │ Pad  │
└──────┘ └──────┘                    ┌──────┐
┌──────┐ ┌──────┐                    │  📖  │ ← Clue Journal
│  💻  │ │  >_  │                    └──────┘
│ Code │ │Term  │
└──────┘ └──────┘          
┌──────┐ ┌──────┐
│  🗂️  │ │  🎨  │          Taskbar:
│Files │ │Paint │          ╔════════════════════╗
└──────┘ └──────┘          ║ ◈ [App1] [App2]... ║
┌──────┐                   ╚════════════════════╝
│  🕹️  │
│ Game │
└──────┘
```

Key Visual Elements:
- **Locked folder** (🔒) pulses and floats
- **Clue Journal** (📖) in bottom-right corner
- **Starfield** animated background
- **Glass-effect** taskbar

---

### 3. Mission Briefing (First File to Open)
```
╔═══════════════════════════════════════════╗
║    OPERATION AURORA - CLASSIFIED          ║
║         SECURITY LEVEL: OMEGA             ║
╚═══════════════════════════════════════════╝

Agent,

You have been selected for a critical 
intelligence operation...

YOUR MISSION:
Unlock the CLASSIFIED folder...

The encrypted password is: ZALSSHY
But entering it directly will FAIL...

P.S. Caesar once said: 
"The secret lies in the shift."
```

---

### 4. Password Prompt (When Clicking Locked Folder)
```
┌──────────────────────────────────────────┐
│  🔐 CLASSIFIED ACCESS              ×    │
├──────────────────────────────────────────┤
│                                          │
│  This folder is protected. Enter the    │
│  password to unlock.                     │
│                                          │
│  Attempts remaining: 5                   │
│  Clues found: 2/7                        │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │ [Enter password...]                │ │
│  └────────────────────────────────────┘ │
│                                          │
│  [Unlock]  [Get Hint]  [Cancel]         │
│                                          │
│  ⚠️ Access Denied! 4 attempts remaining │
│  💡 Password should be all capitals     │
│                                          │
└──────────────────────────────────────────┘
```

Visual Feedback:
- ✅ Green for success
- ❌ Red for failure
- 💡 Yellow for hints
- Blue gradient background

---

### 5. Clue Journal (📖 Button)
```
┌──────────────────────────────────────────┐
│  📖 Clue Journal                    ×   │
├──────────────────────────────────────────┤
│                                          │
│  Discovered Clues (3/7)                  │
│  ┌────────────────────────────────────┐ │
│  │ ✓ Terminal Command                 │ │
│  │ First clue found! Note: "Seven     │ │
│  │ steps forward in the alphabet"     │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │ ✓ Hidden Code Comment              │ │
│  │ Clue #2: The encrypted password    │ │
│  │ is "ZALSSHY"                       │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Undiscovered Clues (4)                  │
│  ┌────────────────────────────────────┐ │
│  │ 🔒 Mystery Clue 1                  │ │
│  │ [Reveal Hint (1 hints used)]       │ │
│  └────────────────────────────────────┘ │
│                                          │
│  🔢 Caesar Cipher Decoder                │
│  ┌────────────────────────────────────┐ │
│  │ Encrypted: [ZALSSHY]               │ │
│  │ Shift: [7]  [Decode]               │ │
│  │                                    │ │
│  │ Decoded: STELLAR                   │ │
│  └────────────────────────────────────┘ │
│                                          │
└──────────────────────────────────────────┘
```

Color Coding:
- 🟢 Green cards = Discovered clues
- ⚫ Gray cards = Locked clues
- 🔵 Blue section = Decoder tool

---

### 6. Clue Discovery Notification (Slide-in from right)
```
                        ┌────────────────────┐
                        │ 🔍 Clue Discovered!│
                        ├────────────────────┤
                        │ Paint Canvas Secret│
                        │                    │
                        │ Clue #3: Each     │
                        │ letter moves 7     │
                        │ positions in the   │
                        │ alphabet           │
                        │                    │
                        │ 3 of 7 clues found │
                        └────────────────────┘
```

Animation: Slides in from right, stays 6 seconds, slides out

---

### 7. Victory Screen (When Password Correct)
```
┌──────────────────────────────────────────┐
│                                          │
│       🎉 MISSION COMPLETE! 🎉            │
│                                          │
│    Congratulations, Agent!               │
│                                          │
│  You've successfully decoded the cipher  │
│  and unlocked the CLASSIFIED folder.     │
│                                          │
│  ┌─────────┐  ┌─────────┐              │
│  │   7/7   │  │   2/5   │              │
│  │  Clues  │  │Attempts │              │
│  └─────────┘  └─────────┘              │
│  ┌─────────┐  ┌─────────┐              │
│  │  12:34  │  │    3    │              │
│  │  Time   │  │  Hints  │              │
│  └─────────┘  └─────────┘              │
│                                          │
│  The secret files reveal Operation      │
│  Aurora's true purpose...                │
│                                          │
│        [Continue]  [Play Again]          │
│                                          │
└──────────────────────────────────────────┘
```

Special Effects:
- 🎊 Confetti particles falling
- ✨ Gradient background (blue→teal)
- 📊 Stats grid display
- Celebration animation

---

### 8. Unlocked Folder Icon (After Victory)
```
Before:          After:
┌──────┐        ┌──────┐
│  🔒  │   →    │  🔓  │  ← Open lock
│CLASS │        │CLASS │
│IFIED │        │IFIED │
└──────┘        └──────┘
 Pulse          Bounce
Animation       Animation
```

The folder changes from locked (🔒) to unlocked (🔓) with bounce effect

---

## 🎨 Color Palette

### Primary Colors
- **Aurora Blue**: `#33a1ff` - Buttons, accents
- **Deep Blue**: `#0d72d6` - Button hover
- **Teal**: `#4be0c3` - Success, clues
- **Gold**: `#ffd366` - Warnings, hints
- **Coral**: `#ff6f91` - Errors
- **Purple**: `#c977ff` - Special elements

### Background Gradients
- Desktop: Dark blue gradient (top-left to bottom-right)
- Modals: Glass effect with blur
- Taskbar: Semi-transparent dark with blur
- Cards: Subtle transparency layers

---

## ✨ Animations You'll See

### 1. Boot Sequence
- Progress bar fills (0→100% in 5s)
- Logo fade-in
- Screen fade-to-desktop

### 2. Locked Folder
- **Pulse**: Gentle scale 1.0 → 1.05 → 1.0 (2s loop)
- **Float**: Lock badge moves up/down (3s loop)
- **Unlock**: Bounce + rotate on success

### 3. Modals
- **Slide-up**: From bottom when opening
- **Fade-in**: Background overlay appears
- **Slide-in**: Notifications from right

### 4. Confetti
- 100 colored particles
- Fall from top to bottom
- Rotate during descent
- Fade out gradually

### 5. Buttons
- Hover: Lift up 2px + shadow
- Click: Press down slightly
- Pulse: Important buttons gently pulse

---

## 📱 Responsive Design

### Desktop (1920×1080)
```
[Full desktop with all icons]
[Large modals and windows]
[Spacious layouts]
```

### Tablet (768×1024)
```
[Icons in grid]
[Scaled modals]
[Touch-friendly buttons]
```

### Mobile (375×667)
```
[Compact icon layout]
[Full-screen modals]
[Large touch targets]
```

---

## 🖱️ Interactive Elements

### Hover Effects
- Desktop icons: Lift up + glow
- Buttons: Lighten + shadow
- Taskbar items: Highlight
- Clue cards: Subtle glow

### Click Effects
- Buttons: Press animation
- Icons: Scale pulse
- Inputs: Focus glow
- Links: Color change

---

## 🎭 Theme Variations

### Dark Mode (Default)
- Deep blue backgrounds
- White/light blue text
- Glowing accents
- Starfield backdrop

### Glass Effect
- Transparency layers
- Backdrop blur
- Subtle borders
- Depth perception

---

## 📐 Layout Principles

### Desktop Layout
```
Top-left:    Desktop icons
Top-right:   Notification center
Bottom:      Taskbar
Bottom-right: Clue Journal button
Center:      Floating windows
```

### Modal Layout
```
Header:  Title + Close button
Body:    Content with scroll
Footer:  Action buttons
```

### Card Layout
```
Icon/Status
Title
Content/Description
Actions
```

---

## 🎬 Animation Timeline

### Game Start
```
0s:   Boot screen visible
5s:   Fade to desktop
6s:   Starfield animates
7s:   Notification slides in
```

### Clue Discovery
```
0s:   Player triggers action
0.5s: Notification slides in
6.5s: Notification slides out
7s:   Removed from DOM
```

### Victory
```
0s:   Password accepted
0.2s: Modal slides up
0.5s: Confetti starts
2s:   Stats animate in
```

---

## 🎨 Visual Hierarchy

### Primary Focus
1. Locked CLASSIFIED folder
2. Password prompt
3. Clue Journal button

### Secondary Elements
- Application icons
- Taskbar
- System tray

### Background Elements
- Starfield
- System stats
- Desktop wallpaper

---

## 💡 User Interface Tips

### Good UX Practices Used
✅ Clear call-to-action buttons
✅ Immediate visual feedback
✅ Consistent color coding
✅ Helpful error messages
✅ Progress indicators
✅ Keyboard shortcuts
✅ Auto-save progress
✅ Undo-friendly (reset game)

### Accessibility Considerations
- High contrast text
- Large click targets
- Clear button labels
- Keyboard navigation support
- Screen-reader friendly structure

---

## 🖼️ Screenshot Moments

### Best Times to Capture
1. Boot screen with progress bar
2. Desktop with locked folder
3. Password prompt with feedback
4. Clue Journal full of discoveries
5. Victory screen with confetti
6. Unlocked folder icon

---

This visual guide helps you understand what to expect when playing Aurora Mystery!

**Open `web_os.html` to see it all in action!** 🎮✨
