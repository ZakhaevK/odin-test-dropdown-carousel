export { nextDot, initialiseDots, selectDot };

const dotTrack = document.getElementById("carousel-track");
const dots = Array.from(dotTrack.getElementsByClassName("carousel-dot"));
const imageTrack = document.getElementById("carousel-img");
const imageWidth = 600;
let currentDot = 0;
let timer;

function nextDot() {
  const num = currentDot + 1;
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

function selectDot(num) {
  resetImageTimer();

  dots[currentDot].classList.toggle("selected");
  console.log(num);
  if (num < dots.length && num > -1) {
    currentDot = num;
    dots[currentDot].classList.toggle("selected");
    updateImage();
  } else {
    currentDot = 0;
    dots[currentDot].classList.toggle("selected");
    updateImage();
  }
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
