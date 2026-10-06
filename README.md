
# Taha Counter

A simple, client-side counter application built with HTML, CSS, and JavaScript. It allows users to increment, decrement, and reset a counter, with a maximum limit of 50. Designed as a learning project for practicing DOM manipulation and event handling.

---

## ✨ Features

- ➕ **Increment** — Increases the counter by 1 (max: 50)
- ➖ **Decrement** — Decreases the counter by 1 (min: 0)
- 🔄 **Reset** — Resets the counter to 0
- ⚠️ **Limit Warning** — Shows a message when reaching the limit
- 🎨 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Usage |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Styling, Flexbox, Radial Gradient |
| JavaScript | DOM manipulation and event handling |
| Font Awesome | Icons for buttons |

---

## 📂 Project Structure

```text
Taha-counter/
├── index.html
├── style.css
└── script.js
```

---

## 🚀 How to Use

1. Open `index.html` in a modern browser.
2. Click the **+** button to increase the counter.
3. Click the **−** button to decrease the counter.
4. Click the **reset icon** to set the counter back to 0.

No installation or build step required.

---

## 🔍 How It Works

The JavaScript code provides three main functions:

1. **Increment** — Reads the current value, adds 1, and checks if it exceeds 50.
2. **Decrement** — Reads the current value, subtracts 1, and checks if it goes below 0.
3. **Reset** — Sets the counter value to 0.

The counter uses `textContent` for reading and `innerHTML` for writing.

---

## ⚠️ Known Issues

- The `counterValue` variable is not declared with `let` or `const`, which creates an implicit global variable.
- The reset button does not restore the title text to its original state.
- The `innerHTML` is used for simple numbers, while `textContent` would be safer and faster.
- The font family `"Valley Sans"` is not imported, so it may fall back to the system font.

---

## 📱 Responsive Design

The layout is centered using Flexbox and works on most screen sizes. The box has a fixed height and width, which may cause issues on very small screens.

---

## 🌐 Live Demo

**Website:** https://mozafaridev.github.io/Taha-counter/

---

## 📬 Contact

- **GitHub:** https://github.com/MozafariDev
- **Instagram:** https://instagram.com/taha.mz_dev

---

## 📌 Project Status

This is a learning project. It works as intended, but contains a few known issues (listed above) that may be fixed in future updates.

---

<p align="center">
  ⭐ Thanks for checking out this project.
</p>
