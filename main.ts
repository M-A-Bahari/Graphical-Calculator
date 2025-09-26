// import simplekit
import {
  Layout,
  SKContainer,
  SKLabel,
  SKButton,
  startSimpleKit,
  setSKRoot
} from "./simplekit/src/imperative-mode";

// Starter code
// Takes in one button input (number or operator).
// Checks how it should be added to the label and adds it
// the isOperator function below will be of use
function updateLabel(num: number) {
  // If the text is only a zero, replace the zero
  if (["0", "NaN", "Infinity"].includes(resultLabel.text)) {
  	// do something
  } else {
	// Gets the final element in label string
	const finalElement = resultLabel.text.slice(-1);
    
    //
    //Check to see if the last element is an operator or not, if so add a space and then the number, if not set label to new input
    //
  }
}

// Takes in one string
// Checks to see if val is one of our operators
function isOperator(val: string): boolean {
	return ["/", "+", "-", "*"].includes(val);
}


const root = new SKContainer();
root.fill = "lightgrey";
root.layoutMethod = new Layout.CentredLayout();

const panelWidth:number = 300;
const panelHeight:number = 450;
const panel = new SKContainer({ width: panelWidth, height: panelHeight });
panel.fill = "white";
panel.layoutMethod = new Layout.WrapRowLayout;


const resultLabel = new SKLabel({
    text: "1 / 2 * 3 - 4 + 20",
    width: 300,
    height: 37.5,
    align: "right"
});
resultLabel.font = "25px Arial";
resultLabel.fontColour = "Black";


const historyLabel = new SKLabel({
    text: "30",
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

// Division (/) Button
const divisionButton = new SKButton({
	text: "/",
	width: 75,
	height: 75
});
divisionButton.font = "20px Arial";
divisionButton.radius = 5;

// Multiplication (*) Button
const multiplicationButton = new SKButton({
	text: "*",
	width: 75,
	height: 75
});
multiplicationButton.font = "20px Arial";
multiplicationButton.radius = 5;

// Subtraction (-) Button
const subtractionButton = new SKButton({
	text: "-",
	width: 75,
	height: 75
});
subtractionButton.font = "20px Arial";
subtractionButton.radius = 5;

// Addition (+) Button
const additionButton = new SKButton({
	text: "+",
	width: 75,
	height: 75
});
additionButton.font = "20px Arial";
additionButton.radius = 5;






// Equal (=) Button for calculation
const calculateContainer = new SKContainer({
	width: 300,
	height: 450
});
calculateContainer.layoutMethod = new Layout.WrapRowLayout ();

const emptySpace = new SKContainer({
	width: 300,
	height: 300
});
emptySpace.layoutMethod = new Layout.FillRowLayout ();


const bottomRow = new SKContainer({
	width: 300,
	height: 150
});
bottomRow.layoutMethod = new Layout.FillRowLayout ();

const leftSide = new SKContainer({
	width: 225,
	height: 150
});
leftSide.layoutMethod = new Layout.WrapRowLayout ();

const calculateButton = new SKButton({
	text: "=",
	width: 75,
	height: 150
});
calculateButton.font = "20px Arial";
calculateButton.radius = 5;







// Number 0 Button
const zeroButton = new SKButton({
	text: "0",
	width: 225,
	height: 75
});
zeroButton.font = "20px Arial";
zeroButton.radius = 5;


// Number 1 Button
const oneButton = new SKButton({
	text: "1",
	width: 75,
	height: 75
});
oneButton.font = "20px Arial";
oneButton.radius = 5;

// Number 2 Button
const twoButton = new SKButton({
	text: "2",
	width: 75,
	height: 75
});
twoButton.font = "20px Arial";
twoButton.radius = 5;

// Number 3 Button
const threeButton = new SKButton({
	text: "3",
	width: 75,
	height: 75
});
threeButton.font = "20px Arial";
threeButton.radius = 5;

// Number 4 Button
const fourButton = new SKButton({
	text: "4",
	width: 75,
	height: 75
});
fourButton.font = "20px Arial";
fourButton.radius = 5;

// Number 5 Button
const fiveButton = new SKButton({
	text: "5",
	width: 75,
	height: 75
});
fiveButton.font = "20px Arial";
fiveButton.radius = 5;

// Number 6 Button
const sixButton = new SKButton({
	text: "6",
	width: 75,
	height: 75
});
sixButton.font = "20px Arial";
sixButton.radius = 5;

// Number 7 Button
const sevenButton = new SKButton({
	text: "7",
	width: 75,
	height: 75
});
sevenButton.font = "20px Arial";
sevenButton.radius = 5;

// Number 8 Button
const eightButton = new SKButton({
	text: "8",
	width: 75,
	height: 75
});
eightButton.font = "20px Arial";
eightButton.radius = 5;

// Number 9 Button
const nineButton = new SKButton({
	text: "9",
	width: 75,
	height: 75
});
nineButton.font = "20px Arial";
nineButton.radius = 5;




// const resultLabel = new SKLabel({})


// Example event
//buttonName.addEventListener("action", () => {});

// Add child elements
root.addChild(panel);
root.addChild(calculateContainer);
// panel.addChild();
panel.addChild(resultLabel);
panel.addChild(historyLabel);
panel.addChild(backButton);
panel.addChild(multiplicationButton);
panel.addChild(divisionButton);
panel.addChild(sevenButton);
panel.addChild(eightButton);
panel.addChild(nineButton);
panel.addChild(subtractionButton);
panel.addChild(fourButton);
panel.addChild(fiveButton);
panel.addChild(sixButton);
panel.addChild(additionButton);

// calculateContainer.addChild()
leftSide.addChild(oneButton);
leftSide.addChild(twoButton);
leftSide.addChild(threeButton);
leftSide.addChild(zeroButton);
bottomRow.addChild(leftSide);
bottomRow.addChild(calculateButton);
calculateContainer.addChild(emptySpace);
calculateContainer.addChild(bottomRow);


setSKRoot(root);
startSimpleKit();
