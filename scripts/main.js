//Esta función remueve el tema Claro y Agrega el tema Oscuro
$("#buttonTheme").click(function(){
    $("p, .pathSlogan, .edwins").addClass("Light-Theme-Texts");
    $(".pathSlogan, .edwins").removeClass("pathSlogan, edwins");
    $(".pathSlogan, .edwins").removeClass("pathSlogan, edwins");
    $("body").addClass("Light-Theme-backgrounds");
});