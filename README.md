# etchasketch
This is another project while finishing up The Odin Project Foundation Course.


Etch-A-Sketch Project

A simple web-based drawing grid built with HTML, CSS, and JavaScript. This project practices Flexbox layout and DOM manipulation without using CSS Grid.

Features
Dynamic Grid Creation:
Default grid is 16×16 squares.
Squares are generated dynamically with JavaScript (not hardcoded).
Grid always fits within a fixed 960×960 container.
Interactive Drawing:
Hovering over squares changes their color, leaving a pixelated “trail.”
Color change can be implemented by toggling classes or modifying inline styles.

Custom Grid Size:
A “New Grid” button prompts the user for the number of squares per side (max: 100).
Old grid clears and a new one is generated at the same total size.
Example: entering 64 creates a 64×64 grid in the same space.

Tech Stack
HTML – basic structure (container div + button).
CSS (Flexbox) – to align grid squares as rows/columns.
JavaScript – for dynamic grid creation, hover effect, and resizing logic.

Notes
Project focuses on Flexbox practice, not CSS Grid.
Be mindful of borders/margins so cells remain square.

Debugging tips:
Ensure CSS/JS are properly linked.
Use browser dev tools and console.log() for troubleshooting.