/*
Usman Butt -
The Complete Web Developer in 2019: Zero to Mastery
Exercise 10 Background Generator

P U R P O S E:
This program allows the visitor of the webpage to select to color and generator a gradient background.
This program update the webpage to the user selection and also provides a css property for gradient.

*/

//executes the code once the webpage is completely loaded all content.
window.onload = function() {
	//tell the browser to check the code strictly.
	'use strict';

	//declare consts and set DOM reference
	// const COLOR_ONE = document.getElementById('color1');
	// const CSS = document.getElementById('css');
	const CSS = document.querySelector('h3');
	const COLOR_ONE = document.querySelector('.color1');
	const COLOR_TWO = document.querySelector('.color2');
	const BODY = document.getElementById('gradient');
	const GENERATE_RANDOMLY = document.getElementById('generateRandomly');

	let css, colorOne, colorTwo, body, button, generateRandomly, randNum1, randNum2, randNum3;

	css = CSS;
	colorOne = COLOR_ONE;
	colorTwo = COLOR_TWO;
	body = BODY;
	generateRandomly = GENERATE_RANDOMLY;

	randNum1 = Math.floor(Math.random() * 255) + 1;
	randNum2 = Math.floor(Math.random() * 255) + 1;
	randNum3 = Math.floor(Math.random() * 255) + 1;
	console.log(randNum1, randNum2, randNum3);

	// function randNumber1() {
	// 	randNum1 = Math.floor(Math.random() * 255) + 1;
	// 	randNum2 = Math.floor(Math.random() * 255) + 1;
	// 	randNum3 = Math.floor(Math.random() * 255) + 1;
	// 	console.log(randNum1, randNum2, randNum3);
	// 	return randNum1, randNum2, randNum3;
	// }

	// console.log(randNumber1());
	//START OF FUNCTION
	function createRandomArray(size, low, high) {
		//create array to return
		let randomArray = new Array();

		//create as many array elements as specified
		for (let i = 0; i < size; i++) {
			//each contains random integer from low to high
			randomArray[i] = low + Math.floor((high - low + 1) * Math.random());
		}
		//return the array
		return randomArray;
	}

	function setGradient() {
		body.style.background = `linear-gradient(to right, ${colorOne.value},${colorTwo.value})`;
		css.textContent = body.style.background;
	}

	colorOne.addEventListener('input', setGradient);

	colorTwo.addEventListener('input', setGradient);

	const rgb = () => {
		return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)},${Math.round(
			Math.random() * 255
		)})`;
	};

	function setRandomGradient() {
		body.style.background = `linear-gradient(to right, ${rgb()} ,${rgb()})`;
		css.textContent = body.style.background;
		// colorOne.value = `${rgb()}`;
		// colorTwo.value = `${rgb()}`;
	}

	generateRandomly.addEventListener('click', setRandomGradient);
	// generateRandomly.addEventListener('click', function() {
	// 	console.log('Button is clicked');

	// 	colorOne.value = '#' + Math.floor(Math.random() * 16777215).toString(16);

	// 	// colorOne.value = `rgb(${randNum1},${randNum2},${randNum3})`;
	// 	// colorTwo.value = `rgb(${randNum1},${randNum2},${randNum3})`;
	// });

	// Get Numbers or Draw random numbers when Play Lotto button is clicked
	// PLAY_LOTTO.addEventListener('click', function() {
	// console.log('Button is clicked');
	// alert('Button is clicked');

	// }); //END onclick Handler with Event Listener
}; //END window.onload

//   */
