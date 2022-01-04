var merger=[];
var rows, cols;
var x = [],
	y = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(1);
	stroke(0);
	rows = 16;
	cols = 16;

}

keyReleased = function() {

	//pushing the drawing of a number to the merger array, then pushing the merger array to that numer's array, creating a three dimensional array
	if (keyCode == 48) {
	//	zero.push(logData());
						if (keyCode == 48) {
		for (let i = 1; i < 64; i += 4) {
			for (let j = 1; j < 64; j += 4) {
				merger.push(get(i, j)[0]);
			}
		}
		//Pushing the array into the specific number array, a hacky way of making a list of arrays
		zero.push(merger);
		//Flushing all the single use arrays
		flushArrays();
	}
	}
	
	if (keyCode == 49) {
		one.push(logData());
	}
	
	if (keyCode == 50) {
		two.push(logData());
	}
	
	if (keyCode == 51) {
		three.push(logData());
	}
	
	if (keyCode == 52) {
		four.push(logData());
	}
	
	if (keyCode == 53) {
		five.push(logData());
	}
	
	if (keyCode == 54) {
		six.push(logData());
	}
	
	if (keyCode == 55) {
		seven.push(logData());
	}
	
	if (keyCode == 56) {
		eight.push(logData());
	}
	
	if (keyCode == 57) {
		nine.push(logData());
	}





}

function draw() {
	//Graphics stuff
	background(255, 255, 255, 255);
	noFill();
	stroke(0);
	//The box where input is drawn
	rect(0, 0, 64, 64);
	noStroke();

	//Basic drawing function, using an array because background
	if (mouseIsPressed && mouseX < 64 && mouseY < 64 && mouseY > 0 && mouseX > 0) {
		x.push(mouseX - 2);
		y.push(mouseY - 2);
	}
	//using the two arrays because squares
	fill(0, 0, 0, 255);
	for (var i = 0; i < x.length; i++) {
		rect(x[i], y[i], 4, 4);
	}

	//not using a function for this because my laziness will lead to more work


	//Representation for zero
	showData(100, 10, zero, "0");
// 	strokeWeight(1);
// 	stroke(0);
// 	noFill();
// 	text("Average 0:\n Dataset of " + zero.length, 100, 10);
// 	rect(100, 30, 64, 64)
// 	noStroke();
// 	//The average 0 drawing
// 	if (zero.length > 0) {
// 		console.log(1 - getDarkness(rows / 2, cols, zero[zero.length - 1]) / 255);
// 		//console.log(zero[0]);
// 		for (let i = 0; i < rows; i++) {
// 			for (let j = 0; j < cols; j++) {
// 				for (let k = 0; k < zero.length; k++) {
// 					if (zero[k][index(j, i)] == 0) {
// 						fill(0, 255 / zero.length + 50);
// 						rect(i * 4 + 100, j * 4 + 30, 4, 4);
// 					}
// 				}

// 			}
// 		}
// 	}


	//Representation for one
	strokeWeight(1);
	stroke(0);
	text("Average 1:\n Dataset of " + one.length, 200, 10);
	noFill();
	rect(200, 30, 64, 64)
	noStroke();
	//The average 1 drawing
	if (one.length > 0) {
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				for (let k = 0; k < one.length; k++) {


					if (one[k][index(j, i)] == 0) {
						fill(0, 255 / one.length + 50);
						rect(i * 4 + 200, j * 4 + 30, 4, 4);
					}
				}

			}
		}
	}

	//Representation for two
	strokeWeight(1);
	stroke(0);
	noFill();
	text("Average 2:\n Dataset of " + two.length, 300, 10);
	rect(300, 30, 64, 64)
	noStroke();
	//The average 0 drawing
	if (two.length > 0) {
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				for (let k = 0; k < two.length; k++) {
					if (two[k][index(j, i)] == 0) {
						fill(0, 255 / two.length + 50);
						rect(i * 4 + 300, j * 4 + 30, 4, 4);
					}
				}

			}
		}
	}


}


function index(x, y) {
	if (x < 0 || y < 0 || x > cols - 1 || y > rows - 1) {
		return -1;
	}
	return (x + y * cols);
}

function avg(t) {

	let sum = 0;
	for (let item of t) {
		sum += item;
	}
	return sum / t.length;
}

function getDarkness(w, h, array) {
	//n used so that the average darkness can be pulled from a select area, not just the area of the entire array.
	let n = [];
	//the output array
	let output;
	//where I is width and j is height,
	//it loops throught each of them and uses the index function to pull the color data from those coordinates
	for (var i = 0; i < w; i++) {
		for (var j = 0; j < h; j++) {

			n.push(array[index(i, j)]);

		}
	}
	output = avg(n);
	return output;
}

function neuron(x, w, b) {
	//x will be input from 0-255
	if (w * x + b <= 0) {
		return 0
	}
	if (w * x + b > 0) {
		return 1
	}
}

