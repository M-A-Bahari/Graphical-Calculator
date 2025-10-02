// import simplekit
import {
  Layout,
  SKContainer,
  SKLabel,
  SKButton,
  startSimpleKit,
  setSKRoot
} from "./simplekit/src/imperative-mode";
// To make a distinction in between the states after calculation.
let justCalculated = false;


// Starter code
// Takes in one button input (number or operator).
// Checks how it should be added to the label and adds it
// the isOperator function below will be of use
function updateLabel(input: number | string) {
	const temp = input.toString();

	// justCalculated checks:
	// - If the result is "NaN", "Infinity", when pressed an operator it does 0 + , for new numbers it resets to 0.
	// - If pressed an operator after recent evaluation, take the operator input. 
			// If pressed a number button, reset the resultLabel, historyLabel and take the number as the first input.
	// - If the text is only a zero, replace the zero

	if (["NaN", "Infinity"].includes(resultLabel.text)) {
		if (isOperator(temp)) {
			resultLabel.text = "0 " + temp + " ";
		} else {
			resultLabel.text = temp;
		}
		justCalculated = false;
		historyLabel.text = resultLabel.text; // sync history
		return;
	}

	if (justCalculated) { 
		if (isOperator(temp)) {
			resultLabel.text = resultLabel.text + " " + temp + " "; 
		} else { 
			resultLabel.text = temp; 
		} 
		justCalculated = false;
		historyLabel.text = resultLabel.text; // sync history
		return; 
	}
		
	if (resultLabel.text === "0") {
		if (isOperator(temp)) {
			resultLabel.text = "0 " + temp + " ";
		} else {
			resultLabel.text = temp;
		}
	} else {
		// Gets the final element in label string
		const finalElement = resultLabel.text.trim().slice(-1);

		// If last element is operator and another operator pressed, replace it
		if (isOperator(finalElement) && isOperator(temp)) {
			resultLabel.text = resultLabel.text.trim().slice(0, -1) + temp + " ";
		} else if (isOperator(temp)) {
      		resultLabel.text += " " + temp + " ";
    	}
		else {
			resultLabel.text += temp;
		}
	}
	historyLabel.text = resultLabel.text; // sync history
}

// is Operator Function takes in one string & checks to see if val is one of the operators
function isOperator(val: string): boolean {
	return ["/", "+", "-", "*"].includes(val);
}

// Calculate Funjction
function calculateResult(){
	const temp = resultLabel.text.trim();
	const last = temp.slice(-1);

	if (isOperator(last))
		return;

	historyLabel.text = temp;

	try {
		const result = eval(temp);
		resultLabel.text = result.toString();
		justCalculated = true;
	} catch {
		resultLabel.text = "NaN";
		justCalculated = true;
	}
}

// The root container
const root = new SKContainer();
root.fill = "lightgrey";
root.layoutMethod = new Layout.CentredLayout();

// The graphical container 
const panelWidth:number = 300;
const panelHeight:number = 450;
const panel = new SKContainer({ width: panelWidth, height: panelHeight });
panel.fill = "white";
panel.layoutMethod = new Layout.WrapRowLayout;


// The result Label
const resultLabel = new SKLabel({
    text: "0",
    width: 300,
    height: 37.5,
    align: "right"
});
resultLabel.font = "30px Arial";
resultLabel.fontColour = "Black";

// The history label
const historyLabel = new SKLabel({
    text: "",
    width: 300,
    height: 37.5,
    align: "right"
});
historyLabel.font = "20px Arial";
historyLabel.fontColour = "darkgrey";

// Back (<) Button
const backButton = new SKButton({
	text: "<",
	width: 150,
	height: 75
});
backButton.font = "20px Arial";
backButton.radius = 5;

// Back Button Event which clears the last input
backButton.addEventListener("action", () => {
	let temp = resultLabel.text;
	if (temp.endsWith(" ")) {
		// remove space + operator + space (3 chars)
		temp = temp.slice(0, -3);
	} else {
		temp = temp.slice(0, -1);
	}
	resultLabel.text = temp === "" ? "0" : temp;
	historyLabel.text = resultLabel.text;
});

// Division (/) Button
const divisionButton = new SKButton({
	text: "/",
	width: 75,
	height: 75
});
divisionButton.font = "20px Arial";
divisionButton.radius = 5;
divisionButton.addEventListener("action", () => updateLabel("/"));

// Multiplication (*) Button
const multiplicationButton = new SKButton({
	text: "*",
	width: 75,
	height: 75
});
multiplicationButton.font = "20px Arial";
multiplicationButton.radius = 5;
multiplicationButton.addEventListener("action", () => updateLabel("*"));

// Subtraction (-) Button
const subtractionButton = new SKButton({
	text: "-",
	width: 75,
	height: 75
});
subtractionButton.font = "20px Arial";
subtractionButton.radius = 5;
subtractionButton.addEventListener("action", () => updateLabel("-"));

