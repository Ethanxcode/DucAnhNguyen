// slider automatic and manual
var count;
let timeout;
let checkTime;

function checkTimeer() {
	clearTimeout(timeout);
	count++;
	console.log(count);
	if (count >= 5) {
		count = 0;
		showSlides();
		return;
	}
	checkTime = setTimeout(checkTimeer, 2000);
}

function plusSlides(n) {
	count = 0;
	showSlide((slideIndex += n));
	clearTimeout(checkTime);
	checkTimeer(count);
}

function currentSlide(n) {
	count = 0;
	showSlide((slideIndex = n));
	clearTimeout(checkTime);
	checkTimeer(count);
}
function showSlide(n) {
	let i;
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' dot-active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' dot-active';
}

let slideIndex = 0;
showSlides();

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('dot');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' dot-active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' dot-active';
	timeout = setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// const burgerMenu = document.querySelector('.burgerMenu');

// burgerMenu.addEventListener('mouseover', (e) => {
// 	if (burgerMenu.style.display === 'none') {
// 		burgerMenu.style.display = 'block';
// 	} else {
// 		burgerMenu.style.display = 'none';
// 	}
// });

const subHeaderMenu = document.querySelector('.subHeaderMenu');
console.log(
	"🚀 ~ file: script.js:84 ~ const subHeaderMenu = document.querySelector('.subHeaderMenu');",
);
