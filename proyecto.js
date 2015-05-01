//variables globales
    $(document).ready(function(){
        $('#divCuestionario').hide(); //muestra al dar click en jugar
        $('#divResultados').hide();//muestra al ejecutar submit
    });
//arreglo de objetos que almacenan las preguntas
var preguntasTrivia=
[
    {
    "Tema":"ARTE",
    "Style":"https://bootswatch.com/lumen/bootstrap.min.css",
    "iconClass":"glyphicon glyphicon-blackboard",
    "Preguntas":
        [
            { "Tema": "arte",
              "Pregunta":"Que actriz protagonizo Marley y yo?",
              "Respuestas":[
                "Jennifer Aniston", 
                "Julia Roberts",
                "Sandra Bullock"
                  ],
              "Solucion": "0"
            },
            {
              "Tema": "arte",
              "Pregunta":"Que actor fue el antagonista en el Titanic?",
              "Respuestas":[
                "Leonardo DicaPrio",
                "Billy Zane", 
                "Danny Nucci"
                  ],
              "Solucion": "1"         
            },
            {
              "Tema": "arte",
              "Pregunta":"¿Cuál famoso cantante, a pesar de su fama, nunca escribió ni una de sus canciones?",
              "Respuestas":[
                "Frank Sinatra", 
                "Julio Iglesias",
                "Elvis Presley"
                ],
              "Solucion": "2"            
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿Cuál ciudad-estado, posee una orquesta nacional, cuyo número de integrantes es                                              mayor que su ejército?", 
            "Respuestas":[
                "Monaco",
                "Mexico D.F", 
                "Washington DC"
                ],
            "Solucion": "0" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿Cuál cantante famoso fue asesinado por uno de sus fans y además posee una foto              con                            este?", 
            "Respuestas":[
                "Elvis Presley",
                "John Lennon",
                "Christian Castro"
                ],
            "Solucion": "1" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿Cuál famoso compositor, sumergía su cabeza en agua fría antes de componer?", 
            "Respuestas":[
                "Beethoven",
                "Mozart",
                "Van Gogh"
                ],
            "Solucion": "0" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿En cuál grupo musical, ninguno de sus integrantes sabía leer partituras?", 
            "Respuestas":[
                "Queen",
                "Rolling Stones",
                "Los Beatles"
                ],
            "Solucion": "2" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿Cuál fue la cantante, cuya casa disquera, rechazó la canción Umbrella, grabada por Rihanna?", 
            "Respuestas":[
                "Cristina Aguilera", 
                "Britney Spears",
                "Demi Lovato"
                ],
            "Solucion": "1" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿De quién es el album Complice lanzado en 2008?", 
            "Respuestas":[
                "Ricardo Arjona", 
                "Luis Miguel",
                "Joaquin Sabina"
                ],
            "Solucion": "1" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿En que país Latinoamericano escribió Hemingway El Viejo y el Mar??", 
            "Respuestas":[
                "Colombia", 
                "Mexico",
                "Cuba"
                ],
            "Solucion": "2" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿Qué libro escribo socrates?", 
            "Respuestas":[
                "Ninguno", 
                "Blanca Nieves",
                "Las mil y una noche"
                ],
            "Solucion": "0" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿De que nacionalidad es la escritora Angeles Mastretta?", 
            "Respuestas":[
                "Chilena", 
                "Mexicana",
                "Colombiana"
                ],
            "Solucion": "1" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿Quien fue elegida por 2000 Britanica en 2006 como la mujer mayor de 40 años con el mejor cuerpo?", 
            "Respuestas":[
                "Nicoke Kidman ", 
                "Julia Roberts",
                "Madonna"
                ],
            "Solucion": "2" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿Con la hija de que famoso cantante se caso Michael Jackson?", 
            "Respuestas":[
                "Bob Dylan", 
                "Elvis Presley",
                "Johnny Cash"
                ],
            "Solucion": "1" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿De que nacionalidad era el cantante Ibrahim Ferrer??", 
            "Respuestas":[
                "Venezolano", 
                "Brasileño",
                "Cubano"
                ],
            "Solucion": "2" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿En que ciudad nació la cantante Julieta Venegas?", 
            "Respuestas":[
                "Mexico", 
                "Colombia",
                "Estados Unidos"
                ],
            "Solucion": "2" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿Cuántos años estuvo dormida la bella durmiente?", 
            "Respuestas":[
                "diez", 
                "cincuenta",
                "cien"
                ],
            "Solucion": "2" 
            },
            {
            "Tema": "arte",
            "Pregunta":  "¿A qué edad quería volver Violeta Parra después de vivir un siglo?", 
            "Respuestas":[
                "23", 
                "37",
                "17"
                ],
            "Solucion": "2" 
            }
        ]
    },//fin del tema arte
    {
    "Tema":"CINE",
    "Style":"https://bootswatch.com/yeti/bootstrap.min.css",
    "iconClass":"glyphicon glyphicon-film",
    "Preguntas":
        [
            {
            "Tema":"cine",
            "Pregunta":  "¿A que pais se van Los Simpsons en su pelicula?", 
            "Respuestas":["Rusia", "No se van del pais","Alaska"],
            "Solucion": "2" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿Cuantos monos hay en Madagascar?", 
            "Respuestas":["0", "2","3"],
            "Solucion": "1" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿Que clase de pez es NEMO?", 
            "Respuestas":["Pez payaso", "Pez globo","Pez rallado"],
            "Solucion": "0" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿Cual de estos personajes no pertenece a la lista?", 
            "Respuestas":["Alex, el leon", "Tigresa, la tigre mujer","Marti, la Zebra"],
            "Solucion": "1" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿Quien es el protagonista de X-Men?", 
            "Respuestas":["Dr. Xavier", "Magneto","Wolverine"],
            "Solucion": "2" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En donde tiene Harry Potter su cicatriz?", 
            "Respuestas":["No tiene cicatriz", "En la mano","En el rostro"],
            "Solucion": "2" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿Cual de estos basquetbolists actuó en una pelicula animada?", 
            "Respuestas":["Michael Jordan", "Lebron James","Kobe Briant"],
            "Solucion": "0" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿Cuantas películas de Hombres de Negro (MIB) hay?", 
            "Respuestas":["7", "2","3"],
            "Solucion": "2" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estrena BigFoot y los Henderson?", 
            "Respuestas":["1985", "1987","1980"],
            "Solucion": "1" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estrena Jumanji?", 
            "Respuestas":["La película no existe", "2000","1995"],
            "Solucion": "2" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estreno el bueno, el feo y el malo?", 
            "Respuestas":["1966", "1960","1967"],
            "Solucion": "0" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estrenó la primera película del Planeta de los Simios?", 
            "Respuestas":["2000", "1970","1968"],
            "Solucion": "2" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estrenó la película de Boda en boda?", 
            "Respuestas":["2005", "2004","2006"],
            "Solucion": "0" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estrenó School of Rock?", 
            "Respuestas":["2000", "2001","2003"],
            "Solucion": "2" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estrenó Furia Oriental??", 
            "Respuestas":["1967", "1970","1972"],
            "Solucion": "2" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estrenó la última película del Padrino?", 
            "Respuestas":["1990", "1970","1960"],
            "Solucion": "0" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estreno Amadeus?", 
            "Respuestas":["1980", "1984","1987"],
            "Solucion": "1" 
            },
            {
            "Tema":"cine",
            "Pregunta":  "¿En qué año se estrena la primera película de Saw?", 
            "Respuestas":["2003", "2004","2005"],
            "Solucion": "1" 
            }
        ]
    },//fin del tema cine
    {
    "Tema":"MUSICA",
    "iconClass":"glyphicon glyphicon-music",
    "Style":"https://bootswatch.com/readable/bootstrap.min.css",
    "Preguntas":
        [
            {
              "Tema":"musica",
              "Pregunta":"Nombre del baterista de la banda Mexicana Mana",
              "Respuestas":[
                "Alex Brandom", 
                "Alex Gonzalez",
                "Alex Morales"
                  ],
              "Solucion": "1"
            },
            {
              "Tema":"musica",
              "Pregunta":"NTVG banda uruguaya-argentina, ¿por qué razón NO dicen su verdadero nombre?",
              "Respuestas":[
                "Cabala",
                "Porque es feo", 
                "Nunca tuvo nombre anterior"
                  ],
              "Solucion": "0"         
            },
            {
              "Tema":"musica",
              "Pregunta":"¿Cuál de estas canciones NO pertenece a los Guns N' Roses?",
              "Respuestas":[
                "Sweet Child o Mine", 
                "Patience",
                "Holiday"
                ],
              "Solucion": "2"            
            },
            {
            "Tema":"musica",
            "Pregunta":  "Stand by me, disco de Prince Royce ¿en que año fue presentado?", 
            "Respuestas":[
                "2006",
                "2009", 
                "2007"
                ],
            "Solucion": "1" 
            },
            {
            "Tema":"musica",
            "Pregunta":  "¿Con cuál artista argentino hace un dueto Amaia Montero?", 
            "Respuestas":[
                "Axel",
                "Alex Ubago",
                "Abel Pintos"
                ],
            "Solucion": "2" 
            },
            {
            "Tema":"musica",
            "Pregunta":  "Abel (...) Pintos¿Cual es su segundo nombre?", 
            "Respuestas":[
                "Federico",
                "Gonzalo",
                "Emiliano"
                ],
            "Solucion": "0" 
            },
            {
            "Tema":"musica",
            "Pregunta":  "Origen de la banda LOVG", 
            "Respuestas":[
                "1994",
                "1995",
                "1996"
                ],
            "Solucion": "2" 
            },
            {
            "Tema":"musica",
            "Pregunta":  "¿En cuál país se realiza el festival VDM?", 
            "Respuestas":[
                "Brazil", 
                "Chile",
                "Argentina"
                ],
            "Solucion": "1" 
            },
            {
            "Tema":"musica",
            "Pregunta":  "¿En cuál canción salen estas estrofas: Si tus ojitos fueran de aceitunas verdes, toa la noche estaría muele que muele, muele que muele….?", 
            "Respuestas":[
                "La Milagros", 
                "Como el agua",
                "Rosa María"
                ],
            "Solucion": "1" 
            },
            {
            "Tema":"musica",
            "Pregunta":  "¿Con cuál canción audición Liam de One Direction para X-factor?", 
            "Respuestas":[
                "Nobody like you", 
                "Cry Me a River",
                "Torn"
                ],
            "Solucion": "1" 
            }, 
            {
            "Tema":"musica",
            "Pregunta":  "¿Qué artista flamenco fue protagonista indirecto de un secuestro simulado?", 
            "Respuestas":[
                "Miguel de Córdoba", 
                "Lola Flores",
                "El Falete"
                ],
            "Solucion": "2" 
            }, 
            {
            "Tema":"musica",
            "Pregunta":  "¿Cuál fue la primer canción cantada como grupo por One Direction?", 
            "Respuestas":[
                "Summer of 69", 
                "Torn",
                "Eclipse On The Heart"
                ],
            "Solucion": "1" 
            }, 
            {
            "Tema":"musica",
            "Pregunta":  "¿Cómo se llama el disco de Arjona, que tiene el mismo nombre que su fundación para niños?", 
            "Respuestas":[
                "Historias", 
                "Adentro",
                "Independiente"
                ],
            "Solucion": "1" 
            }, 
            {
            "Tema":"musica",
            "Pregunta":  "¿A cuál evento dedicó una canción Arjona?", 
            "Respuestas":[
                "Grammy Latino", 
                "Viña del Mar",
                "Ninguno"
                ],
            "Solucion": "1" 
            }, 
            {
            "Tema":"musica",
            "Pregunta":  "¿En qué año nació el cantante Ricardo Arjona?", 
            "Respuestas":[
                "1962", 
                "1968",
                "1964"
                ],
            "Solucion": "2" 
            }, 
                                    {
            "Tema":"musica",
            "Pregunta":  "¿Cuál cantante colombiana tiene entre sus éxitos la canción Loca, Ciega, Sordomuda?", 
            "Respuestas":[
                "Isabel Pantoja", 
                "Paulina Rubio",
                "Shakira"
                ],
            "Solucion": "2" 
            }, 
                                    {
            "Tema":"musica",
            "Pregunta":  "¿Qué cantautora española, recientemente fallecida, cantaba el éxito Yo no soy esa?", 
            "Respuestas":[
                "Mari Trini ", 
                "Ana Belén",
                "Cecilia"
                ],
            "Solucion": "0" 
            }, 
                                    {
            "Tema":"musica",
            "Pregunta":  "¿Cómo se llama la cantante y líder del grupo Fangoria?", 
            "Respuestas":[
                "Olvido Gara (Alaska)", 
                "Ana Torroja",
                "Marta Sánchez"
                ],
            "Solucion": "0" 
            }    
        ]
    }//fin del tema musica general
];
//arreglo con preguntas actuales
var aPreguntasActuales={ Preguntas :[]};
//funcion para generar valores aleatorios
function valorAleatorio(pMaximo){
	return  Math.floor(Math.random()* (pMaximo));
}
//funcion para obtener variadas las preguntas
function obtenerPreguntasVariadas(pCantidad, pIndiceTema){
    var contador=0;
    var aPreguntas=[];
    var arrayOptionID=[];
    
            while(contador<pCantidad){
                var tema= {};
                var indiceTema= pIndiceTema;
                
                if(pIndiceTema == -1){

                    //Si el tema es variado, se le asigna un tema aleatorio
                   indiceTema= valorAleatorio(preguntasTrivia.length);
                }
                    
                tema= preguntasTrivia[indiceTema];    
                
                var aleatorioPregunta= valorAleatorio(tema.Preguntas.length);
                var pregunta= tema.Preguntas[aleatorioPregunta];
                    pregunta.iconClass=preguntasTrivia[indiceTema].iconClass;
                
                var optionID=construirOptionID(aleatorioPregunta,indiceTema);
                //se genera un id especifico a cada pregunta, si este no se encuentra ya asignado 
                //se introduce la pregunta, evitar preguntas duplicadas
                if(arrayOptionID.indexOf(optionID,0) == -1){
                    arrayOptionID.push(optionID);
                    aPreguntas.push(pregunta);
                    contador++;
                }
            }
    
            return aPreguntas;
}

