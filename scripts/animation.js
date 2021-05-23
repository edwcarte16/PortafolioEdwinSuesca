var inkscapeContainer = document.getElementById('inkscapeContainer');
var design = document.getElementById('design');
var arrowL = document.getElementById('circleLeft');
var arrowR = document.getElementById('circleRight');
var header = document.querySelector('header');
var nameContainer = document.getElementById('nameContainer');
var mapNav = document.getElementById('mapNav');
var burger = document.querySelector('.boxIconBurger');
var rect1 = document.getElementById('rectangle1');
var rect2 = document.getElementById('rectangle2');
var rect3 = document.getElementById('rectangle3');
var iconBurger = document.getElementById('iconBurger');

document.addEventListener("click", function(e){
    console.log('clic');
    position = mapNav.style.left = "-350px";
    //obtiendo informacion del DOM para  
    var clic = e.target;
    console.log(clic);
    position = mapNav.style.left;
    console.log(position);
    if(position == "0px" && clic != mapNav){
        mapNav.style = "left:-350px";
    }

    else{
        if(position == "-350px" && (clic == rect1 || clic == rect2 || clic == rect3 || clic == iconBurger)){
            mapNav.style = "left:0px";
        }
    }
}, false);

function esperar(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

window.onload = async function(){
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