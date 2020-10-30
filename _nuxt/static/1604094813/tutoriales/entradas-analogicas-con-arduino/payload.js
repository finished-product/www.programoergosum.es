__NUXT_JSONP__("/tutoriales/entradas-analogicas-con-arduino", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.cdate="2018-01-26 15:57:33";b.mdate="2019-07-09 14:05:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"entradas-analogicas-con-arduino",title:a,description:h,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d,e],hardware:[f],software:[g,n],level:[i,j],others:[k,l]},extra:{level:"Iniciación",duration:"120 minutos",videos:m},date:b},title:a,description:h,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fentradas-analogicas-con-arduino\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,f,g,n,i,j,k,l],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fentradas-analogicas-con-arduino\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este curso aprenderás a programar diferentes prácticas utilizando las entradas analógicas de la placa de arduino. Para cada una se explica la parte de electrónica que deberás conocer antes de programarlas. Observarás además que puedes programarlas utilizando los lenguajes de programación por bloques o textual de Arduino.\n\n- Práctica 1: Encendido nocturno\n- Práctica 2: RGB crepuscular\n- Práctica 3: Regulador de luz\n- Práctica 4: Servomotor manual\n\n### Materiales\n\nAntes de continuar con las lecciones del curso asegúrate que dispones de todos los componentes que se van a necesitar. Los componentes utilizados en este tutorial son:\n\n- Arduino UNO\n- Protoboard\n- Latiguillos\n- LEDs\n- LED RGB\n- Resistencias\n- Sensor LDR\n- Potenciómetro\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Entradas analógicas\n\nUna señal analógica es aquella que puede tomar diferentes valores. Su forma característica es conocida como señal de onda senoidal y las representaciones se realizan en el dominio del tiempo. La función principal de las salidas analógicas es entregar una señal de control que le dará funcionalidad a un circuito electrónico que será el encargado de cumplir con las funciones que el usuario requiera.\n\n![](img\u002Fsenal-analogica.jpg)\n\n### Entradas analógicas en Arduino\n\nEn arduino disponemos de 6 pines para entradas analógicas serigrafiados con los números del A0 al A5. Estos pines son utilizados únicamente como entradas analógicas.\n\n\u003E La entrada analógica toma los valores comprendidos entre 0 y 1023.\n\n![](img\u002Fentradas-analogicas.jpg)\n\nEs importante recordar que no podemos sobrepasar los límites de voltaje permitidos, es decir, si se aplica un voltaje mayor a 5 voltios en una entrada digital, la placa de arduino se quemará. Lo mismo aplica para voltajes negativos, por lo que debemos asegurar que el voltaje aplicado a una entrada digital se encuentre entre 0 y 5 voltios.\n\n### Bloques de programación\n\nPara programar las siguientes prácticas utilizando el lenguaje de programación por bloques de mBlock, deberás conocer los siguientes bloques de programación, encargados de recibir el valor en los pines analógicos de la placa de arduino.\n\nEl bloque lee la cantidad que recibe del sensor conectado, un valor comprendido entre 0 y 1023.\n\n\u003E Los pines para las entradas analógicas corresponden a los pines del A0 al A5 y pueden tomar valores comprendidos entre 0 y 1023.\n\n![](img\u002Fentradas-analogicas-mblock.jpg)\n\n### Instrucciones de programación\n\nPara programar las siguientes prácticas utilizando el lenguaje de programación textual de Arduino IDE, deberás conocer las siguientes instrucciones de programación.\n\n**Función analogRead()**\n\nLa función analogRead(), utilizada normalmente en la función loop(), sirve para leer un valor un pin de entrada analógico. Los valores están comprendidos entre 0 y 1023. El valor leído puede ser almacenado en una variable o comprobarse dinámicamente en una condición.\n\n```arduino\n\u002F\u002F Lee en \"pin\"\nanalogRead(pin);\n\n\u002F\u002F Ejemplo: Leer el pin analógico 0\nanalogRead(0);\n```\n \n**Función map()**\n\nLa función map() sirve para mapear de forma sencilla convirtiendo un rango de valores en otro rango.\n\n```arduino\n\u002F\u002F Estrapolar un rango de valores en otro\nmap(valor, rango_final(inicio, fin), rango_inicial(inicio, fin));\n\n\u002F\u002F Ejemplo: Estrapolar la salida de un servo tomando el dato de la entrada analógica\nmap(valor, 0, 1023, 0, 255);\n```\n\n### Estructura de un programa en Arduino IDE\n\nTodo programa para Arduino consta de 2 funciones; la función setup() y la función loop(). La función setup() es la primera función que se ejecuta en nuestro programa, ejecutándose sólo una vez, y se utiliza para configurar la comunicación con nuestro equipo, inicializar los pines de nuestra tarjeta de Arduino e inicialización de las variables.\n\n```arduino\n\u002F\u002F La función setup() es la primera función en ejecutarse, una sola vez\nvoid setup(){\n  Instrucción 1\n  Instrucción 2\n  ...\n  Instrucción N\n}\n```\n\nLa función loop() se ejecuta repetidamente después de la función setup(). Dentro de la misma vamos a introducir el programa que queremos ejecutar dentro de la placa de Arduino.\n\n```arduino\n\u002F\u002F La función loop() se ejecuta repetidamente en modo bucle infinito\nvoid loop(){\n  Instrucción 1\n  Instrucción 2\n  ...\n  Instrucción N\n}\n```\n\n### Sintaxis de programación en Arduino IDE\n\nEs importante tener claras las siguientes reglas del lenguaje de programación:\n\n- Toda línea termina en punto y coma \";\" excepto las estructuras de control que se acompañan con llaves \"{}\".\n- Las instrucciones y variables son sensibles a mayúsculas y minúsculas, es decir, debemos respetar el nombre exacto.\n- Las instrucciones que comienzan por el símbolo de doble barra \"\u002F\u002F\" se tomará como comentario para el programa. También se dispone de comentarios de múltiples líneas \u002F* *\u002F.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Práctica 1: Encendido nocturno\n\nEl objetivo de esta práctica es encender un LED utilizando un sensor de luz LDR, es decir, queremos que se encienda el LED cuando cae la noche y oscurece. En caso contrario el LED permanecerá apagado. Para ello utilizaremos un sensor LDR.\n\n![](img\u002Fencendido-nocturno.gif)\n\n### Materiales\n\n- 1 Arduino UNO\n- 1 Protoboard\n- 4 Latiguillos\n- 1 LED\n- 1 Sensor LDR\n- 1 Resistencia de 220Ω (rojo-rojo-marrón)\n- 1 Resistencia de 10KΩ (marrón-negro-naranja)\n\n### Esquema eléctrico\n\nPor un lado se conecta el LED al pin digital 13 de la placa de arduino (utilizando su debida resistencia). Por otro lado, se conecta el sensor LDR al pin analógico 0 de la placa de arduino (utilizando la resistencia en modo Pull-Down).\n\n```\nV = 5V - 2.1V = 2.9V\nI = 20mA\n\nV = I x R ; R = V \u002F I\n\nR = 2.9V \u002F 0.02A = 145Ω -\u003E 220Ω (por aproximación)\n```\n\n![](img\u002Fencendido-nocturno-esquema.jpg)\n\n### Programación en mBlock\n\nAl ejecutar el código se calcula el valor del sensor analógico conectado al pin 0 de la placa de arduino, y en caso de ser superior al valor 150 se activará la salida digital 13 encendiendo el LED. En caso contrario el LED permanecerá apagado.\n\n![](img\u002Fencendido-nocturno-mblock.jpg)\n\n### Programación en Arduino IDE\n\nn primer lugar, se configura el pin digital 13 en modo salida (OUTPUT). Esta configuración se establece en la función setup(), ya que solamente se ejecuta una vez.\n\nPor otro lado, en la función loop() se calcula el valor del sensor analógico conectado al pin de entrada analógica 0 de la placa de arduino, y en caso de ser superior al valor 150 se activará la salida digital 13 encendiendo el LED. En caso contrario el LED permanecerá apagado.\n\n```arduino\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  if (analogRead(0) \u003E 150) {\n    digitalWrite(13, HIGH);\n  }\n  else {\n    digitalWrite(13, LOW);\n  }\n}\n```\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Práctica 2: LED RGB crepuscular\n\nEl objetivo de esta práctica es cambiar los colores de un LED RGB utilizando un sensor de luz LDR, es decir, queremos que se encienda en diferentes colores a medida que oscurece pasando por una gama de colores. Para ello utilizaremos un sensor LDR y un LED RGB de ánodo común.\n\n![](img\u002Frgb-crepuscular.gif)\n\n### Materiales\n\n- 1 Arduino UNO\n- 1 Protoboard\n- 7 Latiguillos\n- 1 LED RGB de ánodo común\n- 1 Sensor LDR\n- 1 Resistencia de 100Ω (marrón-negro-marrón)\n- 2 Resistencia de 220Ω (rojo-rojo-marrón)\n- 1 Resistencia de 10KΩ (marrón-negro-naranja)\n\n### Esquema eléctrico\n\nPor un lado se conecta el LED RGB de ánodo común a los pines 9, 6 y 5 (RGB) de la placa de arduino (utilizando su debida resistencia). Por otro lado, se conecta el sensor LDR al pin de entrada analógica 0 de la placa de arduino (utilizando la resistencia en modo Pull-Down).\n\n![](img\u002Frgb-crepuscular-esquema.jpg)\n\n### Programación en mBlock\n\nAl ejecutar el código se calcula el valor analógico del sensor LDR y mediante condiciones creamos los diferentes casos; si es mayor que 600 se enciende el color rojo (mediante una llamada por eventos), si el valor está entre 300 y 600 se encenderá el color verde, y si es menor que 300 se encenderá el color azul.\n\n![](img\u002Frgb-crepuscular-mblock.jpg)\n\n### Programación en Arduino IDE\n\nEn primer lugar, se configuran los pines analógicos 9, 6 y 5 en modo salida (OUTPUT). Esta configuración se establece en la función setup(), ya que solamente se ejecuta una vez.\n\nPor otro lado, al ejecutar el código se calcula el valor analógico del sensor LDR y mediante condiciones creamos los diferentes casos; si es mayor que 600 se enciende el color rojo, si el valor está entre 300 y 600 se encenderá el color verde, y si es menor que 300 se encenderá el color azul.\n\n```arduino\nvoid setup() {\n  pinMode(9, OUTPUT);\n  pinMode(6, OUTPUT);\n  pinMode(5, OUTPUT);\n\n  analogWrite(9, 0);\n  analogWrite(6, 0);\n  analogWrite(5, 0);\n}\n\nvoid loop() {\n  if (analogRead(0) \u003C 300) {\n    analogWrite(9, 0);\n    analogWrite(6, 255);\n    analogWrite(5, 255);\n  } else if (analogRead(0) \u003C 600) {\n    analogWrite(9, 255);\n    analogWrite(6, 0);\n    analogWrite(5, 255);\n  } else {\n    analogWrite(9, 255);\n    analogWrite(6, 255);\n    analogWrite(5, 0);\n  }\n}\n```\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Práctica 3: Regulador de luz\n\nEl objetivo de esta práctica es regular la intensidad de 3 LEDs utilizando un potenciómetro, es decir, podemos variar la cantidad de luz que emiten los LEDs girando el potenciómetro desde su posición de resistencia mínima a resistencia máxima.\n\n![](img\u002Fregulador.gif)\n\n### Materiales\n\n- 1 Arduino UNO\n- 1 Protoboard\n- 7 Latiguillos\n- 3 LEDs\n- 3 Resistencia de 100Ω (marrón-negro-marrón)\n- 1 Potenciómetro\n\n### Esquema eléctrico\n\nPor un lado se conectan los LEDs a los pines 9, 6 y 5 de la placa de arduino (utilizando su debida resistencia). Por otro lado, se conecta el potenciómetro al pin analógico 0 de la placa de arduino.\n\n![](img\u002Fregulador-esquema.jpg)\n\n### Programación en mBlock\n\nAl ejecutar el código se calcula el valor analógico del potenciómetro y se almacena en una variable. A continuación se interpola el valor obtenido en la entrada analógica a través del potenciómetro (o-1023) con el valor de salida analógica (0-255). Todos los LEDs se encenderán con la misma intensidad fijada en la variable.\n\n![](img\u002Fregulador-mblock.jpg)\n\n### Programación en Arduino IDE\n\nEn primer lugar, se configuran los pines analógicos 9, 6 y 5 en modo salida (OUTPUT). Esta configuración se establece en la función setup(), ya que solamente se ejecuta una vez.\n\nAl ejecutar el código se calcula el valor analógico del potenciómetro y se almacena en una variable. A continuación se interpola utilizando la función map() el valor obtenido en la entrada analógica a través del potenciómetro (o-1023) con el valor de salida analógica (0-255). Todos los LEDs se encenderán con la misma intensidad fijada en la variable.\n\n```arduino\nvoid setup() {\n  pinMode(9, OUTPUT);\n  pinMode(6, OUTPUT);\n  pinMode(5, OUTPUT);\n}\n\nvoid loop() {\n  int valor = analogRead(0);\n  valor = map(valor, 0, 1023, 0, 255);\n\n  analogWrite(9, valor);\n  analogWrite(6, valor);\n  analogWrite(5, valor);\n  delay(15);\n}\n```\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Práctica 4: Servomotor con potenciómetro\n\nEl objetivo de esta práctica es regular el ángulo de un servomotor con ayuda de un potenciómetro, es decir, según se gira el potenciómetro desde su posición de resistencia mínima a resistencia máxima, el servomotor girará entre sus valores de 0º y 180º.\n\n![](img\u002Fservomotor.gif)\n\n### Materiales\n\n- 1 Arduino UNO\n- 1 Protoboard\n- 6 Latiguillos\n- 1 Servomotor\n- 1 Potenciómetro\n\n### Esquema eléctrico\n\nConectamos el cable rojo (positivo del servomotor) al pin 5V de la placa de arduino, el cable negro (negativo del servomotor) al pin GND de la placa de arduino y el color amarillo al pin analógico PWM 9 de la placa de arduino. Por otro lado, se conecta el potenciómetro al pin 0 de la entrada analógica de arduino.\n\n![](img\u002Fservomotor-esquema.jpg)\n\n### Programación en mBlock\n\nAl ejecutar el código se calcula el valor analógico del potenciómetro y se almacena en una variable. A continuación se interpola el valor obtenido en la entrada analógica a través del potenciómetro (o-1023) con el valor de salida analógica (0-180) correspondiente a los valores admitidos por el servomotor.\n\n![](img\u002Fservomotor-mblock.jpg)\n\n### Programación en Arduino IDE\n\nEn primer lugar, se importa la librería a utilizar \u003CServo.h\u003E y se inicializa el objeto llamado servomotor. Además se configura el pin analógico PWM 9 a utilizar por el servomotor. Esta configuración se establece en la función setup(), ya que solamente se ejecuta una vez.\n\nPor otro lado, al ejecutar el código se calcula el valor analógico del potenciómetro y se almacena en una variable. A continuación se interpola el valor obtenido en la entrada analógica a través del potenciómetro (o-1023) con el valor de salida analógica (0-180) correspondiente a los valores admitidos por el servomotor.\n\n```arduino\n#include \u003CServo.h\u003E \n\nServo servomotor;\n\nvoid setup() {\n  servomotor.attach(9);\n}\n\nvoid loop() {\n  int angulo = analogRead(0);\n  angulo = map(angulo, 0, 1023, 0, 180);\n\n  servomotor.write(angulo);\n  delay(15);\n}\n```\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fentradas-analogicas-con-arduino\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:m}]}],fetch:[],mutations:[]}}("Entradas analógicas con Arduino",{},Array(1),"Electrónica","Programación","Arduino","Arduino IDE","Programación y electrónica de sensores básicos utilizando entradas analógicas con Arduino.","Secundaria","Bachillerato","Entradas","Analógicas","","mBlock")));