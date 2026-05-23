# 🧟 Zombie Fighter — My First JavaScript Game

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

> *A browser-based 2D action game where a hero battles an undead enemy in real time.*

---

## 🎮 About the Game

**Zombie Fighter** is my first JavaScript project — a sprite-based 2D game built entirely with vanilla HTML, CSS, and JavaScript. No frameworks, no game engines. Just pure JS and a lot of learning.

You control a hero who must survive waves of zombie attacks before time runs out. Move, position yourself, and outlast the undead!

---

## 🕹️ How to Play

| Key | Action |
|-----|--------|
| `Enter` | Start the game |
| `D` | Move right |
| `A` | Move left |
| `Space` | Attack *(coming soon)* |

- The **zombie** will walk toward you and attack when close
- You have **50 seconds** before time runs out
- Survive and defeat the zombie to win — let it catch you and it's game over!

---

## ✨ Features

- 🏃 **Animated sprites** — frame-by-frame animation for idle, run, walk, and attack states
- 🤖 **Simple AI** — the zombie tracks your position and switches between walking and attacking
- ⏱️ **Countdown timer** — 50 seconds on the clock, every second counts
- 🎨 **Sprite-based characters** — hero and female zombie with full animation sets
- 💀 **Death animation** — zombie plays a death sequence when defeated

---

## 🛠️ Built With

- **HTML5** — structure and image rendering
- **CSS3** — fixed positioning, sprite scaling, layout
- **Vanilla JavaScript** — game loop via `setInterval`, DOM manipulation, keyboard events

No libraries. No canvas. Just the basics — which made it a great learning experience.

---

## 📁 Project Structure

```
zombie-fighter/
│
├── index.html          # Main game page
├── style.css           # Positioning and layout
├── script.js           # All game logic
│
└── assets/
    ├── Background.jpg
    ├── hero/
    │   ├── Idle (1-10).png
    │   ├── Run (1-10).png
    │   └── Attack (1-10).png
    └── femaleZombie/
        ├── Idle (1-15).png
        ├── Walk (1-10).png
        ├── Attack (1-8).png
        └── Dead (1-12).png
```

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/zombie-fighter.git
   ```

2. Open `index.html` in your browser — no server needed!

3. Press **Enter** to start, then use **A** and **D** to move.

---

## 🧠 What I Learned

This was my first time building something with JavaScript from scratch. Here's what I picked up:

- Using `setInterval` to create animation loops
- Manipulating the DOM with `getElementById` and `style`
- Handling keyboard events with `onkeyup`
- Thinking in **game states** (idle → running → attacking)
- Managing multiple workers/intervals without them clashing
- Using CSS `transform: scaleX(-1)` to flip sprites for direction

---

## 🔮 What's Next

- [ ] Implement the attack mechanic for the hero (`Space` key)
- [ ] Add health bars for both characters
- [ ] Sound effects and background music
- [ ] Multiple zombie enemies
- [ ] Score system and high score tracking
- [ ] Mobile touch controls

---

## 🙏 Acknowledgements

- Sprite assets from [itch.io](https://itch.io) free game assets
- Inspired by classic side-scrolling beat-em-up games

---

*Made with curiosity, a lot of `console.log`, and zero regrets.* 🧟‍♀️⚔️
