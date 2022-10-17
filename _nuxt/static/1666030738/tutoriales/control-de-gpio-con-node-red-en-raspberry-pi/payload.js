__NUXT_JSONP__("/tutoriales/control-de-gpio-con-node-red-en-raspberry-pi", (function(a,b,c,d,e,f,g,h,i,j,k,l){c[0]="migueabellan";l.cdate="2019-04-01 00:00:00";l.mdate="2019-10-26 14:05:12";return {data:[{tutorial:{alias:"control-de-gpio-con-node-red-en-raspberry-pi",title:a,description:b,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d,e],hardware:[f],software:[g],level:[h,i],others:[j]},extra:{level:"Medio",duration:"30 minutos",videos:k},date:l},title:a,description:b,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fcontrol-de-gpio-con-node-red-en-raspberry-pi\u002Fimg\u002Fpreview.jpg",date:l,tags:[d,e,f,g,h,i,j],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fcontrol-de-gpio-con-node-red-en-raspberry-pi\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este tutorial vamos a explicar cómo utilizar los pines GPIO a través de Node-RED desde Raspberry Pi de una forma muy sencilla para crear aplicaciones IoT sin saber programar en lenguaje de programación textual.\n\n### Antes de empezar\n\nVas a necesitar los siguientes componentes:\n\n- Raspberry Pi con Raspbian\n\nEs recomendable acceder a los siguientes tutoriales:\n\n- GPIO en Raspberry Pi\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Pines GPIO en Node-RED\n\n[Node-RED](https:\u002F\u002Fnodered.org\u002F) es un motor de flujos con enfoque IoT que permite definir gráficamente flujos de servicios a través de protocolos estándares como REST, MQTT, Websocket o AMQP. Se trata de una herramienta visual muy ligera programada en NodeJS y que puede ejecutarse desde en dispositivos ligeros como la Raspberry Pi.\n\n\u003E Para más información sobre Node-RED accede al tutorial Raspberry Pi - Node-RED.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Requisitos\n\nPara este tutorial se van a necesitar los siguientes materiales:\n\n- 1 Raspberry Pi\n- 1 Protoboard\n- 1 Diodo LED\n- 1 Resistencia de 330 Ohm\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Node-RED en Raspberry Pi\n\nEn primer lugar abrimos la herramienta Node-RED accediendo al menú `Programming \u003E Node-RED` y se abrirá en segundo plano una terminal encargada de arrancar la herramienta. Una vez abierta accedemos mediante nuestro navegador predeterminado a la dirección `http:\u002F\u002F127.0.0.1:1880` o a través de la red a la IP de nuestra Raspberry Pi seguido del mismo puerto, en nuestro caso `http:\u002F\u002F192.168.0.138:1880`.\n\n```\nURL: http:\u002F\u002F127.0.0.1:1880\n```\n\n![](img\u002Fnode-red.jpg \"Node-RED\")\n\nLos programas en Node-RED se llaman Flow (flujos). y se puede crear tantos flujos como queramos y todos pueden ejecutarse al mismo tiempo.\n\nEn el lado izquierdo tenemos todos los nodos disponibles ordenador por categorías (input, output, functions, Raspberry Pi, etc.). Los nodos se conectarán entre ellos mediante líneas creando un flujo de trabajo.\n\nEn el lado derecho aparecerán los parámetros de configuración de cada nodo seleccionado.\n\nEn el centro es donde podemos arrastrar los nodos para crear el flujo de trabajo.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Encendido y apagado de un LED\n\nVamos a realizar el encendido y apagado de un LED conectado al `Pin 11 - GPIO 17` de nuestra Raspberry Pi.\n\n![](img\u002Fled-fritzing.jpg)\n\nAccediendo al grupo de nodos de Raspberry Pi, arrastramos al área de trabajo el nodo `rpi gpio`. Hacemos docle clic sobre el nodo y seleccionamos el pin al cual hemos conectado el LED, en este caso, el `Pin 11 - GPIO 17`.\n\n![](img\u002Fnode-gpio.jpg)\n\nA continuación añadimos 2 nodos `inject` de la categoría de entrada. Uno de estos nodos tendrá establecido el valor `true` y el otro el valor `false`.\n\n![](img\u002Fnode-inject.jpg)\n\nPor último solamente nos queda unir los conectores y cargar el código haciendo clic en el botón `Deploy` situado en la parte superior derecha de Node-RED. A continuación, podemos hacer clic sobre el icono `true` o `false` y veremos como se enciende y apaga nuestro LED a través de los pines GPIO de nuestra Raspberry Pi.\n\n![](img\u002Fled-node.jpg)\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Ejercicios propuestos\n\n1.- Programa el encendido y apagado de múltiples diodos LEDs.\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fcontrol-de-gpio-con-node-red-en-raspberry-pi\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:k}]}],fetch:[],mutations:[]}}("Pines GPIO a través de Node-RED","Programando pines GPIO a través de Node-RED en Raspberry Pi..",Array(1),"Electrónica","Programación","Raspberry Pi","Node-RED","Secundaria","Bachillerato","Raspbian","",{})));