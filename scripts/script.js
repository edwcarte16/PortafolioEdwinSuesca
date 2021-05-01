var video = document.getElementById("videoDesigner1");
var element = document.getElementById('videoDesigner1');
var burgerMenu = document.getElementByClass('burgerMenuBox');

function playFunction() {  
    video.play();
}

function pauseFunction() {  
  video.pause();
}

function openMenu(){

  if (document.getElementById("menuListNav").style.clipPath != "circle(1000px at 100% 0%)") {
    document.getElementById("menuListNav").style.clipPath = "circle(1000px at 100% 0%)";

    document.getElementById("svgBurger").style = "height:22px; width:26px";

    document.getElementById("rectBurgerMenu1").style = "rotate:-45deg; x:-12.999996px; y:11.246504px";

    document.getElementById("rectBurgerMenu2").style = "rotate:45deg; x:1.2465px; y:-3px";

  }

  else {
    document.getElementById("menuListNav").style.clipPath = "circle(0 at 100% 0%)";

    document.getElementsByClassName("burgerMenuBox").style = "height:22px; width:26px";

    document.getElementById("svgBurger").style = "height:22px; width:26px";
    
    document.getElementById("rectBurgerMenu1").style = "rotate:0; x:0; y:9.7727985px";

    document.getElementById("rectBurgerMenu2").style = "rotate:0; x:0; y:0";
  }
}