function flushArrays() {
	merger = [];
	x = [];
	y = [];
}

//meant to only work in a keyreleased function
function logData() {
	let arr=[];
		for (let i = 1; i < 64; i += 4) {
			for (let j = 1; j < 64; j += 4) {
				//get the first rgb value of a specific coordinate
				merger.push(get(i, j)[0]);
			}
		}
		//Pushing the array into the specific number array, a hacky way of making a list of arrays
		arr.push(merger);
		//Flushing all the single use arrays
		flushArrays();
		return arr;
		
	
}

function showData(xPos, yPos, arr, num){
	strokeWeight(1);
	stroke(0);
	noFill();
	text("Average " + num + ":\n Dataset of " + arr.length, xPos, yPos);
	rect(xPos, yPos+20, 64, 64);
	noStroke();
	//The average drawing
	if (arr.length > 0) {
		//console.log(arr);
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
					//console.log(arr[0][index(j, i)]);
				for (let k = 0; k < arr.length; k++) {
					//If pixel is black
				
				//	console.log(arr[k][index(j, i)]);
					if (arr[k][index(j, i)] == 0) {
						//Draw rectangle
					//	console.log("one printy boi");
						fill(0, 255 / arr.length + 50);
						rect(i * 4 + xPos, j * 4 + yPos+20, 4, 4);
					}
				}
			}
		}
	}
}

//RESERVED
/*
General flow for neurons:
Inputs:
Average darkness of top half, bottom half, left side, and right side
Weights:
Have dynamically adjusted weights, which define how much importance will be given 
Threshhold:



notes:
http://neuralnetworksanddeeplearning.com/chap1.html
we could set each value as a 0-1, with 0 being all white, and one being all dark for each half
default output of getDarkness will be 0-255 standard RGB values, so some conversion will need to be done.
whether in the function or outside is yet to be decided.
wonder if this could be easily done using object oriented programming
maybe a function that gets the average of an area, and
neuron(getDarkness(), weight, bias);

calculation for perceptrons that output 0||1
output={0 if weight⋅input+bias≤0
				1 if weight⋅input+bias>0
			"Just like a perceptron, the sigmoid neuron has inputs, x1,x2,…. But instead of being just 0 or 1, these inputs can also take on any values between 0 and 1. So, for instance, 0.638… is a valid input for a sigmoid neuron. Also just like a perceptron, the sigmoid neuron has weights for each input, w1,w2,…, and an overall bias, b. But the output is not 0 or 1. Instead, it's σ(w⋅x+b), where σ is called the sigmoid function**Incidentally, σ is sometimes called the logistic function, and this new class of neurons called logistic neurons. It's useful to remember this terminology, since these terms are used by many people working with neural nets. However, we'll stick with the sigmoid terminology., and is defined by:
σ(z)≡11+e−z.(3)
To put it all a little more explicitly, the output of a sigmoid neuron with inputs x1,x2,…, weights w1,w2,…, and bias b is
11+exp(−∑jwjxj−b).(4)
At first sight, sigmoid neurons appear very different to perceptrons.
The algebraic form of the sigmoid function may seem opaque and forbidding if you're not already familiar with it. 
In fact, there are many similarities between perceptrons and sigmoid neurons, and the algebraic form of the sigmoid function turns out to be more of a technical detail 
than a true barrier to understanding.

To understand the similarity to the perceptron model, suppose z≡w⋅x+b is a large positive number. 
Then e−z≈0 and so σ(z)≈1. In other words, when z=w⋅x+b is large and positive, the output from the sigmoid neuron is approximately 1, just as it would have been for a perceptron.
Suppose on the other hand that z=w⋅x+b is very negative. Then e−z→∞, and σ(z)≈0. So when z=w⋅x+b is very negative, the behaviour of a sigmoid neuron also closely approximates a perceptron.
It's only when w⋅x+b is of modest size that there's much deviation from the perceptron model."
				
			function formatting
			should x be an array of inputs? would make it infinitly expandable but might lead to issues parsing
			oh wait, x is already an array -.-
			neuron(x, w, b){
			To convert 0-255 to 1-0 do 1-x/255
			Possible edge case of 1/0, could be absolved by adding 0.0000001 or sumtin
			
				// if (keyCode == 48) {
	// 	for (let i = 1; i < 64; i += 4) {
	// 		for (let j = 1; j < 64; j += 4) {
	// 			merger.push(get(i, j)[0]);
	// 		}
	// 	}
	// 	//Pushing the array into the specific number array, a hacky way of making a list of arrays
	// 	zero.push(merger);
	// 	//Flushing all the single use arrays
	// 	flushArrays();
	// }
			
			pseudo code
			
			
		if neuron+neuron+neuron+neuron>=sensitivity
		return yesIsNumber


*/