//funciones para generar ID unico para cada pregunta
function construirOptionID(indicePregunta, indiceOpcion){
    var optionID= "opcion_"+indicePregunta+"_"+ indiceOpcion;
    return optionID;
}

function parsearOptionID(opcionID){
    var opciones=opcionID.split('_');
    return {"indicePregunta":opciones[1], "indiceOpcion": opciones[2]};
}
var aOpcionesSeleccionadas=[]; //arreglo que almacenara las opciones ya seleccionadas, evitar duplicados en cuenta

function seleccionarOpcion(indicePregunta, indiceOpcion){
    var preguntaSeleccionada= aPreguntasActuales.Preguntas[indicePregunta];

        preguntaSeleccionada.solucionUsuario= indiceOpcion;
     //si la pregunta ya fue seleccionada, no se contara de nuevo para la cantidad de preguntas seleccionadas        
    if(aOpcionesSeleccionadas.indexOf(indicePregunta,0)== -1){
        aOpcionesSeleccionadas.push(indicePregunta);
    }

    var  preguntasTotales= aPreguntasActuales.Preguntas.length;
    var  preguntasRestantes=aOpcionesSeleccionadas.length;

    return {"Totales": preguntasTotales,"Restantes": preguntasRestantes}
}

var temaActual={};
var dificultad={};
var defaultStyle= "https://bootswatch.com/superhero/bootstrap.min.css";//tema de inicio
var themesheet = $('<link href="'+defaultStyle+'" rel="stylesheet" />');// inserta dinamicamente el tema en el DOM