// Addition (+) Button
const additionButton = new SKButton({
	text: "+",
	width: 75,
	height: 75
});
additionButton.font = "20px Arial";
additionButton.radius = 5;
additionButton.addEventListener("action", () => updateLabel("+"));


// Equal (=) Button for calculation
// Create the same width and height container as panel.
const calculateContainer = new SKContainer({
	width: 300,
	height: 450
});
calculateContainer.layoutMethod = new Layout.WrapRowLayout ();

// Contains < , *, /, 7, 8, 9, -, 4, 5, 6, +
const TopRow = new SKContainer({ 
	width: 300, 
	height: 300 
});
TopRow.layoutMethod = new Layout.WrapRowLayout();

// bottomRow handles the botton portion for 1, 2, 3, =, 0.
const bottomRow = new SKContainer({
	width: 300,
	height: 150
});
bottomRow.layoutMethod = new Layout.FillRowLayout ();

// lefSide is for the left side of the bottomRow container which contains 1, 2, 3, 0.
const leftSide = new SKContainer({
	width: 225,
	height: 150
});
leftSide.layoutMethod = new Layout.WrapRowLayout ();

// The equal sign button
const calculateButton = new SKButton({
	text: "=",
	width: 75,
	height: 150
});
calculateButton.font = "20px Arial";
calculateButton.radius = 5;
calculateButton.addEventListener("action", () => calculateResult());


// Number 0 Button
const zeroButton = new SKButton({
	text: "0",
	width: 225,
	height: 75
});
zeroButton.font = "20px Arial";
zeroButton.radius = 5;
zeroButton.addEventListener("action", () => updateLabel(0));

// Number 1 Button
const oneButton = new SKButton({
	text: "1",
	width: 75,
	height: 75
});
oneButton.font = "20px Arial";
oneButton.radius = 5;
oneButton.addEventListener("action", () => updateLabel(1));

// Number 2 Button
const twoButton = new SKButton({
	text: "2",
	width: 75,
	height: 75
});
twoButton.font = "20px Arial";
twoButton.radius = 5;
twoButton.addEventListener("action", () => updateLabel(2));

// Number 3 Button
const threeButton = new SKButton({
	text: "3",
	width: 75,
	height: 75
});
threeButton.font = "20px Arial";
threeButton.radius = 5;
threeButton.addEventListener("action", () => updateLabel(3));

// Number 4 Button
const fourButton = new SKButton({
	text: "4",
	width: 75,
	height: 75
});
fourButton.font = "20px Arial";
fourButton.radius = 5;
fourButton.addEventListener("action", () => updateLabel(4));

// Number 5 Button
const fiveButton = new SKButton({
	text: "5",
	width: 75,
	height: 75
});
fiveButton.font = "20px Arial";
fiveButton.radius = 5;
fiveButton.addEventListener("action", () => updateLabel(5));

// Number 6 Button
const sixButton = new SKButton({
	text: "6",
	width: 75,
	height: 75
});
sixButton.font = "20px Arial";
sixButton.radius = 5;
sixButton.addEventListener("action", () => updateLabel(6));

// Number 7 Button
const sevenButton = new SKButton({
	text: "7",
	width: 75,
	height: 75
});
sevenButton.font = "20px Arial";
sevenButton.radius = 5;
sevenButton.addEventListener("action", () => updateLabel(7));

// Number 8 Button
const eightButton = new SKButton({
	text: "8",
	width: 75,
	height: 75
});
eightButton.font = "20px Arial";
eightButton.radius = 5;
eightButton.addEventListener("action", () => updateLabel(8));

// Number 9 Button
const nineButton = new SKButton({
	text: "9",
	width: 75,
	height: 75
});
nineButton.font = "20px Arial";
nineButton.radius = 5;
nineButton.addEventListener("action", () => updateLabel(9));


// Add child elements
root.addChild(panel);
root.addChild(calculateContainer);

// panel.addChild();
TopRow.addChild(resultLabel);
TopRow.addChild(historyLabel);
TopRow.addChild(backButton);
TopRow.addChild(multiplicationButton);
TopRow.addChild(divisionButton);
TopRow.addChild(sevenButton);
TopRow.addChild(eightButton);
TopRow.addChild(nineButton);
TopRow.addChild(subtractionButton);
TopRow.addChild(fourButton);
TopRow.addChild(fiveButton);
TopRow.addChild(sixButton);
TopRow.addChild(additionButton);

// calculateContainer.addChild()
leftSide.addChild(oneButton);
leftSide.addChild(twoButton);
leftSide.addChild(threeButton);
leftSide.addChild(zeroButton);
bottomRow.addChild(leftSide);
bottomRow.addChild(calculateButton);
calculateContainer.addChild(TopRow);
calculateContainer.addChild(bottomRow);

setSKRoot(root);
startSimpleKit();