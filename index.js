var x = document.querySelector('h1')
function flicker () {
	x.style.opacity = x.style.opacity == 1 ? 0 : 1;
	setTimeout(flicker, 1000); 
}
flicker()
