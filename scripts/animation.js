var edwins = document.getElementById('edwins');
var pathSlogan = document.getElementById('pathSlogan');
var logoSvg = document.getElementById('logoSvg');
var boxLogo = document.getElementById('boxLogo');
var boxLogoClass = document.querySelector('.boxLogo');
const liNav = document.querySelectorAll('.liNav');
const iconsNav = document.querySelectorAll('.iconsNav');
const aNav = document.querySelectorAll('.aNav');
var bodySelector = document.querySelector('body');
var aselector = document.querySelector('a');
var scrollBar = document.getElementById('scrollBar');
var buttonScrollBar = document.getElementById('buttonScrollBar');
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
var nav = document.querySelector('nav');
var liMapNav = document.querySelector('.liMapNav');
var y = window.scrollY;
var posicionDePartida = 0;
var newCursor = document.querySelector(".newCursor");
var changeTheme = document.querySelector(".changeTheme");
const dark = document.getElementById("theme").href;
var theme = document.getElementById("theme");
var inkscapeImage = document.getElementById("inkscapeImage");
var device = navigator.vendor;
const colorNewCursor = newCursor.style.backgroundColor;
const sizeNewCursor = newCursor.style.fontSize;
var boxLogo = document.querySelector(".boxLogo");

changeTheme.onclick = function(){
    if(theme.href == dark){
        theme.href = "css/lightTheme.css";
        inkscapeImage.src = "images/inkscapeLight.png";
    }
    else{
        theme.href = "css/darkTheme.css";
        inkscapeImage.src = "images/inkscape.png";
    }
}

document.addEventListener("mousemove", cursor);

function cursor(e){

    if (/android/i.test(device) || /iPad|iPhone|iPod/.test(device)) {
        aselector.classList.add("noNewCursor");
        bodySelector.classList.add("noNewCursor");
    }

    else{
        aselector.classList.remove("noNewCursor");
        bodySelector.classList.remove("noNewCursor");
        newCursor.style.top = e.pageY + 'px';
        newCursor.style.left = e.pageX + 'px';
        var classN = e.target;
        if(e.target.tagName == "LI" || e.target.tagName == "BUTTON" || e.target.tagName == "SPAN" || e.target.tagName == "A" || e.target.tagName == "I" || classN === rect1 || classN === rect2 || classN === rect3 || classN === iconBurger || e.target.className === "changeTheme" || e.target.className === "buttonsInkscape" || e.target.className === "iconEd" || classN === logoSvg || e.target.tagName == "path" || e.target.tagName == "svg"){
            newCursor.classList.remove("newCursor");
            newCursor.classList.add("cursorPointer");
        }
        
        else{
            newCursor.classList.add("newCursor");
            newCursor.classList.remove("cursorPointer");
        }
    }
}


window.addEventListener('scroll', function(){

    if ((document.body.getBoundingClientRect()).top > posicionDePartida){
        posicionDePartida = (document.body.getBoundingClientRect()).top;
        nav.style.top = "0";
    }

    else{
        posicionDePartida = (document.body.getBoundingClientRect()).top;   
        nav.style.top = "-40px";
    }
    
});

