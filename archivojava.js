$(document).ready(function(){
    var aisen = $("#CL-AI");
    aisen.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Aisén del General Carlos Ibáñez del Campo")
});
    aisen.mouseleave(function(){$(this).fadeTo("fast",1);});

    var magallanes = $("#CL-MA");
    magallanes.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Magallanes y Antártica Chilena")
});
    magallanes.mouseleave(function(){$(this).fadeTo("fast",1);});

    var antofagasta = $("#CL-AN");
    antofagasta.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Antofagasta")
});
    antofagasta.mouseleave(function(){$(this).fadeTo("fast",1);});

    var atacama = $("#CL-AT");
    atacama.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Atacama")
});
    atacama.mouseleave(function(){$(this).fadeTo("fast",1);});
    
    var coquimbo = $("#CL-CO");
    coquimbo.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Coquimbo")
});
    coquimbo.mouseleave(function(){$(this).fadeTo("fast",1);});

    var valparaiso = $("#CL-VS");
    valparaiso.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Valparaíso")
});
    valparaiso.mouseleave(function(){$(this).fadeTo("fast",1);});

    var araucania = $("#CL-AR");
    araucania.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Araucanía")
});
    araucania.mouseleave(function(){$(this).fadeTo("fast",1);});

    var libertador = $("#CL-LI");
    libertador.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Libertador General Bernardo O'Higgins")
});
    libertador.mouseleave(function(){$(this).fadeTo("fast",1);});

    var lagos = $("#CL-LL");
    lagos.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Los Lagos")
});
    lagos.mouseleave(function(){$(this).fadeTo("fast",1);});

    var maule = $("#CL-ML");
    maule.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Maule")
});
    maule.mouseleave(function(){$(this).fadeTo("fast",1);});

    var arica = $("#CL-AP");
    arica.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Arica y Parinacota")
});
    arica.mouseleave(function(){$(this).fadeTo("fast",1);});

    var rios = $("#CL-LR");
    rios.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Los Ríos")
});
    rios.mouseleave(function(){$(this).fadeTo("fast",1);});

    var tarapaca = $("#CL-TA");
    tarapaca.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Tarapacá")
});
    tarapaca.mouseleave(function(){$(this).fadeTo("fast",1);});

    var biobio = $("#CL-BI");
    biobio.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Biobío")
});
    biobio.mouseleave(function(){$(this).fadeTo("fast",1);});

    var nuble = $("#CL-NU");
    nuble.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Ñuble")
});
    nuble.mouseleave(function(){$(this).fadeTo("fast",1);});
    nuble.click(function()
    {$("#foto").toggle();
    document.getElementById("foto").src = ""//Poner direccion
    ;})
    

    var santiago = $("#CL-RM");
    santiago.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Región Metropolitana de Santiago")
});
    santiago.mouseleave(function(){$(this).fadeTo("fast",1);});
    santiago.click(function()
    {$("#foto").toggle();
    document.getElementById("foto").src = ""//Poner direccion
    ;})

});
