__NUXT_JSONP__("/tutoriales/videojuego-de-battle-city-con-scratch-2", (function(a,b,c,d,e,f,g,h,i,j,k){b.cdate="2017-06-01 00:00:00";b.mdate="2019-10-25 15:45:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"videojuego-de-battle-city-con-scratch-2",title:a,description:f,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[],software:[e,k],level:[g,h],others:[i,j]},extra:{level:"Avanzado",duration:"60 minutos",videos:"5 vídeos"},date:b},title:a,description:f,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fvideojuego-de-battle-city-con-scratch-2\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,k,g,h,i,j],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fvideojuego-de-battle-city-con-scratch-2\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este tutorial con Scratch 2.0 te explicamos cómo programar el videojuego de Battle City. El videojuego consiste en atacar a los tanques enemigos los cuales se mueven con movimientos aleatorios a lo largo del escenario. Si consigues eliminar todos los tanques enemigos ganarás la partida.\n\n![](img\u002Fpreview.gif \"Videojuego de Battle City con Scratch\")\n\n### Reinventa, programa y comparte\n\nAntes de continuar con las lecciones de este curso de programación con Scratch te recomendamos seguir los siguientes pasos para reinventar y obtener todas las imágenes utilizadas en el videojuego gratis.\n\n- Reinventa el proyecto [Battle City (base)](https:\u002F\u002Fscratch.mit.edu\u002Fprojects\u002F186865487\u002Feditor) para obtener todas las imágenes.\n- Programa el videojuego siguiendo los videotutoriales de las siguientes lecciones.\n- Comparte el proyecto y si está entre los mejores aparecerá en la sección Mejores proyectos.\n\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Escenario del juego\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FcBdAutHTR-4\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Cuadrícula del escenario\n\nA la hora de programar videojuegos es muy importante utilizar una buena base de diseño. Normalmente se suelen utilizar plantillas o cuadrículas ya que los personajes se mueven una determinada cantidad de píxeles o pasos.\n\nPara este videojuego se ha creado una cuadrícula como se explica en el video para que los tanques puedan desplazarse libremente siguiendo el recorrido y sin atravesar las paredes del videojuego.\n\n![](img\u002Fcuadricula.jpg \"Cuadrícula del escenario\")\n\n### Programación del escenario\n\nEn cuanto a la programación en el escenario, se crean los eventos de \"Comienza juego\", \"Game Over\" y \"Winner\", los cuales cambiarán al fondo correspondiente en cada caso.\n\n![](img\u002Fescenario.jpg \"Programación del escenario\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Movimientos del tanque\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002Fu3HSTLy5eeU\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Posiciones del tanque\n\nUna vez importado el tanque programamos sus movimientos como se explica en el video, es decir, tenemos que tener en cuenta la cuadrícula utilizada para que avanze la misma cantidad de pasos como tamaño tiene la cuadrícula.\n\nEn este videojuego hemos utilizado una cuadrícula de 16 píxeles de lado para crear los ladrillos de las paredes y árboles. Nuestro tanque se situará encima del grupo de 4 cuadrados con lo que se mueve una cantidad de 16 píxeles o pasos.\n\n![](img\u002Fmovimientos.jpg \"Posiciones del tanque\")\n\n### Programación del tanque\n\nEn cuanto a la programación de nuestro personaje principal, se ha creado la función \"Mover tanque\" la cual recibe por parámetro la dirección hacia la que tiene que moverse el tanque. De esta forma estamos utilizando buenas prácticas de programación ya que evitamos duplicar código en los eventos de las direcciones.\n\n![](img\u002Fprogramacion.jpg \"Programación del tanque\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Disparar balas\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FwTmTFex6qcg\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Programación de la bala\n\nPara crear el objeto bala podemos utilizar la propia herramienta de Scratch de dibujo aunque podríamos importar otro tipo de sprite.\n\nEn cuanto a la programación de la bala procedemos a utilizar una función que hace aparecer la bala en una determinada posición (la misma que tengamos cuando pulsemos la tecla de disparo) y se moverá en la dirección hacia la que apunta el tanque.\n\nPara ello debemos crear el evento en el tanque y la funcionalidad en el propio objeto bala, como se explica en el video.\n\n\u003E Podríamos utilizar clones para disparar pero optamos por realizarlo de esta forma para no complicar tanto el videojuego.\n\n![](img\u002Fbala.jpg \"Programación de la bala\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Tanques enemigos\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FcbL4fdwydz4\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Algoritmo aleatorio de los tanques\n\nEn primer lugar se importa el tanque enemigo e inicializamos sus propiedades de coordenadas, dimensiones, etc.\n\nLa parte de la programación es un poco más compleja ya que vamos a crear un algoritmo para que el personaje se mueva de forma aleatoria.\n\nLa forma de programar el algoritmo consiste en establecer un número aleatorio que actuará como dirección aleatoria del tanque una vez encontremos un obstáculo, como se explica en el vídeo.\n\n\u003E Para el cambio de dirección observa que hacemos uso de las matemáticas.\n\n![](img\u002Falgoritmo.jpg \"Algoritmos aleatorios\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Mejoras del juego\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FgyawVkJJVeg\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Mejoras del videojuego\n\nUna de las mejoras que vamos a programar en el videojuego consiste en añadir las funcionalidades de \"Winner\" o \"Game Over\". También podríamos crear mejoras de sonidos, puntos, etc.\n\n![](img\u002Fmejoras.jpg \"Mejoras del videojuego\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Retos propuestos\n\nSi ya has completado todas las lecciones del tutorial te proponemos resolver los siguientes retos de programación con Scratch.\n\n### Reto 1: Haz desaparecer los tanques al finalizar la partida\n\nEn este reto tendrás que averiguar porque no desaparecen los tanques al finalizar la partida. Para ello deberás modificar las partes del código que creas necesarias.\n\n![](img\u002Freto-1.jpg \"Haz desaparecer los tanques al finalizar la partida\")\n\n\n\u003C!--\n\u003Cbr \u002F\u003E\n\n## Mejores proyectos\n\n![](img\u002Fproyecto-usuario.gif \"usuario\")\n--\u003E\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fvideojuego-de-battle-city-con-scratch-2\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Videojuego de Battle City programado con Scratch 2.0",{},Array(1),"Programación","Scratch","Aprende paso a paso como programar con Scratch el videojuego de tanques Battle City.","Primaria","Secundaria","Videojuegos","Battle City","Scratch 2")));