__NUXT_JSONP__("/tutoriales/robotica-educativa-con-echidna", (function(a,b,c,d,e,f,g,h,i,j,k){c[0]="migueabellan";k.cdate="2017-06-01 00:00:00";k.mdate="2019-10-27 14:05:12";return {data:[{tutorial:{alias:"robotica-educativa-con-echidna",title:a,description:b,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[e],software:[f,g],level:[h,i],others:[j]},extra:{level:"Iniciación",duration:"45 minutos",videos:"3 vídeos"},date:k},title:a,description:b,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Frobotica-educativa-con-echidna\u002Fimg\u002Fpreview.jpg",date:k,tags:[d,e,f,g,h,i,j],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Frobotica-educativa-con-echidna\u002FREADME.md",contributors:c,raw:"## Introducción\n\n[Echidna Shield](http:\u002F\u002Fechidna.es\u002F) es una placa para arduino dirigida a facilitar el aprendizaje de la robótica en los últimos cursos de educación primaria y secundaria, como indican en la propia web del proyecto. Surge ante la necesidad de dotar a los centros educativos con herramientas que les permitan conectar el mundo físico con el digital a través de herramientas libres. Es un proyecto OpenSource creado por Jorge Lobo, Xabier Rosas y José Pujol, profesores y entusiastas de la robótica educativa.\n\n![](img\u002Fechidna-shield.jpg \"Echidna Shield\")\n\nEl escudo está pensado para ser utilizado con lenguajes visuales de programación por bloques, como S4A, mBlock, Snap4Arduino, etc. Al tener sensores y actuadores integrados, elimina  la necesidad de cablear, minimizando los errores de electrónica, lo que conlleva un incremento en el tiempo dedicado a programación y al conocimiento de los componentes. Puede actuar en dos modos, un modo de sensores, donde podrás utilizar los sensores de la placa, y un modo Makey-Makey.\n\nEn la placa Echidna Shield podemos encontrar los siguientes sensores y actuadores:\n\n- 3 LEDs (rojo, naranja y verde) \n- 1 LED RGB\n- 1 sensor de luz (LDR)\n- 1 acelerómetro de 2 ejes\n- 1 joystick analógico de 2 ejes\n- 2 pulsadores\n- 1 zumbador piezoeléctrico\n- 1 conexión para sensores analógicos\n- 3 conexiones digitales de entrada\u002Fsalida con modulación por ancho de pulsos (PWM)\n- 8 entradas y la tierra para crear circuitos tipo Makey Makey\n- 1 salida de sonido a través de jack de audio de 3,5 mm\n\n![](img\u002Fesquema-echidna-shield.jpg \"Esquema Echidna Shield\")\n\nDesde la propia web del proyecto encontrarás una guía abierta, que se irá modificando a la par que se vaya creando materiales de las diferentes actividades y aportaciones de la comunidad.\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FIuekBu6J0Co\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Primeros pasos\n\nComo se explica en la lección anterior Echidna Shield es un escudo para Arduino. Esto quiere decir que para utilizar esta placa necesitamos una placa Arduino UNO o compatible.\n\n![](img\u002Fechidna-arduino.jpg \"Arduino UNO y Echidna Shield\")\n\nAntes de programar con ellas deberemos conectarlas. Hay que prestar atención a la forma de conectarlas, ya que pueden dañarse si intentan conectarse de una forma errónea. Fíjate que solamente se puede conectar en una dirección, como aparece en la anterior imagen. De tal forma que los pines de la Echidna Shield deben quedar en la parte interior de la tarjeta de Arduino UNO, es decir, en el pin digital número 0 que aparece serigrafiado en la parte interior.\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002Fd2bde03Q_1U\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nUna vez hemos conectado ambas placas podemos empezar a programarlas. En las siguientes lecciones se explica cómo programarlas utilizando varias plataformas de programación por bloques como mBlock o Snap4Arduino.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Configuración mBlock 3.0\n\nmBlock es un entorno gráfico de programación basado en Scratch 2.0 y desarrollado por la empresa MakeBlock. El primer paso será instalar el software desde la propia página web del proyecto. Está disponible para Windows, Linux o Mac, siendo la instalación similar.\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002Fc5CGQOZTsis\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEl primer paso que debemos realizar será añadir la extensión de Arduino, ya que como hemos dicho, Echidna Shield es un escudo que se conecta con Arduino, por eso la configuración sobre mBlock será igual que si quisiéramos utilizar la placa de Arduino solamente sin escudo.\n\n![](img\u002Fmblock-paso-1.jpg \"Paso 1\")\n\nAdemás, en placas debemos seleccionar la placa que vamos a utilizar, Arduino UNO en nuestro caso. Tanto el paso anterior como el actual, quedarán guardados en el siguiente reinicio de mBlock salvo que se vuelva a modificar.\n\n![](img\u002Fmblock-paso-2.jpg \"Paso 2\")\n\nLo sigiuente será seleccionar el puerto que vamos a utilizar. Normalmente suele ser el último que aparece. En el caso de sistemas operativos como Windows, aparecerá COM seguido de un número. Puedes acceder a propiedades de sistema para ver el puerto al cual está conectado Arduino.\n\n![](img\u002Fmblock-paso-3.jpg \"Paso 3\")\n\nEl último paso antes de empezar a programar será cargar el firmware en la placa de Arduino. Este proceso dura unos segundos y deberá realizarse siempre que se desconecte la placa de Arduino del PC. Este pequeño firmware hace que se pueda sincronizar la información en el editor de programación mBlock con la tarjeta de Arduino.\n\n![](img\u002Fmblock-paso-4.jpg \"Paso 4\")\n\nPor último, vamos a crear un programa muy sencillo que encenderá el LED RGB en color rojo y lo apagará de forma intermitente.\n\n![](img\u002Fmblock-paso-5.jpg \"Paso 5\")\n\nPor último, vamos a suponer que queremos cargar el código anterior en la placa de Arduino para que funcione aún así cuando nuestra placa de Arduino esté desconectada de nuestro programa mBlock. En este caso, lo subiremos a la placa haciendo clic sobre el botón de subir a la placa.\n\n![](img\u002Fmblock-paso-6.jpg \"Paso 6\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Configuración mBlock 5.0\n\nmBlock es un entorno gráfico de programación basado en Scratch 3.0 y desarrollado por la empresa MakeBlock. El primer paso será instalar el software desde la propia página web del proyecto. Está disponible para Windows, Linux o Mac, siendo la instalación similar.\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F2lqjPiC4MMk\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEl primer paso que debemos realizar será añadir el dispositivo a utilizar. Podemos observarnos en la parte de los disfraces sobre la pestaña Dispositivos. Añadimos el dispositivo Arduino como explicamos en la lección anterior.\n\n![](img\u002Fmblock-5-paso-1.jpg \"Paso 1\")\n\nEl siguiente paso será conectar el puerto. Dependiendo de el sistema operativo utilizado nos aparecerá una nomenclatura de puertos.\n\n![](img\u002Fmblock-5-paso-2.jpg \"Paso 2\")\n\nPur último, cuando tengamos un código de ejemplo cargado, deberemos subirlo a Arduino para que podamos probarlo y trabajar con el de forma autónoma sin necesidad de estar conectado al PC.\n\n![](img\u002Fmblock-5-paso-3.jpg \"Paso 3\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Configuración Snap for Arduino\n\nSnap4Arduino es una combinación de Snap! y de Arduino. El primer paso será instalar el software desde la propia página web del proyecto. Está disponible para Windows, Linux o Mac, siendo la instalación similar.\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FuAK5tvSOaRY\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nLo primero que debemos hacer es cargar el StandardFirmata en nuestra placa de Arduino. Esto lo realizaremos mediante el Software de Arduino IDE. Para ello, una vez descargado desde la web de Arduino, abrimos el archivo que se encuentra en los ejemplos de la aplicación.\n\n![](img\u002Fsnap-paso-1.jpg \"Paso 1\")\n\nUna vez abierto lo subiremos a la placa haciendo clic en el icono de subir. Este proceso suele tardar apenas unos segundos.\n\n![](img\u002Fsnap-paso-2.jpg \"Paso 2\")\n\nA continuación, con el programa de Snap4Arduino, en el apartado de Arduino conectaremos al puerto que tengamos seleccionado nuestra placa de Arduino, esto es el USB. Recuerda que en Sistemas Operativos como Windows aparecerá el nombre de puerto como COM y seguido de un número.\n\n![](img\u002Fsnap-paso-3.jpg \"Paso 3\")\n\nPor último, podemos probar el ejemplo de prueba para encender un led de forma intermitente y veremos que funciona perfectamente.\n\n![](img\u002Fsnap-paso-4.jpg \"Paso 4\")\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Frobotica-educativa-con-echidna\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Introducción a la robótica educativa con Echidna Shield","Programación de videojuegos utilizando la placa educativa Echidna Shield con mBlock.",Array(1),"Robótica educativa","Echidna Shield","mBlock","Snap 4 Arduino","Primaria","Secundaria","Introducción",{})));