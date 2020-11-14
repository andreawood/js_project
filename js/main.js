
const image = document.querySelector('img');

let sunrise = "images/sunrise.jpg";
let sunset = "images/sunset.jpg";


image.onmouseenter = (e) => {

   e.target.setAttribute('src', sunset);
};

image.onmouseleave = (e) => {

   e.target.setAttribute('src', sunrise);
};


// get elements from DOM, make variables
let picture = document.querySelector('#sun');
let info = document.querySelector('#text');

// hide the P
info.style.display = 'none';

// make button work
picture.onclick = showAndHide;

// this function runs each time button is clicked
function showAndHide() {
  if (info.classList.contains('showing')) {
    // hide it
    info.style.display = 'none';
    // remove class
    info.classList.remove('showing');
  } else {
    // show it
    info.style.display = 'block';
    // add class
    info.classList.add('showing');
  }
}