var colorNav = nav.style.backgroundColor;
window.onscroll = function() {
    y = window.scrollY;
    var hview = window.innerHeight;
    var hBody = bodySelector.scrollHeight;
    let topButton = ((y-hview)*100)/(hBody-(hview*2));
    buttonScrollBar.style.top = `${topButton}%`;
    
    if(y >= hview){scrollBar.style.opacity = "1";}
    else{scrollBar.style.opacity = "0";}

    if (window.matchMedia("(min-width: 721px)").matches) {
 
        if(y >= 20){
            nav.style.backgroundColor = colorNav;
            nav.style.height = "30px";
            edwins.style.display = "none";
            pathSlogan.style.fill = "none";
            logoSvg.style = "width: 40px; position: absolute; top: 10px";

            aNav.forEach(a => {
                a.style.fontSize = "0.7em";
            });

            iconsNav.forEach(i => {
                i.style.display = "none";
            });

            if(mapNav.style.left == "0px"){
                rect2.style.width = "0";
                rect1.style.transform = "translateY(12.5px) rotate(-45deg)";
                rect3.style.transform = "translateY(-12.5px) rotate(45deg)";
            }

            else{
                rect2.style.width = "0";
                rect1.style.transform = "translateY(7px)";
                rect3.style.transform = "translateY(-7px)";
            }
        }
    
        if(y < 20){
            //nav.style.backgroundColor = "transparent";
            nav.style.height = "15vh";
            edwins.style.display = "initial";
            pathSlogan.style = "display: block";
            logoSvg.style = "width: 80px; position: initial";

            aNav.forEach(a => {
                a.style.fontSize = "1em";
            });

            iconsNav.forEach(i => {
                i.style.display = "initial";
            });

            if(mapNav.style.left == "-350px"){
                rect2.style.width = "100%";
                rect1.style.transform = "translateY(0) rotate(0)";
                rect3.style.transform = "translateY(0) rotate(0)";
            }

            else{
                rect2.style.width = "0";
                rect1.style.transform = "translateY(12.5px) rotate(-45deg)";
                rect3.style.transform = "translateY(-12.5px) rotate(45deg)";
            }
        }
    }

    else{
        if (window.matchMedia("(max-width: 720px)").matches) {

            if(y >= 20){
                nav.style.backgroundColor = colorNav;
                nav.style.height = "30px";
                edwins.style.display = "none";
                logoSvg.style = "width: 40px; margin-top:7px";

                if(mapNav.style.left == "0px"){
                    rect2.style.width = "0";
                    rect1.style.transform = "translateY(12.5px) rotate(-45deg)";
                    rect3.style.transform = "translateY(-12.5px) rotate(45deg)";
                }

                else{
                    rect2.style.width = "0";
                    rect1.style.transform = "translateY(7px)";
                    rect3.style.transform = "translateY(-7px)";
                }
            }
        
            if(y < 20){
                nav.style.backgroundColor = "transparent";
                nav.style.boxShadow = "0 0 0 transparent";
                nav.style.height = "80px";
                edwins.style.display = "block";
                logoSvg.style = "width: 60px; margin-top:0px";

                if(mapNav.style.left == "-350px"){
                    rect2.style.width = "100%";
                    rect1.style.transform = "translateY(0) rotate(0)";
                    rect3.style.transform = "translateY(0) rotate(0)";
                }

                else{
                    rect2.style.width = "0";
                    rect1.style.transform = "translateY(12.5px) rotate(-45deg)";
                    rect3.style.transform = "translateY(-12.5px) rotate(45deg)";
                }
            }
        }
    }
}

document.addEventListener("click", function(event){ 
    var clic = event.target;
    var clicName = event.target.className;
    var position = mapNav.style.left;
    if(position == "-350px" && (clic === rect1 || clic === rect2 || clic === rect3 || clic === iconBurger)){
        mapNav.style = "left:0";
        boxLogo.style.zIndex = "0";
        rect1.style.transform = "translateY(12.5px) rotate(-45deg)";
        rect3.style.transform = "translateY(-12.5px) rotate(45deg)";
        rect2.style.width = "0";
    }

    else{
        var position = mapNav.style.left;
        if(position == "0px" && clicName != "UL" && clicName != "liMapNav" && clicName != "aMapNav" && clic != mapNav){
            y = window.scrollY;
            mapNav.style = "left:-350px";
            boxLogo.style.opacity = "1";
            if(y < 20){
                rect2.style.width = "100%";
                rect1.style.transform = "translateY(0px) rotate(0)";
                rect3.style.transform = "translateY(0px) rotate(0)";
            }

            else{
                rect2.style.width = "0";
                rect1.style.transform = "translateY(7px) rotate(0)";
                rect3.style.transform = "translateY(-7px) rotate(0)";
            }
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