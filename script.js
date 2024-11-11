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


$(document).ready(function(){
	$('.mobile_menu_icon').click(function(){
		let mobileMenu = $('.nav-links');
		if(mobileMenu.hasClass('display_none')){
			mobileMenu.removeClass('display_none');
		}
		else{
			mobileMenu.addClass('display_none');
		}

	})
})

// let mobileIcon = document.querySelector('.mobile_menu_icon');
// let mobileMenu = document.querySelector('.nav-links');
// mobileIcon.addEventListener('click', function(){
// 	mobileMenu.style.display = 'none';
// 	if(mobileMenu.hasClass){
// 		.display_none
// 	}
	
// })
