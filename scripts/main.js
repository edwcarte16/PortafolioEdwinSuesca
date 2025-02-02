const aNav = document.querySelectorAll('.aNav');
var arrowL = document.getElementById('circleLeft');
var arrowR = document.getElementById('circleRight');
var aMapNav = document.querySelectorAll('.aMapNav');
var aSubMapNav = document.querySelectorAll('.aSubMapNav');
var aNoPointer = document.querySelectorAll('.aNoPointer');
var bodySelector = document.querySelector('body');
var buttonSelector = document.querySelector('button');
var boxLogo = document.querySelector(".boxLogo");
var boxLogo = document.getElementById('boxLogo');
var boxLogoClass = document.querySelector('.boxLogo');
var burger = document.querySelector('.boxIconBurger');
var buttonScrollBar = document.getElementById('buttonScrollBar');
var changeTheme = document.querySelector(".changeTheme");
var cursorCustom;
const dark = document.getElementById("theme").href;
var themeAndroid = document.getElementById('themeAndroid').contentEditable;
var design = document.getElementById('design');
var device = 'desktop';
var edwins = document.getElementById('edwins');
const iconsNav = document.querySelectorAll('.iconsNav');
var iconBurger = document.getElementById('iconBurger');
var inkscapeContainer = document.getElementById('inkscapeContainer');
var inkscapeImage = document.getElementById("inkscapeImage");
var header = document.querySelector('header');
var logoSvg = document.getElementById('logoSvg');
const liNav = document.querySelectorAll('.liNav');
var liMapNav = document.querySelector('.liMapNav');
var mapNav = document.getElementById('mapNav');
var nameContainer = document.getElementById('nameContainer');
var photosMe1 = document.getElementById('photosMe1');
var photosMe2 = document.getElementById('photosMe2');
var photosMe3 = document.getElementById('photosMe3');
var photosMe4 = document.getElementById('photosMe4');
var SwitchCursor = document.getElementById('SwitchCursor');
var nav = document.querySelector('nav');
var newCursor = document.querySelector(".newCursor");
var newCursorId = document.getElementById("newCursorId");
var pathSlogan = document.getElementById('pathSlogan');
var posicionDePartida = 0;
var rect1 = document.getElementById('rectangle1');
var rect2 = document.getElementById('rectangle2');
var rect3 = document.getElementById('rectangle3');
var scrollBar = document.getElementById('scrollBar');
var theme = document.getElementById("theme");
var y = window.scrollY;
var colorNav = nav.style.backgroundColor;
var toolTip = document.getElementById("toolTip");
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;

if(isAndroid) {
    bodySelector.classList.add("noNewCursor");
    buttonSelector.classList.add("noNewCursor");
    newCursorId.style.display = "none";
    SwitchCursor.style.display = "none";
    newCursorId.style.zIndex = "-2";
    device = 'mobile';
    cursorCustom = false;
    window.onload = function(){
        newCursorId.style.display = "none";
    }
}
else{
    cursorCustom = true;
}

window.onload = async function(){
    loader.style.display = "none";
    mapNav.style.left = "-400px";
    await esperar(2000);
    design.style = "opacity:1";
    if (window.matchMedia("(max-width: 1000px)").matches) {
        inkscapeContainer.style.transform = "translateY(-300px)";
        await esperar(500);
        inkscapeContainer.style.transform = "translateY(0px)";
        nameContainer.style = "opacity:1";
    }

    aNav.forEach(a => {
        a.style.cursor = "none";
    });

    aMapNav.forEach(a => {
        a.style.cursor = "none";
    });

    aSubMapNav.forEach(a => {
        a.style.cursor = "none";
    });

    aNoPointer.forEach(a => {
        a.style.cursor = "none";
    });

    if(isAndroid){newCursorId.style.display = "none";}
    else{newCursorId.style.display = "block";}
}

changeTheme.onclick = function(){
    if(theme.href == dark){
        theme.href = "css/global_styles/lightTheme.css";
        themeAndroid.contentEditable = "#ffffff"
        inkscapeImage.src = "images/inkscapeLight.png";
        toolTip.innerHTML = "Cambiar a tema oscuro"
    }
    else{
        theme.href = "css/global_styles/darkTheme.css";
        themeAndroid.contentEditable = "#1e2c39"
        inkscapeImage.src = "images/inkscape.png";
        toolTip.innerHTML = "Cambiar a tema claro"
    }
}

