/***** code for 360 page */

const video = document.querySelector("video");
const btnOne = document.querySelector("#btn-1");
const btnTwo = document.querySelector("#btn-2");
const btnThree = document.querySelector("#btn-3");
const btnFour = document.querySelector("#btn-4");
const wrap_1 = document.querySelector(".wrapper-1");
const wrap_2 = document.querySelector(".wrapper-2");
const loader = document.querySelector(".loader-wrapper");
var intervalRewind;

btnOne.addEventListener("click", async function () {
  video.style.zIndex = "9";
  await video.play();

  video.onended = () => {
    console.log("first");
    video.style.zIndex = "2";
    document.querySelector("#pic-2").style.zIndex = "9";
  };
});

btnTwo.addEventListener("click", function () {
  video.style.zIndex = "9";
  intervalRewind = setInterval(function () {
    video.playbackRate = 1.0;
    if (video.currentTime == 0) {
      clearInterval(intervalRewind);
      video.pause();
    } else {
      video.currentTime += -0.1;
      if (video.currentTime === 0) {
        console.log("first");
        video.style.zIndex = "2";
        document.querySelector("#pic-2").style.zIndex = "2";
        document.querySelector("#pic-1").style.zIndex = "9";
      }
    }
  }, 30);
});

btnThree.addEventListener("click", function () {
  btnThree.setAttribute("disabled", "true");
  btnFour.setAttribute("disabled", "true");
  loader.classList.add("enter");
  wrap_1.style.zIndex = "8";
  loader.style.zIndex = "9";

  setTimeout(() => {
    loader.classList.remove("enter");
    loader.classList.add("exit");
    loader.addEventListener("animationend", function () {
      loader.classList.remove("exit");

      btnThree.removeAttribute("disabled");
      btnFour.removeAttribute("disabled");
    });
  }, 4000);

  setTimeout(() => {
    wrap_1.style.zIndex = "2";
    loader.style.zIndex = "9";
    wrap_2.style.zIndex = "8";
  }, 3000);
});

btnFour.addEventListener("click", function () {
  btnThree.setAttribute("disabled", "true");
  btnFour.setAttribute("disabled", "true");
  loader.classList.add("enter");
  wrap_2.style.zIndex = "8";
  loader.style.zIndex = "9";

  setTimeout(() => {
    loader.classList.remove("enter");
    loader.classList.add("exit");
    loader.addEventListener("animationend", function () {
      loader.classList.remove("exit");

      btnThree.removeAttribute("disabled");
      btnFour.removeAttribute("disabled");
    });
  }, 4000);

  setTimeout(() => {
    wrap_1.style.zIndex = "8";
    loader.style.zIndex = "9";
    wrap_2.style.zIndex = "2";
  }, 3000);
});

/************** */

/***************************************************** */
// const position = { x: 0, y: 0 };

// interact(".rect").draggable({
//   listeners: {
//     start(event) {
//       console.log(event.type, event.target);
//     },
//     move(event) {
//       position.x += event.dx;
//       position.y += event.dy;

//       event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
//     },
//   },
// });
