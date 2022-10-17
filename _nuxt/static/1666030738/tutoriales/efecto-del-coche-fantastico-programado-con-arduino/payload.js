__NUXT_JSONP__("/tutoriales/efecto-del-coche-fantastico-programado-con-arduino", (function(a,b,c,d,e,f,g,h,i,j,k,l){c[0]="migueabellan";l.cdate="2018-01-26 15:57:33";l.mdate="2019-07-09 14:05:12";return {data:[{tutorial:{alias:"efecto-del-coche-fantastico-programado-con-arduino",title:a,description:b,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d,e],hardware:[f],software:[g,h],level:[i,j],others:[k]},extra:{level:"Medio",duration:"60 minutos",videos:"6 vídeos"},date:l},title:a,description:b,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fefecto-del-coche-fantastico-programado-con-arduino\u002Fimg\u002Fpreview.jpg",date:l,tags:[d,e,f,g,h,i,j,k],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fefecto-del-coche-fantastico-programado-con-arduino\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este curso aprenderás a construir y programar el efecto de las luces del coche fantástico en Arduino. En las siguientes lecciones te explicamos paso a paso conceptos básicos de electrónica y programación que deberás conocer para construir la práctica.\n\n![](img\u002Fpreview.gif)\n\n### Materiales\n\nAntes de continuar con las lecciones del curso asegúrate que dispones de todos los componentes que se van a necesitar. Los componentes utilizados en este tutorial son:\n\n- Arduino UNO\n- Protoboard\n- Latiguillos\n- Potenciómetro\n- LEDs\n- Resistencias\n\n![](img\u002Fesquema-electrico.jpg)\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Programación en S4A\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F0WANe6ktTEc\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEn esta lección te enseñamos la programación de las luces del coche fantástico programado en Scratch 4 Arduino (S4A) y en las siguientes lecciones explicaremos como construir sobre la placa de prototipado los diferentes leds y resistencias.\n\nLo primero que hay que hacer es crear un objeto de tipo Arduino que será donde se programarán todas las instrucciones que se comunican con la placa de Arduino.\n\nEn cuanto a la programación, utilizaremos un bucle que se repetirá siempre y dentro del bucle añadiremos las instrucciones de apagar y encender el led correspondiente durante una determinada cantidad de tiempo. Para reutilizar código se ha creado una variable que se inicializa al principio del bucle y que contiene el tiempo de espera entre encendido y apagado de cada led.\n\n![](img\u002Fprogramacion-s4a.jpg)\n\n### Construcción del semáforo\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FQnphMqVGE8A\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nSiguiendo el esquema eléctrico y explicaciones proporcionadas en la lección anterior, conectamos los led y resistencias sobre la placa de prototipado y Arduino.\n\nSiguiendo el esquema eléctrico de la lección anterior, conectamos los led y resistencias sobre la placa de prototipado y Arduino. Para reutilizar cables, conectamos todas las resistencias a la guía serigrafiada con el polo negativo de nuestra placa de prototipado. A continuación, conectamos los led a la resistencia. Para esta conexión se ha conectado la patilla más corta del led (cátodo o negativo) a la resistencia, y la patilla más larga (ánodo o positivo) al pin digital programado en nuestro programa S4A.\n\nPor último, se conecta el cable de USB al equipo y pulsamos la bandera verde para ver el resultado de nuestro cruce de semáforos.\n\n### Regular la velocidad con un potenciómetro\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FC9UnmhfXAe4\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEn esta lección te enseñamos como modificar la velocidad de los leds con ayuda de un potenciómetro. Para ello tenemos que modificar la programación para obtener el valor, y por otro lado añadir el componente sobre la placa de prototipado.\n\nEn cuanto a la programación es suficiente con añadir a la variable el valor que nos da el sensor conectado al pin analógico 0.\n\nPor otro lado, el potenciómetro deberá estar conectado al sensor analógico 0 en su patilla central, y las otras se conectarán al 5V y GND respectivamente.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Programación en Arduino IDE\n\nEn esta lección te vamos a enseñar una forma de programar este código, pero como podrás observar viendo el título, existe una forma mejor o más eficiente, que podrás ver en las siguientes lecciones.\n\nEl motivo de este video es para que observes que un programa se puede programar de muchas formas, pero siempre tenemos que intentar buscar la manera que nuestro código pueda ser reutilizable, escalable y mantenible.\n\n![](img\u002Fmalas-vs-buenas-practicas.jpg)\n\n### Malas prácticas\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F7CoMjsU0aI4\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Buenas prácticas\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F7VJ_nCiII6w\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEn este caso observa la reducción a la mitad del código fuente. Además de quedar más limpio y ordenado. Todo esto es lo que se persigue con el aprendizaje de la programación. Puedes ver todos los beneficios que conlleva la reutilización del código como comentamos en el video.\n\n\n### Construcción del semáforo\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FHFzhEpXn6yA\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nSiguiendo el esquema eléctrico de la lección anterior, conectamos los led y resistencias sobre la placa de prototipado y Arduino. Para reutilizar cables, conectamos todas las resistencias a la guía serigrafiada con el polo negativo de nuestra placa de prototipado. A continuación, conectamos los led a la resistencia. Para esta conexión se ha conectado la patilla más corta del led (cátodo o negativo) a la resistencia, y la patilla más larga (ánodo o positivo) al pin digital programado en nuestro programa S4A.\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fefecto-del-coche-fantastico-programado-con-arduino\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Efecto de luces del coche fantástico con Arduino","Programación del efecto de las luces del coche fantástico programado con Arduino.",Array(1),"Electrónica","Programación","Arduino","Arduino IDE","Scratch 4 Arduino","Secundaria","Bachillerato","Coche",{})));