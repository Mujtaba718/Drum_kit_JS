const keys = document.querySelectorAll('div.key') // will get a list of all divs with class key

window.addEventListener("keydown", function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio){
		return
	}

	audio.currentTime = 0;  //rewind to start
	audio.play();

	key.classList.add("playing");
})

function removeTransition(e){
	if(e.propertyName !== 'transform'){
		return
	} // skip if its not a transform

	this.classList.remove('playing');
}


// Looping through the keys nodelist and putting a transitionend event listener
// transitionend will fire when the transition will finish
keys.forEach(function(key) {
	key.addEventListener("transitionend", removeTransition)
})