SwitchCursor.onclick = function defaultCursor(){
    switch(cursorCustom){

        case true:
            bodySelector.classList.add("noNewCursor");
            buttonSelector.classList.add("noNewCursor");
            bodySelector.classList.remove("noCursor");
            buttonSelector.classList.remove("noCursor");
            newCursorId.style.display = "none";
            aNav.forEach(a => {
                a.style.cursor = "pointer";
            });

            aMapNav.forEach(a => {
                a.style.cursor = "pointer";
            });

            aSubMapNav.forEach(a => {
                a.style.cursor = "pointer";
            });

            aNoPointer.forEach(a => {
                a.style.cursor = "pointer";
            });

            cursorCustom = false;
        break;
        case false:
            bodySelector.classList.remove("noNewCursor");
            buttonSelector.classList.remove("noNewCursor");
            bodySelector.classList.add("noCursor");
            buttonSelector.classList.add("noCursor");
            if(isAndroid){newCursorId.style.display = "none";}
            else{newCursorId.style.display = "block";}
            aNav.forEach(a => {
                a.style.cursor = "none";
            });

            aMapNav.forEach(a => {
                a.style.cursor = "none";
            });

            aSubMapNav.forEach(a => {
                a.style.cursor = "none";
            });

            aNoPointer.forEach(a => {
                a.style.cursor = "none";
            });

            cursorCustom = true;
        break; 
    }
}

if(device == 'desktop') {
    document.addEventListener("mousemove", cursor);
    
    function cursor(e){
        if(cursorCustom == true){
            buttonSelector.classList.remove("noNewCursor");
            bodySelector.classList.remove("noNewCursor");
            buttonSelector.classList.add("noCursor");
            bodySelector.classList.add("noCursor");
            newCursor.style.top = e.pageY + 'px';
            newCursor.style.left = e.pageX + 'px';
            let classN = e.target;
            if(e.target.tagName == "LI" || e.target.tagName == "BUTTON" || e.target.tagName == "SPAN" || e.target.tagName == "A" || e.target.tagName == "I" || classN === rect1 || classN === rect2 || classN === rect3 || classN === iconBurger || e.target.className === "changeTheme" || e.target.className === "buttonsInkscape" || e.target.className === "iconEd" || classN === logoSvg || e.target.tagName == "path" || e.target.tagName == "svg"){
                newCursor.classList.remove("newCursor");
                newCursor.classList.add("cursorPointer");
                }
                
            else{
                newCursor.classList.add("newCursor");
                newCursor.classList.remove("cursorPointer");
            }
        }

        else{
            console.log("");
        }
    }
}

document.addEventListener("mousemove", toolTipFunction);

function toolTipFunction(e){
    let targetMouse = e.target.id;
    let y = e.pageY;
    let x = e.pageX;
    switch(targetMouse){
        case "changeTheme":
            toolTip.style.display = 'block';
            if(theme.href == dark){
                toolTip.innerHTML = "Cambiar a tema claro"
            }
            else{
                toolTip.innerHTML = "Cambiar a tema oscuro"
            }
            y = y - 33;
            x = x - 120;
            toolTip.style.top = y + 'px';
            toolTip.style.left = x + 'px';
        break;

        case "logoSvg":
            toolTip.innerHTML = "Recargar página";
            toolTip.style.display = 'block';
            y = y - 33;
            x = x + 40;
            toolTip.style.top = y + 'px';
            toolTip.style.left = x + 'px';
        break;

        case "photosMe1":
            toolTip.innerHTML = "Yo soy el tercero de izquierda a derecha. Los que me acompañan son mis tíos.";
            toolTip.style.display = 'block';
            toolTip.style.whiteSpace = 'normal';
            toolTip.style.width = '250px';
            newCursor.classList.remove("newCursor");
            newCursor.classList.add("cursorPointer");
            y = y + 33;
            x = x - 70;
            toolTip.style.top = y + 'px';
            toolTip.style.left = x + 'px';
        break;

        case "photosMe2":
            toolTip.innerHTML = "Así me veía a mis seis años.";
            toolTip.style.display = 'block';
            toolTip.style.whiteSpace = 'normal';
            toolTip.style.width = 'initial';
            newCursor.classList.remove("newCursor");
            newCursor.classList.add("cursorPointer");
            y = y + 33;
            x = x - 150;
            toolTip.style.top = y + 'px';
            toolTip.style.left = x + 'px';
        break;

        case "photosMe3":
            toolTip.innerHTML = "Con el requinto que me regaló mi madre... mis inicios en la música XD";
            toolTip.style.display = 'block';
            toolTip.style.whiteSpace = 'normal';
            toolTip.style.width = '220px';
            newCursor.classList.remove("newCursor");
            newCursor.classList.add("cursorPointer");
            y = y + 33;
            x = x + 10;
            toolTip.style.top = y + 'px';
            toolTip.style.left = x + 'px';
        break;

        case "photosMe4":
            toolTip.innerHTML = "Aquí, con mis tíos y mi perrito, en mi hermoso campo.";
            toolTip.style.display = 'block';
            toolTip.style.whiteSpace = 'normal';
            toolTip.style.width = '190px';
            newCursor.classList.remove("newCursor");
            newCursor.classList.add("cursorPointer");
            y = y + 33;
            x = x - 177;
            toolTip.style.top = y + 'px';
            toolTip.style.left = x + 'px';
        break;

        default:
            toolTip.style.display = 'none';
        break;
    }
}

