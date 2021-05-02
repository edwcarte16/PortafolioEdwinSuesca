var video = document.getElementById("videoDesigner1");
var element = document.getElementById('videoDesigner1');

var itemList1 = document.getElementById("liNav1");
var itemList2 = document.getElementById("liNav2");
var itemList3 = document.getElementById("liNav3");
var itemList4 = document.getElementById("liNav4");

var iconList1 = document.getElementById("boxIconAvatar");
var iconList2 = document.getElementById("boxIconBag");
var iconList3 = document.getElementById("boxIconBook");
var iconList4 = document.getElementById("boxIconChat");

var left1;
var left2;
var left3;
var left4;

var windowWidth = window.innerWidth;

function playFunction() {  
    video.play();
}

function pauseFunction() {  
  video.pause();
}

var icon;
var imageBg;

function hoverList(icon, imageBg){
  document.getElementById(icon).style = "fill:#d932d2"
  document.getElementById(imageBg).style = "opacity:0.4"
  window.addEventListener("resize", function(){
  windowWidth = window.innerWidth;})
  if(windowWidth>720){

    document.getElementById(icon).style = "opacity:1; fill:#d932d2"

    left1 = itemList1.getBoundingClientRect().left+30
    iconList1.style = `left: ${left1}px`;

    left2 = itemList2.getBoundingClientRect().left+34
    iconList2.style = `left: ${left2}px`;

    left3 = itemList3.getBoundingClientRect().left+30
    iconList3.style = `left: ${left3}px`;

    left4 = itemList4.getBoundingClientRect().left+47
    iconList4.style = `left: ${left4}px`;
  }
}

function noHoverList(icon, imageBg){
  document.getElementById(icon).style = "fill:#ffffff93"
  document.getElementById(imageBg).style = "opacity:0"

  if(windowWidth>720){
    document.getElementById(icon).style = "fill:transparent"
  }
}

window.addEventListener("resize", function(){
  windowWidth = window.innerWidth;
  if(document.getElementById("menuListNav").style.clipPath != "circle(1500px at 100% 0%)" && windowWidth>720){
    document.getElementById("menuListNav").style.clipPath = "none";
  }

  if(document.getElementById("menuListNav").style.clipPath == "none" && windowWidth<721){
    document.getElementById("menuListNav").style.clipPath = "circle(0 at 100% 0%)";
  }
  if(windowWidth>720){

    document.getElementById("avatar").style = "fill:transparent"

    document.getElementById("bag").style = "fill:transparent"

    document.getElementById("book").style = "fill:transparent"

    document.getElementById("chat").style = "fill:transparent"

    left1 = itemList1.getBoundingClientRect().left+30
    iconList1.style = `left: ${left1}px`;

    left2 = itemList2.getBoundingClientRect().left+34
    iconList2.style = `left: ${left2}px`;

    left3 = itemList3.getBoundingClientRect().left+30
    iconList3.style = `left: ${left3}px`;

    left4 = itemList4.getBoundingClientRect().left+47
    iconList4.style = `left: ${left4}px`;
  }

  if(windowWidth<720){

    document.getElementById("avatar").style = "fill:#ffffff93"

    document.getElementById("bag").style = "fill:#ffffff93"

    document.getElementById("book").style = "fill:#ffffff93"

    document.getElementById("chat").style = "fill:#ffffff93"
  }
});

function openMenu(){
  if (document.getElementById("menuListNav").style.clipPath != "circle(1500px at 100% 0%)") {
    document.getElementById("menuListNav").style.clipPath = "circle(1500px at 100% 0%)";

    document.getElementById("svgBurger").style = "height:22px; width:26px";

    document.getElementById("rectBurgerMenu1").style = "rotate:-45deg; x:-12.999996px; y:11.246504px";

    document.getElementById("rectBurgerMenu2").style = "rotate:45deg; x:1.2465px; y:-3px";
  }

  else {
    document.getElementById("menuListNav").style.clipPath = "circle(0 at 100% 0%)";

    document.getElementById("svgBurger").style = "height:22px; width:26px";
    
    document.getElementById("rectBurgerMenu1").style = "rotate:0; x:0; y:9.7727985px";

    document.getElementById("rectBurgerMenu2").style = "rotate:0; x:0; y:0";
  }
}


