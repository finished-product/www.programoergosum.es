__NUXT_JSONP__("/tutoriales/videojuego-de-futbol-con-scratch-2", (function(a,b,c,d,e,f,g,h,i,j,k){b.cdate="2017-06-01 00:00:00";b.mdate="2019-10-25 14:45:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"videojuego-de-futbol-con-scratch-2",title:a,description:f,image:"img\u002Fpreview.jpg",category:"scratch",contributors:c,tags:{technology:[d],hardware:[],software:[e,k],level:[g,h],others:[i,j]},extra:{level:"Iniciación",duration:"45 minutos",videos:"3 vídeos"},date:b},title:a,description:f,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fvideojuego-de-futbol-con-scratch-2\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,k,g,h,i,j],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fvideojuego-de-futbol-con-scratch-2\u002FREADME.md",contributors:c,raw:"# Introducción\n\nEn este tutorial con Scratch 2.0 te explicamos cómo programar un videojuego de fútbol. El videojuego está programado para una versión de 2 jugadores y cada uno controlará un personaje. El objetivo es muy sencillo, consiste en conducir el balón hasta la portería del rival para marcar un gol.\n\n![](img\u002Fpreview.gif \"Videojuego de Fútbol con Scratch\")\n\n### Reinventa, programa y comparte\n\nAntes de continuar con las lecciones de este curso de programación con Scratch te recomendamos seguir los siguientes pasos para reinventar y obtener todas las imágenes utilizadas en el videojuego gratis.\n\n- Reinventa el proyecto [Eurocopa 2016 (base)](https:\u002F\u002Fscratch.mit.edu\u002Fprojects\u002F147151871\u002Feditor) para obtener todas las imágenes.\n- Programa el videojuego siguiendo los videotutoriales de las siguientes lecciones.\n- Comparte el proyecto y si está entre los mejores aparecerá en la sección Mejores proyectos.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Jugador 1\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FsUC0JvL1rOY\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Movimientos del jugador 1\n\nEn este video se crea en el escenario las funciones Inicializa y Comienza juego encargadas de las inicializaciones y comienzo del juego en todos los objetos. Para el caso del jugador, hemos optado por crearlo con el editor de dibujo, aunque podéis utilizar sprites descargados de internet.\n\nLa programación de nuestro personaje es muy sencilla, simplemente tenemos que añadirle las direcciones de nuestro jugador mediante giros y el efecto avanzar como explicamos en el video.\n\n![](img\u002Fjugador-1.jpg \"Movimientos del jugador 1\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Movimiento del balón\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FaoksH0RSgO0\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Marcar goles\n\nEn esta lección programamos el movimiento del balón para que haga efecto de control sobre el jugador y también programamos la detección de las porterías para marcar un gol.\n\nLa forma más sencilla para detectar las porterías es dibujar una línea de un color sólido diferente al resto de los colores que tenemos en el escenario. De esta forma, siempre que toquemos dicho color significará que hemos marcado un gol.\n\n![](img\u002Fmarcar-gol.jpg \"Marcar goles\")\n\n### Movimientos del balón\n\nPara mover el balón como si lo estuviésemos controlando, hemos optado por realizar un pequeño desplazamiento en la misma dirección que apunta nuestro jugador. Así de esta forma, el balón se moverá produciendo un efecto de desaceleración.\n\n![](img\u002Fchutar.jpg \"Movimientos del balón\")\n\n### Controles del balón\n\nPor último, y aunque todavía no se ha creado el segundo jugador del juego, podemos observar que en vez de programar la misma funcionalidad por duplicado, podemos utilizar una función encargada de mover el balón cuando sea tocado por un jugador u otro. En este caso le indicamos mediante parámetro la dirección a la que se tiene que mover.\n\n![](img\u002Ffunciones.jpg \"Controles del balón\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Jugador 2\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FnKdrurkjr2I\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Movimientos del jugador 2\n\nEn este último videotutorial, solamente hemos duplicado el jugador anteriormente creado reutilizando la programación ya programada. Recuerda que es muy importante estar seguro que la programación funciona correctamente para no duplicar errores.\n\nTambién se han añadido nuevas colisiones en el balón para detectar ambos jugadores y los colores de los sprites.\n\n![](img\u002Fjugador-2.jpg \"Movimientos del jugador 2\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Retos propuestos\n\nSi ya has completado todas las lecciones del tutorial te proponemos resolver los siguientes retos de programación con Scratch.\n\n### Reto 1: El Jugador 1 mueve más rápido el balón\n\nEn muchos videojuegos existe el llamado \"handicap\". En este reto tienes que modificar el funcionamiento del juego para dotarlo de cierta ventaja sobre uno de los jugadores. En concreto, deberás modificar la programación para que el Jugador 1 mueva el balón más deprisa que el Jugador 2.\n\n![](img\u002Freto-1.jpg \"El Jugador 1 mueve más rápido el balón\")\n\n\n\u003C!--\n\u003Cbr \u002F\u003E\n\n## Mejores proyectos\n\n![](img\u002Fproyecto-usuario.gif \"usuario\")\n--\u003E\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fvideojuego-de-futbol-con-scratch-2\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Videojuego de Fútbol programado con Scratch 2.0",{},Array(1),"Programación","Scratch","Aprende a programar un sencillo videojuego de fútbol utilizando el lenguaje por bloques de Scratch.","Primaria","Secundaria","Videojuegos","Fútbol","Scratch 2")));