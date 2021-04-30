var video = document.getElementById("videoDesigner1");
var element = document.getElementById('videoDesigner1');


function playFunction() {
  if (video.paused) {
    video.play();

  } else {
    video.pause();
  }
}


