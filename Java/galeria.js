$(document).ready(function(){

$("#contenedor").on("click",function(){
    if($("#contenedor").is(":visible")){
        $("#contenedor").slideUp();
    }
    });
$("#contenedor").on("click",function(event){
    $("#contenedor").slideToggle();
    event.stopImmediatePropagation();
    });
    
});