$(function(){
   var  temaStyle;
   var  iconClass;

        themesheet.appendTo('head');  // insertando el tema seleccionado en el head del documento
    
    $('.opcionTema').change(function(){
       temaActual.indice= $(this).val();
       
       if(temaActual.indice == -1) {
         temaActual.tema= "VARIADO";
         temaStyle= "https://bootswatch.com/slate/bootstrap.min.css";
         iconClass= "glyphicon glyphicon-th";//
       }else{
        temaActual.tema= preguntasTrivia[temaActual.indice].Tema;
        temaStyle= preguntasTrivia[temaActual.indice].Style;
        iconClass= preguntasTrivia[temaActual.indice].iconClass;
       }

        $('#temaActual').html(temaActual.tema);
        $('.glyphicon').addClass(iconClass);
        themesheet.attr('href',temaStyle);

    });

    $('.opcionDificultad').change(function(){
        dificultad.valor= $(this).val();
        dificultad.tipo= $(this).attr('data-nombre');
    
       $('#dificultad').html(dificultad.tipo);

       if(temaActual.indice!= null && dificultad.valor != null){  
            $("#btnJugar").removeClass('disabled');
       }
       
    });

    
    $('#btnJugar').click(function(){
        aPreguntasActuales.Preguntas=obtenerPreguntasVariadas(dificultad.valor,temaActual.indice);

        $("#restantes").html("0");
        $("#totales").html(aPreguntasActuales.Preguntas.length)

        $('#divPrincipal').slideUp(3000);
        $( "#cuestionarioTemplate" ).tmpl( aPreguntasActuales ).appendTo( "#formCuestionario" );

        //mostrar el div Cuestionario oculto al cargar la pagina
        $('#divCuestionario').slideDown(3000);

        $('.opcionesRespuesta').change(function(){
        var indicePregunta= $(this).attr('data-infoPregunta');
        var indiceSolucion= $(this).attr('data-infoRespuesta');
        var status=seleccionarOpcion(indicePregunta,indiceSolucion);
        $("#restantes").html(status.Restantes);
        $("#totales").html(status.Totales)
        if (status.Restantes== status.Totales) {
            $('#btnSubmit').removeClass('disabled');
            };

        }); //fin del change de los radios

    });// fin del evento click sobre jugar

    $("#btnSubmit").click(function(){
        var contarCorrectas=0;
        var contarIncorrectas=0;

        for(i=0; i<aPreguntasActuales.Preguntas.length; i++){

            if(aPreguntasActuales.Preguntas[i].Solucion == aPreguntasActuales.Preguntas[i].solucionUsuario){
                contarCorrectas++;
                var optionID= construirOptionID(i,aPreguntasActuales.Preguntas[i].Solucion);

                $("#"+optionID).addClass('btn-success');

            }else{
                contarIncorrectas++;

                var correctOption= construirOptionID(i,aPreguntasActuales.Preguntas[i].Solucion);
                var incorrectOption= (construirOptionID(i, aPreguntasActuales.Preguntas[i].solucionUsuario));
                    $("#"+correctOption).addClass('btn-success');
                    $("#"+ incorrectOption).addClass('btn-danger');
            }
        }

        $("#divCuestionario").slideUp(10000);

        $("#correctas").html(contarCorrectas);
        $("#incorrectas").html(contarIncorrectas);

        var puntajePreguntaCorrecta=10;//valor de cada respuesta correcta 
        var puntajeObtenido= contarCorrectas*puntajePreguntaCorrecta;
        $("#puntaje").html(puntajeObtenido);

        $('#divResultados').fadeIn(10000);

    });

});//cierre de la funcion principal


