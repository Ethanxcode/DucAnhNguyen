// slider automatic and manual
// slider automatic and manual
// var count;
// let timeout;
// let checkTime;

// function checkTimeer() {
// 	clearTimeout(timeout);
// 	count++;
// 	console.log(count);
// 	if (count >= 5) {
// 		count = 0;
// 		showSlides();
// 		return;
// 	}
// 	checkTime = setTimeout(checkTimeer, 2000);
// }

// function plusSlides(n) {
// 	count = 0;
// 	showSlide((slideIndex += n));
// 	clearTimeout(checkTime);
// 	checkTimeer(count);
// }

// function currentSlide(n) {
// 	count = 0;
// 	showSlide((slideIndex = n));
// 	clearTimeout(checkTime);
// 	checkTimeer(count);
// }
// function showSlide(n) {
// 	let i;
// 	let slides = document.getElementsByClassName('mySlides');
// 	// let dots = document.getElementsByClassName('dot');
// 	if (n > slides.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = slides.length;
// 	}
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none';
// 	}
// 	// for (i = 0; i < dots.length; i++) {
// 	// 	dots[i].className = dots[i].className.replace(' dot-active', '');
// 	// }
// 	slides[slideIndex - 1].style.display = 'block';
// 	// dots[slideIndex - 1].className += ' dot-active';
// }

// let slideIndex = 0;
// showSlides();

// function showSlides(n) {
// 	let i;
// 	let slides = document.getElementsByClassName('mySlides');
// 	// let dots = document.getElementsByClassName('dot');
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none';
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {
// 		slideIndex = 1;
// 	}
// 	// for (i = 0; i < dots.length; i++) {
// 	// 	dots[i].className = dots[i].className.replace(' dot-active', '');
// 	// }
// 	slides[slideIndex - 1].style.display = 'block';
// 	// dots[slideIndex - 1].className += ' dot-active';
// 	timeout = setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

// const burgerMenu = document.querySelector('.burgerMenu');

// burgerMenu.addEventListener('mouseover', (e) => {
// 	if (burgerMenu.style.display === 'none') {
// 		burgerMenu.style.display = 'block';
// 	} else {
// 		burgerMenu.style.display = 'none';
// 	}
// });

var closeBurger = document.querySelector('#closeBurgerMenu');
var myMenu = document.querySelector('.subHeaderMenu');
var burger = document.querySelector('#burgerMenu');
var subHeaderMenuItems = document.querySelectorAll('.subHeaderMenu li a');

burger.addEventListener('click', (e) => {
	myMenu.classList.toggle('active');
});
closeBurger.addEventListener('click', (e) => {
	myMenu.classList.toggle('active');
});

subHeaderMenuItems.forEach((element) => {
	element.addEventListener('click', (e) => {
		myMenu.classList.toggle('active');
	});
});

var heartButton = document.querySelectorAll('.fa-heart');

console.log(heartButton);

heartButton.forEach((element) => {
	element.addEventListener('click', (e) => {
		element.classList.toggle('loved');
		if (element.classList.contains('fa-regular')) {
			element.classList.replace('fa-regular', 'fa-solid');
		} else {
			element.classList.toggle('fa-regular');
			element.classList.toggle('fa-solid');
		}
	});
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const carousel = document.querySelector('.carousel'),
	firstImg = carousel.querySelectorAll('img')[0],
	arrowIcons = document.querySelectorAll('.slideshow-container  i');
let isDragStart = false,
	isDragging = false,
	prevPageX,
	prevScrollLeft,
	positionDiff;

const showHideIcons = () => {
	// showing and hiding prev/next icon according to carousel scroll left value
	let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
	arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
	arrowIcons[1].style.display =
		carousel.scrollLeft == scrollWidth ? 'none' : 'block';
};

arrowIcons.forEach((icon) => {
	icon.addEventListener('click', () => {
		let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
		// if clicked icon is left, reduce width value from the carousel scroll left else add to it
		carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
		setTimeout(() => showHideIcons(), 60);
	});
});
arrowIcons;

const autoSlide = () => {
	// if there is no image left to scroll then return from here
	if (
		carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
		carousel.scrollLeft <= 0
	)
		return;
	positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
	let firstImgWidth = firstImg.clientWidth + 14;
	// getting difference value that needs to add or reduce from carousel left to take middle img center
	let valDifference = firstImgWidth - positionDiff;
	if (carousel.scrollLeft > prevScrollLeft) {
		// if user is scrolling to the right
		return (carousel.scrollLeft +=
			positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
	}
	// if user is scrolling to the left
	carousel.scrollLeft -=
		positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
	// updatating global variables value on mouse down event
	isDragStart = true;
	prevPageX = e.pageX || e.touches[0].pageX;
	prevScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
	// scrolling images/carousel to left according to mouse pointer
	if (!isDragStart) return;
	e.preventDefault();
	isDragging = true;
	carousel.classList.add('dragging');
	positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
	carousel.scrollLeft = prevScrollLeft - positionDiff;
	showHideIcons();
};
const dragStop = () => {
	isDragStart = false;
	carousel.classList.remove('dragging');
	if (!isDragging) return;
	isDragging = false;
	autoSlide();
};
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
document.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('touchend', dragStop);
