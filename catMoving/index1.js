// "http://www.anniemation.com/clip_art/images/cat-walk.gif"

"use strict";

const walkingCat = document.querySelector("img");

const fullWindowWidth = window.innerWidth;

const walkingCatSize = walkingCat.getBoundingClientRect();
const centeringDancingCat = `${(fullWindowWidth - walkingCatSize.width) / 2}px`;

// const centeringWalkingCat = `${halfWindow - 148}px`; // minus 148 we need because the width of the picture 296px, so with this minus we place the picture right in the center of the window

let walking = 0;

let catReachedCenter = false;

const dancingCat = document.createElement("img");
dancingCat.src =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";
const dancingCatDStyle = dancingCat.style;
dancingCatDStyle.position = "absolute";
dancingCatDStyle.marginLeft = centeringDancingCat;
dancingCatDStyle.display = "none";
document.body.appendChild(dancingCat);

const catWalk = () => {
  walking += 10; // every calling of the function increases the distance of the cat's walking;
  const walkingCatSizeInsideFunction = walkingCat.getBoundingClientRect();
  const rightSideOfCat = fullWindowWidth - walkingCatSizeInsideFunction.right; // the "walkingCat Size" variable can't be used here as a shortcut since the value of getBoundingClientRect constantly changes;
  if (
    !catReachedCenter &&
    walkingCatSizeInsideFunction.right >
      window.innerWidth / 2 + walkingCatSizeInsideFunction.width / 2
  ) {
    catReachedCenter = true;
    dancingCatDStyle.display = "block";
    clearInterval(myFunc);
    setTimeout(function () {
      dancingCat.style.display = "none";
      myFunc = setInterval(catWalk, 50);
    }, 5000);
  }
  // when the cat's right top corner goes over the right side of the window,
  if (rightSideOfCat < 0) {
    // the distance of cat's walking turns into zero
    walking = 0;
    // and the cat's reaching center switches to false again;
    catReachedCenter = false;
    console.log("Show it when it returns to the beginning");
  }
  walkingCat.style.marginLeft = `${walking}px`; // placing the position of the cat in a template string;
};

let myFunc = setInterval(catWalk, 50);

// let oneTimeThing = false;
// As soon as the function is invoked oneTimeThing changes into true;
// As soon as the one lap of the cat ends, oneTimeThing becomes false again;

// observer in the middle of the screen, it lets you know that one event is happening
