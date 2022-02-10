// navbar button
const docHeader = document.querySelector('header')
const navBtn = document.querySelector('.navbar-collapse-btn')
const navMenu = document.querySelector('.nav-nav')
navBtn.addEventListener('click', () => {
	let currentButton = navBtn.children[0]
	navMenu.classList.toggle('visible')
	if (currentButton.innerText == 'close') {
		currentButton.innerText = 'menu'
		docHeader.style.height = '5rem'
	} else {
		currentButton.innerText = 'close'
		docHeader.style.height = '25rem'
	}
})
// navigation bar scroll
document.addEventListener('scroll', () => {
	docHeader.style.boxShadow = '0 1rem 1rem rgba(0, 0, 0, 0.05)'
	if (window.pageYOffset < 50) {
		docHeader.style.boxShadow = ''
		docHeader.style.paddingTop = ''
	} else {
		docHeader.style.paddingTop = '1.5rem'
	}
})
