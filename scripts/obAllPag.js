const aNav = document.querySelectorAll('.aNav');
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
var themeCache;
const dark = document.getElementById("theme").href;
var themeAndroid = document.getElementById('themeAndroid').contentEditable;
var device = 'desktop';
var edwins = document.getElementById('edwins');
const iconsNav = document.querySelectorAll('.iconsNav');
var iconBurger = document.getElementById('iconBurger');
var header = document.querySelector('header');
var logoSvg = document.getElementById('logoSvg');
const liNav = document.querySelectorAll('.liNav');
var liMapNav = document.querySelector('.liMapNav');
var mapNav = document.getElementById('mapNav');
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
console.log(themeCache);

changeTheme.onclick = function(){
    if(theme.href == dark){
        theme.href = "css/global_styles/lightTheme.css";
        themeAndroid.contentEditable = "#ffffff";
        toolTip.innerHTML = "Cambiar a tema oscuro";
        localStorage.setItem('theme','css/global_styles/lightTheme.css');
    }
    else{
        theme.href = "css/global_styles/darkTheme.css";
        themeAndroid.contentEditable = "#1e2c39";
        toolTip.innerHTML = "Cambiar a tema claro";
        localStorage.setItem('theme','css/global_styles/darkTheme.css');
    }
}

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
            toolTip.innerHTML = "Recargar página"
            toolTip.style.display = 'block';
            y = y - 33;
            x = x + 40;
            toolTip.style.top = y + 'px';
            toolTip.style.left = x + 'px';
        break;

        default:
            toolTip.style.display = 'none';
        break;
    }
}

window.onload = async function(){
    mapNav.style.left = "-400px";
    await esperar(2000);

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
        if(e.target.tagName == "LI" || e.target.tagName == "BUTTON" || e.target.tagName == "SPAN" || e.target.tagName == "A" || e.target.tagName == "I" || classN === rect1 || classN === rect2 || classN === rect3 || classN === iconBurger || e.target.className === "changeTheme" || e.target.className === "iconEd" || classN === logoSvg || e.target.tagName == "path" || e.target.tagName == "svg"){
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

window.onresize = async function()
{

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
            nav.style.height = "100px";
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