window.onresize = async function()
{
    if (window.matchMedia("(max-width: 1000px)").matches) {
        inkscapeContainer.style.transform = "translateY(0px)";
        nameContainer.style = "opacity:1";
    }
    window.location.reload;
        if (window.matchMedia("(min-width: 721px)").matches){
            if(window.matchMedia("(max-width: 800px)").matches){
            aNav.forEach(a => {
                a.style.fontSize = "0.85em";
            });
            }

        else{
            aNav.forEach(a => {
                a.style.fontSize = "1em";
            });
        }
    }
}

window.onscroll = function() {

    if ((document.body.getBoundingClientRect()).top > posicionDePartida){
        posicionDePartida = (document.body.getBoundingClientRect()).top;
        nav.style.top = "0";
    }

    else{
        posicionDePartida = (document.body.getBoundingClientRect()).top;   
        nav.style.top = "-40px";
    }

    y = window.scrollY;
    var hview = window.innerHeight;
    var hBody = bodySelector.scrollHeight;
    let topButton = ((y-hview)*100)/(hBody-(hview*2));
    buttonScrollBar.style.top = `${topButton}%`;
    
    if(y >= hview){scrollBar.style.opacity = "1";}
    else{scrollBar.style.opacity = "0";}

    if (window.matchMedia("(min-width: 1001px)").matches) {
 
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
            nav.style.height = "15vh";
            edwins.style.display = "initial";
            pathSlogan.style = "display: block";
            logoSvg.style = "width: 80px; position: initial";

            if (window.matchMedia("(min-width: 721px)").matches){
                if(window.matchMedia("(max-width: 800px)").matches){
                    aNav.forEach(a => {
                        a.style.fontSize = "0.85em";
                    });
                }
        
                else{
                    aNav.forEach(a => {
                        a.style.fontSize = "1em";
                    });
                }
            }

            iconsNav.forEach(i => {
                i.style.display = "initial";
            });

            if(mapNav.style.left == "-400px"){
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
        if (window.matchMedia("(max-width: 1000px)").matches) {

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

                if(mapNav.style.left == "-400px"){
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
    let clic = event.target;
    let clicName = event.target.className;
    let position = mapNav.style.left;
    if(position == "-400px" && (clic === rect1 || clic === rect2 || clic === rect3 || clic === iconBurger)){
        mapNav.style = "left:0";
        boxLogo.style.zIndex = "0";
        rect1.style.transform = "translateY(12.5px) rotate(-45deg)";
        rect3.style.transform = "translateY(-12.5px) rotate(45deg)";
        rect2.style.width = "0";
    }

    else{
        position = mapNav.style.left;
        if(position == "0px" && clicName != "UL" && clicName != "liMapNav" && clicName != "aMapNav" && clic != mapNav){
            y = window.scrollY;
            mapNav.style = "left:-400px";
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