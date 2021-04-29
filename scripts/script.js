var video = document.getElementById("videoDesigner1");
var element = document.getElementById('videoDesigner1');


function playFunction() {
  if (video.paused) {
    video.play();

  } else {
    video.pause();
  }
}
var animationLogo = document.getElementById("logoSvg")
var pathBlue = document.getElementById("pathBlue")
var pathMagenta = document.getElementById("pathMagenta")

function hoverLogo() {
  pathBlue.style.WebkitAnimation = "animateBlue 2.5s";
  pathBlue.style.animation = "animateBlue 2.5s";
}


