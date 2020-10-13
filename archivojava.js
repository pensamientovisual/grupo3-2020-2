$(document).ready(function(){
    var santiago = $("#CL-RM");
    santiago.mouseenter(function(){$(this).fadeTo("fast",0.5);});
    santiago.mouseleave(function(){$(this).fadeTo("fast",1);});
    santiago.click(function()
    {$("#foto").toggle()
    ;})
});