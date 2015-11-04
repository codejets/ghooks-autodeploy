var x = document.querySelector('h1')
function blink () {
	x.style.opacity = x.style.opacity == 1 ? 0 : 1;
	setTimeout(blink, 1000); 
}
blink()
