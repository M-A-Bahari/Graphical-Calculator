# 📱 Calculator

## Overview
This project is a **simple calculator** implemented using the [SimpleKit](https://github.com/CS-3035-2025/simplekit/tree/11f3333eb62f92db3158021609f5135b9bf9f758) framework.  
The objective is to recreate the calculator design provided in the `img` folder by utilizing only the `wrapRow`, `fillRow`, and `centred` layout methods.  
The use of `fixedLayout` is strictly prohibited.

---

## Features
- A **centred 300x450 panel** serves as the main calculator interface.
- Functional buttons for:
  - Numbers: `0–9`
  - Operators: `+`, `-`, `*`, `/`
  - Special keys: `=`, `<` (backspace)
- Two display sections:
  - **Results label** – Displays current input and results (default is `0`).
  - **History label** – Displays the previous equation when `=` is pressed.
- Fully implemented **event handlers**:
  - Digits and operators append to the results label.
  - `=` updates the history label, evaluates the current expression (using `eval()`), and displays the result.
  - `<` removes the most recent character entered (backspace functionality).

---

## Input Restrictions
The calculator enforces rules to prevent invalid expressions:
- Prohibits multiple operators in succession.  
  Example: ❌ `30 + + 35`
- Disallows an operator at the beginning of an expression.  
  Example: ❌ `* 30 - 35`
- Prevents evaluation (`=`) if the expression ends with an operator.  
  Example: ❌ `30 * 35 +`
- Replaces the previous operator if a new operator is pressed immediately after another.

---

## Appearance Requirements
- **Layouts:** Implemented exclusively with `wrapRow`, `fillRow`, and `centred`.
- **Spacing:** The background panel contains no unused space; all space is occupied by widgets.
- **Button sizing:**
  - `0` → three times the width of a standard button.
  - `<` → twice the width of a standard button.
  - `=` → twice the height of a standard button.
  - All other buttons are uniform squares.
- **Labels:**
  - Results label font size: ≥ 14pt.
  - History label text color: grey.
- Handling of text overflow in labels is **not implemented** (not required).

---

## Running the Project
To run the calculator locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
