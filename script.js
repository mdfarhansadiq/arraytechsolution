const scrollUpButton = document.getElementById('scroll-up');


// Show button when user scrolls down
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 100) { // Adjust the scroll threshold as needed
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