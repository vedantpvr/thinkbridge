# DOM and Events Overview

## 1. Selecting Elements
We can select elements using:
- `document.getElementById("id")` → Selects a single element by its ID.
- `document.querySelector("selector")` → Selects the first element matching a CSS selector.
- `document.querySelectorAll("selector")` → Selects all elements matching the selector.
- `document.getElementsByClassName("class")` → Selects elements by class.

Example:
```js
const fullnameInput = document.getElementById("fullname");
const passwordInput = document.querySelector("#password");
```