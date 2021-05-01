var video = document.getElementById("videoDesigner1");
var element = document.getElementById('videoDesigner1');
var burgerMenu = document.getElementByClass('burgerMenuBox');


/*function playFunction() {
  if (video.paused) {
    video.play();

  } else {
    video.pause();
  }
}*/

function playFunction() {  
    video.play();
}

function pauseFunction() {  
  video.pause();
}

function openMenu(){
  const menuNav = document.querySelectorAll('menuList');
  menuNav.classList.toggle('open');
}


