var inkscapeContainer = document.getElementById('inkscapeContainer');
var design = document.getElementById('design');
var arrowL = document.getElementById('circleLeft');
var arrowR = document.getElementById('circleRight');
var header = document.querySelector('header');
var nameContainer = document.getElementById('nameContainer');
function esperar(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

window.onload = async function(){
    design.style = "opacity:1";
    inkscapeContainer.style.transform = "translateY(-300px)";
    await esperar(1000);
    inkscapeContainer.style.transform = "translateY(0px)";
    nameContainer.style = "opacity:1";
}

arrowR.onclick = async function(){
    design.style = "opacity:0";
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
    await esperar(200);
    document.getElementById("design").src=`images/${n}.png`;
    await esperar(200);
    design.style = "opacity:1";
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
