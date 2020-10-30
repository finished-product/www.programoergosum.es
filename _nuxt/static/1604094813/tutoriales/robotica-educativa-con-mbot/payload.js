__NUXT_JSONP__("/tutoriales/robotica-educativa-con-mbot", (function(a,b,c,d,e,f,g,h,i,j,k,l){b.cdate="2017-06-01 00:00:00";b.mdate="2019-11-08 14:05:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"robotica-educativa-con-mbot",title:a,description:g,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[e],software:[f,l,h],level:[i,j],others:[k]},extra:{level:"Iniciación",duration:"45 minutos",videos:"1 vídeo"},date:b},title:a,description:g,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Frobotica-educativa-con-mbot\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,f,l,h,i,j,k],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Frobotica-educativa-con-mbot\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEl [robot mBot](https:\u002F\u002Fwww.makeblock.com\u002Fsteam-kits\u002Fmbot) es un robot educativo creado por MakeBlock ideal para iniciarse en la programación y robótica desde educación primaria. Está basado en Arduino UNO considerándose sencillo de utilizar ya que no necesita cableado ni soldaduras gracias a sus conectores RJ25 (típicas conexiones de teléfono).\n\n![](img\u002Fpreview.gif \"Robot mBot\")\n\nEn cuanto a la programación, se puede programar utilizando lenguajes de programación por bloques o en modo textual:\n\n- Utilizando mBlock, el software de programación propio de Makeblock, basado en Scratch, que nos permite programar el robot sin necesidad de aprender un lenguaje complejo de programación.\n- Utilizando Arduino para usuarios de nivel intermedio. En este caso se utiliza un lenguaje de programación de Arduino y necesitamos instalar las librerías de Makeblock en el software de Arduino IDE.\n- Utilizando la app de mBot disponible para iOS y Android. La podemos utilizar sin necesidad de instalarle un código previo al robot.\n\n### Especificaciones técnicas\n\n- Placa: mCore (basada en Arduino)\n- Micro controlador: Atmega328\n- Peso: 400gr\n- Alimentación: 4 pilas AA o batería de litio de 3,7V\n- Accesorios: Sensor de luz, botón, infrarrojos, ultrasónico, seguidor de línea, zumbador, Led RGB, transmisor.\n- Conexiones: 2 motores y 4 sensores\n- Comunicación: Bluetooth, Serie inalámbrica 2.4G\n- Dimensiones: 17 x 13 x 9 cm (montado)\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Hardware de mBot\n\nEl robot educativo mBot utiliza la placa mCore la cual tiene un micro controlador ATmega238 con 4 puertos con conexiones RJ25 para conectar sensores. También integra un interruptor de encendido, un botón, dos LEDs RGB, un buzzer, un sensor de luminosidad y un sensor de infrarrojos.\n\n![](img\u002Fplaca-mcore.jpg \"Placa mCore\")\n\nLos módulos o sensores que pretendemos conectar a la placa vienen clasificados por color. Ese color debe corresponder con el color del puerto al cual pretendemos conectarlo. Es decir, en la imagen anterior vemos que el puerto 2 dispone de tres colores (amarillo, azul y blanco), lo que indica que en él podremos conectar cualquier módulo cuyo RJ25 disponga de alguno de esos colores.\n\n![](img\u002Fsensores-mbot.jpg \"Sensores para mBot\")\n\nLos colores que podemos encontrarnos en los puertos de las diferentes placas de Makeblock son: Rojo (motores), Amarillo (interface digital), Azul (interface digital dual), Gris (Puerto serie, bluetooth), Negro (interface analógica y dual) y Blanco (Puerto I2C). Este sistema de identificación por colores hace que conectar los accesorios de electrónica con la placa sea algo muy intuitivo y fácil.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Construcción del Robot\n\nEn el video de esta lección se muestra como montar el robot de mBot paso a paso siguiendo el manual del fabricante. El manual es muy sencillo y didáctico y viene expresado con un lenguaje para que los alumnos de último ciclo de educación primaria o secundaria sean capaces de montarlo sin ningún problema.\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FdsOqO8fmqpk\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n\u003E Cuando adquieres el robot de mBot por primera vez suele venir preparado para que sea montado en el aula por los alumnos.\n\nPor otro lado, recordar que dependiendo de las extensiones o robots de mBot adquiridos, el montaje será diferente ya que puede incluir nuevas funcionalidades, sensores, etc. Desde la página web del fabricante podrás encontrar todos los modelos de robots educativos disponibles, así como las fichas técnicas, ayudas en el montaje y ejemplos de programación.\n\n![](img\u002Frobots-mbot.jpg \"Robots mBot\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## mBlock 3\n\nmBlock 3 es un entorno gráfico de programación basado en el editor Scratch 2.0 para que escuelas y centros de formación pueda introducir la robótica educativa de una forma sencilla y enseñar a programar robots basados en Arduino.\n\n### Instalar mBlock 3\n\nEn primer lugar deberás descargar el software de mBlock desde la [web del fabricante](https:\u002F\u002Fwww.mblock.cc\u002Fen-us\u002Fdownload\u002F) para instalarlo en tu equipo.\n\nUna vez instalado, conectamos nuestro robot mBot utilizando el cable USB y encendemos el interruptor que viene en la carcasa y seguiremos los siguientes pasos para configurarlo y conectarlo a nuestro software de mBlock.\n\n- Conectar el puerto USB\n- Elegir placa\n- Elegir extensión\n- Actualizar firmware\n- Programar y depurar el código\n- Subir el programa a Arduino\n\n### Conectar el puerto USB\n\nEn primer lugar debemos elegir el puerto correcto al cual hemos conectado nuestro robot mBot. En caso de dudas puedes acceder a las herramientas administrativas de tu equipo (Windows, Linux o MAC) y comprobar el puerto utilizado.\n\n![](img\u002Fmblock-3-conectar-puerto.jpg \"Conectar puerto\")\n\n### Elegir la placa y extensiones del robot utilizado\n\nmBlock puede ser utilizado con diferentes robots educativos o placas como Arduino. En este caso deberemos seleccionar la placa del robot mBot y la extensión de MakeBlock\n\n![](img\u002Fmblock-3-elegir-placa.jpg \"Elegir placa\")\n\nA continuación observaremos como aparecen los bloques de programación para este robot en el apartado de robots en la pestaña de programas.\n\n![](img\u002Fmblock-3-elegir-extension.jpg \"Elegir extensión\")\n\n### Actualizar firmware\n\nSegún se va programando el código a ejecutar en el robot, podemos ir probándolo sin necesidad de desconectarlo del puerto USB. En este caso, deberemos cargar el firmware en el robot para que el código y variables utilizadas en el programa puedan ser mostradas desde el robot hacia la pantalla de mBlock.\n\n![](img\u002Fmblock-3-actualizar-firmware.jpg \"Actualizar firmware\")\n\n### Hola Mundo\n\nPuedes probar a programar el siguiente código y pulsar la bandera verde. Si todo ha salido correcto deberás escuchar un sonido en el robot mBot. De esta forma ya habremos configurado y conectado correctamente nuestro robot mBot con el software mBlock.\n\n![](img\u002Fmblock-3-hola-mundo.jpg \"Hola Mundo\")\n\n### Subir el código programado al robot\n\nUna vez hemos programado nuestro robot y queremos que funcione de forma autónoma sin necesidad de estar conectado a nuestro PC mediante el cable USB, deberemos cargar el código en nuestro robot. Para ello deberemos acceder al apartado de Arduino y subir el código al robot. El proceso suele tardar unos segundos.\n\n![](img\u002Fmblock-3-subir-arduino.jpg \"Subir código a Arduino\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## mBlock 5 (versión actual)\n\nmBlock 5 es un entorno gráfico de programación basado en el editor Scratch 3.0 para que escuelas y centros de formación pueda introducir la robótica educativa de una forma sencilla y enseñar a programar robots basados en Arduino.\n\n### Instalar mBlock 5\n\nEn primer lugar deberás descargar el software de mBlock desde la [web del fabricante](https:\u002F\u002Fwww.mblock.cc\u002Fen-us\u002Fdownload\u002F) para instalarlo en tu equipo.\n\nUna vez instalado, conectamos nuestro robot mBot utilizando el cable USB y encendemos el interruptor que viene en la carcasa y seguiremos los siguientes pasos para configurarlo y conectarlo a nuestro software de mBlock.\n\n- Añadir dispositivo\n- Conectar\n- Elegir extensión\n- Modo en vivo\n- Modo cargar\n\n### Añadir dispositivo\n\nEn primer lugar deberemos añadir el robot mBot o el que estemos utilizando de forma similar a cuando en Scratch se añade un nuevo personaje. Una vez seleccionado el robot nos aparecerá como aparece en la siguiente imagen.\n\n![](img\u002Fmblock-5-anadir-dispositivo.jpg \"Añadir dispositivo\")\n\n### Conectar\n\nPara poder trabajar con el robot mBot deberemos conectarlo al puerto USB y seleccionar el puerto al cual se encuentre conectado. Una vez conectado nos deberá aparecer un mensaje indicando que se ha conectado correctamente.\n\n![](img\u002Fmblock-5-conectar-puerto.jpg \"Conectar puerto\")\n\n### Hola Mundo\n\nPuedes probar a programar el siguiente código y pulsar la bandera verde. Si todo ha salido correcto deberás escuchar un sonido en el robot mBot. De esta forma ya habremos configurado y conectado correctamente nuestro robot mBot con el software mBlock.\n\n![](img\u002Fmblock-5-hola-mundo.jpg \"Hola Mundo\")\n\n### Modo en vivo vs cargar\n\nA diferencia de la versión anterior de mBlock, en esta versión tenemos dos modos de trabajar con el robot:\n\n- Modo de carga: Permite carcar el código en un dispositivo, para que siga las instrucciones programadas después de desconectarlo del ordenador.\n- Modo en vivo: Este modo es ideal para probar el código en tiempo real. Usando mensajes y variables, puedes hacer que tu dispositivo interactúe con el escenario.\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Frobotica-educativa-con-mbot\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Introducción a la robótica educativa con mBot",{},Array(1),"Robótica educativa","Robot mBot","mBlock","Programación del robot mBot para introducir la robótica en el aula.","mblock 5","Primaria","Secundaria","Introducción","mblock 3")));