const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
    }
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.getAttribute("data-val"));
	let duration = Math.floor(interval / endValue);
	let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});

//const myModal = bootstrap.Modal.getOrCreateInstance('#login-modal');
//window.addEventListener('DOMContentLoaded', () => {
//    myModal.show();
//});

//let card = document.querySelector('#courseCard')
//card = {
//	cardImage: ,
//	cardTitle: ,
//	cardLevel: ,
//	cardButton: ,
//	cardPerson: ,
//}

let fullBooked = document.querySelector('#fullBooked')
let halfBooked = document.querySelector('#halfBooked')
let neitherFullHalf = document.querySelector('#neitherFullHalf')
let courseCard = document.querySelectorAll('#courseCard')
let allBooked = document.querySelector('#allBooked')

function displayCards() {
	courseCard.forEach(function(card) {
		card.style.display = "block";
	});
}
function hideCards() {
	courseCard.forEach(function(card) {
		card.style.display = "none";
	});
}
allBooked.addEventListener("click", displayCards);
fullBooked.addEventListener("click", hideCards);
halfBooked.addEventListener("click", hideCards);
neitherFullHalf.addEventListener("click", hideCards);

//course buttons
function activeButtonCloud(darkImage) {
	darkImage.src = "images/SVGs/courses_cloud_dark.svg";
	return true;
}
function inActiveButtonCloud(lightImage) {
	lightImage.src = "images/SVGs/courses_cloud_light.svg";
}
function activeButtonDesign(darkImage) {
	darkImage.src = "images/SVGs/courses_design_dark.svg";
}
function inActiveButtonDesign(lightImage) {
	lightImage.src = "images/SVGs/courses_design_light.svg";
}
function activeButtonDevelopment(darkImage) {
	darkImage.src = "images/SVGs/courses_development_dark.svg";
	return true;
}
function inActiveButtonDevelopment(lightImage) {
	lightImage.src = "images/SVGs/courses_development_light.svg";
}
function activeButtonDevops(darkImage) {
	darkImage.src = "images/SVGs/courses_devops_dark.svg";
}
function inActiveButtonDevops(lightImage) {
	lightImage.src = "images/SVGs/courses_devops_light.svg";
}