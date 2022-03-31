const stepInter = 50;
const stepSizePx = 10;
const DanceTimeMs = 5000;
const DanceCatUrl =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let position = startPos;
    const interValid = setInterval(() => {
      img.style.left = `${position}px`;
      position += stepSizePx;
      if (position >= stopPos) {
        clearInterval(interValid);
        resolve();
      }
    }, stepInter);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    const savedSrc = img.src;
    img.src = DanceCatUrl;
    setTimeout(() => {
      img.src = savedSrc;
      resolve();
    }, DanceTimeMs);
  });
}

function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  walk(img, startPos, centerPos)
    .then(() => dance(img))
    .then(() => walk(img, centerPos, stopPos))
    .then(catWalk);
}

window.addEventListener("load", catWalk);
