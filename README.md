📱 Calculator

A desktop calculator app built using the SimpleKit UI framework. https://github.com/CS-3035-2025/simplekit
This project replicates a standard calculator interface while enforcing input validation rules to prevent invalid operations.

🚀 Features

✅ Basic Arithmetic Operations
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

✅ Number Input
- Buttons for 0–9
- 0 button spans 3 columns for realistic calculator design

✅ Special Buttons
- = → evaluates the expression
- < (backspace) → removes the last input

✅ Display
- Results label → current input or calculation result (default: 0)
- History label → shows the last evaluated expression

✅ Input Safety
- Prevents multiple operators in succession (30 + + 35 ❌)
- Prevents operators at the start (* 30 - 35 ❌)
- Prevents = if the last character is an operator (30 * 35 + ❌)
- Replaces an operator if another is entered consecutively (30 + - 35 ✅ → 30 - 35)
- Handles invalid results (NaN, Infinity) gracefully by resetting to 0

🎨 Appearance & Layout
The calculator is designed to match the provided mockup (img folder).
- Main panel:
  - 300 x 450 pixels
  - White background, centred in window
- Layouts used:
  - wrapRow → row-based button grouping
  - fillRow → for consistent row/column alignment
  - centred → centres the main calculator in the app
- Button sizing:
  - All number/operator buttons are uniform squares
  - 0 button spans width of three buttons
  - < (back) button spans width of two buttons
  - = button spans height of two buttons
- Labels:
  - Results label font: ≥ 20pt, black text, right-aligned
  - History label font: 20pt, dark grey, right-aligned

⚙️ Technical Details
- Framework: SimpleKit https://github.com/CS-3035-2025/simplekit (imperative mode)
- Language: TypeScript / JavaScript
- Evaluation: Uses JavaScript’s built-in eval() for arithmetic
- Validation:
  - Checks last character before appending new input
  - Resets input correctly after calculation or error states
  - Handles division by zero (result → Infinity, resets on next input)

📂 File Structure
📦 calculator-project
 ┣ 📂 simplekit/        # Framework source (imperative mode)
 ┣ 📂 img/              # Calculator mockup images
 ┣ 📜 main.ts           # Main calculator implementation
 ┣ 📜 README.md         # Project documentation
 ┗ 📜 package.json      # Project metadata

🖥️ Demo Workflow
1. Enter numbers/operators:
  - Example: 53 + 7
2. Press =:
  - Result appears in results label
  - Input expression moves to history label
3. Press operator after evaluation:
  - Continues from result (e.g., 60 = → then press + → 60 +)
4. Press number after evaluation:
  - Resets display (e.g., 60 = → then press 5 → 5)
5. Press <:
  - Deletes last input, or resets to 0 if empty

🛠️ Installation & Running
Clone the repository and run locally:

# Clone repo
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install dependencies (if any)
git submodule init
git submodule update
npm install

# Run project
npm run dev

🧪 Known Limitations
- Text overflow in result/history labels is not yet handled.
- Uses eval() for simplicity; safer expression parsing could be implemented.
- No support for decimals or parentheses.

🌟 Future Improvements
- Add support for decimal numbers (.).
- Implement keyboard input handling.
- Improve evaluation safety by building a custom parser instead of eval().
- Handle very large numbers with formatting (scientific notation).
- Support clear (C/AC) functionality.

👨‍💻 Author
Developed as part of a CS course project using the SimpleKit framework.