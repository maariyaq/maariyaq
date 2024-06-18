// Set variables.
let revealButton = document.getElementById('on');
let hideButton = document.getElementById('off');
let image = document.getElementById('secret');

function changeBackground() {
    image.style.display = 'block';
    hideButton.style.display = 'block';
}

// Function that will hide image back if new button clicked. 
function hideColor (){
    image.style.display = 'none';
}

revealButton.addEventListener('click', changeBackground);
hideButton.addEventListener('click', hideColor);

