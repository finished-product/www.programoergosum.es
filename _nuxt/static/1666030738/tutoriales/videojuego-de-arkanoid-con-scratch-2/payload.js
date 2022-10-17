__NUXT_JSONP__("/tutoriales/videojuego-de-arkanoid-con-scratch-2", (function(a,b,c,d,e,f,g,h,i,j,k){c[0]="migueabellan";k.cdate="2017-06-01 00:00:00";k.mdate="2019-10-25 14:55:12";return {data:[{tutorial:{alias:"videojuego-de-arkanoid-con-scratch-2",title:a,description:b,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[],software:[e,f],level:[g,h],others:[i,j]},extra:{level:"Medio",duration:"60 minutos",videos:"3 vídeos"},date:k},title:a,description:b,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fvideojuego-de-arkanoid-con-scratch-2\u002Fimg\u002Fpreview.jpg",date:k,tags:[d,e,f,g,h,i,j],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fvideojuego-de-arkanoid-con-scratch-2\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este tutorial con Scratch 2.0 te explicamos cómo programar el videojuego de Arkanoid. El videojuego consiste en romper unos ladrillos con una pelota. La pelota rebota en las paredes y no debe tocar el borde inferior de la pantalla en cuyo caso terminará la partida. Para que no toque el borde inferior debemos desplazar una nave en movimiento horizontal donde la pelota rebotará.\n\n![](img\u002Fpreview.gif \"Videojuego de Arkanoid con Scratch\")\n\n### Reinventa, programa y comparte\n\nAntes de continuar con las lecciones de este curso de programación con Scratch te recomendamos seguir los siguientes pasos para reinventar y obtener todas las imágenes utilizadas en el videojuego gratis.\n\n- Reinventa el proyecto [Arkanoid (base)](https:\u002F\u002Fscratch.mit.edu\u002Fprojects\u002F147152819\u002Feditor) para obtener todas las imágenes.\n- Programa el videojuego siguiendo los videotutoriales de las siguientes lecciones.\n- Comparte el proyecto y si está entre los mejores aparecerá en la sección Mejores proyectos.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Inicio del juego\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FdddeFS44f-E\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Escenario del videojuego\n\nEn esta primera lección del curso se explica como crear el escenario y asignar los movimientos iniciales de la pelota. En el vídeo te explicamos cómo crear y modificar el escenario para detectar el fondo de la pantalla añadiendo un color sólido al mismo. Para ello, además de crear el fondo principal del videojuego, crearemos otro fondo que se mostrará cuando finalice la partida.\n\n![](img\u002Fescenario.jpg \"Escenario del videojuego\")\n\n### Programación de la pelota\n\nUna vez programadas las funciones necesarias en el escenario, añadimos el objeto de la pelota que se moverá a lo largo y ancho del escenario siguiendo un movimiento aleatorio y rebotando en caso de tocar alguno de los bordes de la pantalla. En caso de tocar el color sólido puesto en el borde inferior del escenario, enviaremos un mensaje para que finalice la partida.\n\n![](img\u002Fbola.jpg \"Programación de la pelota\")\n\n### Movimientos de la nave\n\nPara finalizar, se programa el movimiento de la nave, que en nuestro caso se mueve utilizando nuestro ratón. PAra ello será necesario intercambiar la posición sobre el eje horizontal de la nave por el que tenga nuestro ratón. Otra alternativa es utilizando las flechas derecha e izquierda de nuestro teclado.\n\n![](img\u002Fnave.jpg \"Movimientos de la nave\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Juego de Arkanoid\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FR1J6csAkbfs\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Partida\n\nEn este video se desarrolla la segunda parte del juego en sí. Los bloques son creados mediante clones y utilizando un bucle anidado.\n\n\u003E El concepto de bucle anidado es un término utilizado en algoritmos informáticos. Hay que utilizarlos con cuidado para no entrar en bucles infinitos.\n\nPodrás observar en el video que estamos utilizando clones con Scratch (lo que llamamos buenas prácticas de programación) para crear todos los bloques del videojuego en tiempo de ejecución. Imagina que sin esta técnica, en vez de crear 1 bloque tendríamos que crear 55 bloques con sus respectivas programaciones. Es decir, nos hemos ahorrado horas y horas de programación.\n\n![](img\u002Fbloques.jpg \"Bloques\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Variables en Scratch\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FrN-eu3N29FU\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Variable para la velocidad\n\nEn esta lección vamos a crear una variable encargada de aumentar la velocidad de la pelota para complicar así ganar la partida. Dicha variable aumentará su valor cada vez que obtengamos un bloque nuevo, y dicho valor deberá añadirse al bloque de mover la pelota.\n\nRecuerda que siempre que se crean variables debemos inicializarlas a un valor por defecto. En este caso las inicializamos en el escenario siguiendo las buenas prácticas de programación que comentamos en el video anterior.\n\n![](img\u002Fvelocidad.jpg \"Variable para la velocidad\")\n\n### Variable para los puntos\n\nPor otro lado, vamos a añadir otra variable encargada de acumular los bloques que destruimos mostrando su valor por la pantalla. Esta variable se puede ver como un contador de puntos de la partida, y que más adelante utilizaremos para saber si hemos obtenido todos los bloques para finalizar la partida.\n\n![](img\u002Fpuntos.jpg \"Variable para los puntos\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Dudas en YouTube\n\nEn esta lección vamos a responder una duda muy común que suele aparecer en este videojuego cuando se cambia un objeto de dirección durante el transcurso del videojuego. Esta duda la plantea Eduardo a través de un comentario en nuestro canal de YouTube.\n\n![](img\u002Fduda-de-eduardo.jpg \"Duda de Eduardo\")\n\n**Problema**\n\nCuando el objeto Pelota toca al objeto Nave o Bloque, realizamos el cambio de dirección mediante la ecuación matemática (180 - dirección) y además le añadimos una pequeña desviación de 15º. El problema es que según varios factores (tamaño de la bola, velocidad de nuestro ordenador, etc.) se realizan varios cambios de dirección, sin que la pelota llegue a desplazarse del objeto que toca, lo que crea el efecto de que la pelota se buguea quedando enganchada como comenta Eduardo en el comentario.\n\n**Solución**\n\nPara solucionarlo basta con añadir un bloque para que la pelota se desplace obligatoriamente justo después de cambiar de dirección, y de esa forma, evitar que vuelva a tocar al objeto en el mismo instante.\n\n![](img\u002Fduda-de-eduardo-solucion.jpg \"Duda resuelta\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Retos propuestos\n\nSi ya has completado todas las lecciones del tutorial te proponemos resolver los siguientes retos de programación con Scratch.\n\n### Reto 1: Movimiento de la nave mediante teclado\n\nEn el tutorial se explica cómo programar el movimiento horizontal de la nave utilizando el puntero del ratón, sin embargo, en este reto, te propongo que modifiques la programación del videojuego para controlar la nave utilizando las flechas derecha e izquierda de tu teclado.\n\n![](img\u002Freto-1.jpg \"Movimiento de la nave mediante teclado\")\n\n### Reto 2: Cambio de disfraces\n\nPara personalizar el videojuego a tu gusto y ser el más original de tus amigos puedes modificar la apariencia del videojuego de Arkanoid. Recuerda que no será necesario modificar ningún bloque de programación, solamente deberás cambiar los disfraces de los objetos.\n\n![](img\u002Freto-2.jpg \"Cambio de disfraces\")\n\n### Reto 3: Efecto de bloque al desaparecer\n\nSiempre que la pelota toca un bloque de programación este se borra, sin embargo quedaría más chulo si al desaparecer gira desvaneciéndose al mismo tiempo como se muestra en la siguiente imagen. La programación es muy sencilla.\n\n![](img\u002Freto-3.jpg \"Efecto de bloque al desaparecer\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Mejores proyectos\n\n![](img\u002Fproyecto-sinnombre_1.gif \"sinnombre_1\")\n\n![](img\u002Fproyecto-pablorubma.gif \"pablorubma\")\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fvideojuego-de-arkanoid-con-scratch-2\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Videojuego de Arkanoid programado con Scratch 2.0","Aprende a programar el video juego de Arkanoid a través de video tutoriales y buenas prácticas de programación.",Array(1),"Programación","Scratch","Scratch 2","Primaria","Secundaria","Videojuegos","Arkanoid",{})));