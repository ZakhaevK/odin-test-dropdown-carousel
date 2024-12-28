export { nextDot, initialiseDots, initialiseArrows, selectDot };

const imageTrack = document.getElementById("carousel-img");
const imageWidth = 600;
const dotTrack = document.getElementById("carousel-track");
const dots = Array.from(dotTrack.getElementsByClassName("carousel-dot"));
const arrowDiv = document.getElementById("arrow-div");
const arrows = Array.from(arrowDiv.getElementsByClassName("arrow"));
let currentDot = 0;
let timer;

function nextDot() {
  const num = currentDot + 1;
  selectDot(num);
}

function prevDot() {
  const num = currentDot - 1;
  selectDot(num);
}

function initialiseDots() {
  for (const dot of dots) {
    dot.onclick = () => {
      selectDot(dots.indexOf(dot));
    };
  }
  startImageTimer();
}

function initialiseArrows() {
  arrows[0].onclick = () => {
    prevDot();
  };

  arrows[1].onclick = () => {
    nextDot();
  };
}

// Used by all functions affecting the dot, handles edge cases in user friendly way
function selectDot(num) {
  resetImageTimer();

  dots[currentDot].classList.toggle("selected");
  console.log(num);
  if (num >= dots.length) { // Begins again at start if exceeding length
    currentDot = 0;
  } else if (num < 0) { // Handles user arrow going back from dot 0
    currentDot = dots.length - 1;
  } else {
    currentDot = num;
  }
  dots[currentDot].classList.toggle("selected");
  updateImage();
}

function updateImage() {
  const translate = imageWidth * currentDot;
  imageTrack.style = `translate: -${translate}px;`;
}

// Begins image timer that moves automatically to the next every 5 seconds
function startImageTimer() {
  timer = window.setInterval(nextDot, 5000);
}
// Resets the inverval upon image change making user action interrupt current interval
function resetImageTimer() {
  clearInterval(timer);
  startImageTimer();
}
