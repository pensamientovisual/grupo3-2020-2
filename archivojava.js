$(document).ready(function(){
    var foto1 = true;
    var foto2 = false;

    var aisen = $("#CL-AI");
    aisen.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Aysén del General Carlos Ibáñez del Campo")
});
    aisen.mouseleave(function(){$(this).fadeTo("fast",1);});
    aisen.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/AYSEN.jpg"
    ;})

    var magallanes = $("#CL-MA");
    magallanes.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Magallanes y Antártica Chilena")
});
    magallanes.mouseleave(function(){$(this).fadeTo("fast",1);});
    magallanes.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/MAGALLANES.jpg"
    ;})

    var antofagasta = $("#CL-AN");
    antofagasta.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Antofagasta")
});
    antofagasta.mouseleave(function(){$(this).fadeTo("fast",1);});
    antofagasta.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/ANTOFAGASTA.jpg"
    ;})

    var atacama = $("#CL-AT");
    atacama.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Atacama")
});
    atacama.mouseleave(function(){$(this).fadeTo("fast",1);});
    atacama.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/ATACAMA.jpg"
    ;})
    
    var coquimbo = $("#CL-CO");
    coquimbo.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Coquimbo")
});
    coquimbo.mouseleave(function(){$(this).fadeTo("fast",1);});
    coquimbo.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/COQUIMBO.jpg"
    ;})

    var valparaiso = $("#CL-VS");
    valparaiso.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Valparaíso")
});
    valparaiso.mouseleave(function(){$(this).fadeTo("fast",1);});
    valparaiso.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/VALPARAISO.jpg"
    ;})

    var araucania = $("#CL-AR");
    araucania.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Araucanía")
});
    araucania.mouseleave(function(){$(this).fadeTo("fast",1);});
    araucania.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/ARAUCANIA.jpg"
    ;})

    var libertador = $("#CL-LI");
    libertador.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Libertador General Bernardo O'Higgins")
});
    libertador.mouseleave(function(){$(this).fadeTo("fast",1);});
    libertador.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/OHIGGINS.jpg"
    ;})

    var lagos = $("#CL-LL");
    lagos.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Los Lagos")
});
    lagos.mouseleave(function(){$(this).fadeTo("fast",1);});
    lagos.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/LOS_LAGOS.jpg"
    ;})


    var maule = $("#CL-ML");
    maule.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Maule")
});
    maule.mouseleave(function(){$(this).fadeTo("fast",1);});
    maule.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/MAULE.jpg"
    ;})


    var arica = $("#CL-AP");
    arica.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Arica y Parinacota")
});
    arica.mouseleave(function(){$(this).fadeTo("fast",1);});
    arica.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/ARICA_PARINACOTA.jpg"
    ;})


    var rios = $("#CL-LR");
    rios.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Los Ríos")
});
    rios.mouseleave(function(){$(this).fadeTo("fast",1);});
    rios.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/LOS_RIOS.jpg"
    ;})


    var tarapaca = $("#CL-TA");
    tarapaca.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Tarapacá")
});
    tarapaca.mouseleave(function(){$(this).fadeTo("fast",1);});
    tarapaca.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/TARAPACA.jpg"
    ;})


    var biobio = $("#CL-BI");
    biobio.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Biobío")
});
    biobio.mouseleave(function(){$(this).fadeTo("fast",1);});
    biobio.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/BIOBIO.jpg"
    ;})


    var nuble = $("#CL-NU");
    nuble.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Ñuble")
});
    nuble.mouseleave(function(){$(this).fadeTo("fast",1);});
    nuble.click(function()
    {$("#foto").hide();
    document.getElementById("foto").src = "data:,"
    ;})
    

    var santiago = $("#CL-RM");
    santiago.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Región Metropolitana de Santiago")
});

    santiago.mouseleave(function(){$(this).fadeTo("fast",1);});
    santiago.click(function()
    {$("#foto").show();
    document.getElementById("foto").src = "datos_regiones/RM.jpg"
    ;})

});
