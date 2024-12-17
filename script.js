const scrollUpButton = document.getElementById('scroll-up');


// Show button when user scrolls down
window.addEventListener('scroll', () => {
	if (window.scrollY > 100) { // Adjust the scroll threshold as needed
		scrollUpButton.classList.add('show');
	} else {
		scrollUpButton.classList.remove('show');
	}
});

// Scroll to top on button click
scrollUpButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // Smooth scrolling effect
	});
});



// Toggle navigation menu on burger menu click
const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.querySelector(".nav-links");
const closeMenu = document.getElementById("close-menu");



burgerMenu.addEventListener("click", () => {
		navLinks.classList.toggle("nav-active");
});

// Close menu when clicking the close button
closeMenu.addEventListener("click", () => {
		navLinks.classList.remove("nav-active");
});


// Newsletter form validation with reCAPTCHA
function validateForm(event) {
		event.preventDefault();
		if (grecaptcha.getResponse() === '') {
				alert('Please verify that you are not a robot.');
				return false;
		}
		// Add your form submission logic here
		return false;
}
