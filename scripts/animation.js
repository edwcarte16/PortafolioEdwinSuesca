var inkscapeContainer = document.getElementById('inkscapeContainer');
var design = document.getElementById('design');
var arrowL = document.getElementById('circleLeft');
var arrowR = document.getElementById('circleRight');
var header = document.querySelector('header');
var nameContainer = document.getElementById('nameContainer');
var mapNav = document.getElementById('mapNav');
var burger = document.querySelector('.boxIconBurger');

var iconBurger = document.getElementById('iconBurger');
var rect1 = document.getElementById('rectangle1');
var rect2 = document.getElementById('rectangle2');
var rect3 = document.getElementById('rectangle3');

var liMapNav = document.querySelector('.liMapNav');

document.addEventListener("click", function(event){ 
    var clic = event.target;
    var clicName = event.target.nodeName;
    console.log(event.target.nodeName);
    var position = mapNav.style.left;
    console.log(position);
    if(position == "-350px" && (clic === rect1 || clic === rect2 || clic === rect3 || clic === iconBurger)){
        console.log("Cerrada y se procede a abrir");
        mapNav.style = "left:0";

        rect2.style.width = "0";
        rect1.style.top = "41%";
        rect3.style.bottom = "41%";
        rect1.style.transform = "rotate(-45deg)";
        rect3.style.transform = "rotate(45deg)";
    }

    else{
        console.log("Abierta y se procede a cerrar");
    var position = mapNav.style.left;
    if(position == "0px" && clicName != "LI" && clicName != "A" && clicName != "UL" && clicName != "I" && clic != mapNav){
            mapNav.style = "left:-350px";
            rect1.style.transform = "rotate(0)";
            rect3.style.transform = "rotate(0)";
            rect1.style.top = "0";
            rect3.style.bottom = "0";
            rect2.style.width = "100%";
        }
    }
}, false);

function esperar(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

window.onload = async function(){
    mapNav.style.left = "-350px";
    await esperar(2000);
    design.style = "opacity:1";
    if (window.matchMedia("(max-width: 720px)").matches) {
        inkscapeContainer.style.transform = "translateY(-300px)";
        await esperar(1000);
        inkscapeContainer.style.transform = "translateY(0px)";
        nameContainer.style = "opacity:1";
    }
}

arrowR.onclick = async function(){
    arrowR.style = "scale:0.2; opacity:1";
    await esperar(130);
    arrowR.style = "scale:1; opacity:1";
    let name = document.getElementById('design').src;
    let name2 = name.split("/");
    let nameImage = name2[name2.length-1];
    let numberImage = nameImage.replace(".png", "");
    let n = +numberImage;
    if(n == 4){
        n = 0;
    }
    n = n+1;
    document.getElementById("design").src=`images/${n}.png`;
}

arrowL.onclick = async function(){
    arrowL.style = "scale:0.2; opacity:1"
    await esperar(130)
    arrowL.style = "scale:1; opacity:1"
    let name = document.getElementById('design').src;
    let name2 = name.split("/");
    let nameImage = name2[name2.length-1];
    let numberImage = nameImage.replace(".png", "");
    let n = +numberImage;
    if(n == 1){
        n = 5;
    }
    n = n-1;
    
    document.getElementById("design").src=`images/${n}.png`;
}


inkscapeContainer.onmouseover = function(){
    arrowL.style = "opacity:1";
    arrowR.style = "opacity:1";
};

inkscapeContainer.onmouseout = function(){
    arrowL.style = "opacity:0";
    arrowR.style = "opacity:0";
};