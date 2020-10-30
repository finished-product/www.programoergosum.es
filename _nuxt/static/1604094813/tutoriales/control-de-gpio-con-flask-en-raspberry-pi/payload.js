__NUXT_JSONP__("/tutoriales/control-de-gpio-con-flask-en-raspberry-pi", (function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.cdate="2019-04-01 00:00:00";b.mdate="2019-10-26 14:05:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"control-de-gpio-con-flask-en-raspberry-pi",title:a,description:g,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d,e],hardware:[f],software:[m],level:[h,i],others:[j,k]},extra:{level:"Avanzado",duration:"60 minutos",videos:l},date:b},title:a,description:g,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fcontrol-de-gpio-con-flask-en-raspberry-pi\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,f,m,h,i,j,k],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fcontrol-de-gpio-con-flask-en-raspberry-pi\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este tutorial vamos a explicar cómo montar un servidor web para Python con Flask en nuestra Raspberry Pi y utilizar los pines GPIO para interactuar con ellos.\n\n### Antes de empezar\n\nPara este tutorial vas a necesitar los siguientes componentes:\n\n- Raspberry Pi con Raspbian\n\nEs recomendable acceder a los siguientes tutoriales:\n\n- Servidor Web en Flask\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Servidor Web con Flask\n\nFlask es un microframework creado para facilitar el desarrollo de aplicaciones web en Python. Es utilizado normalmente para construir servicios web como APIs REST o aplicaciones de contenido estático.\n\nEn este caso vamos a utilizar los pines GPIO.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Encendido y apagado de un LED\n\nVamos a realizar el encendido y apagado de un LED conectado al `Pin 11 - GPIO 17` de nuestra Raspberry Pi.\n\n![](img\u002Fled-fritzing.jpg \"Esquema fritzing\")\n\nEn la programación, añadimos la librería para controlar los pines GPIO así como el modo de pin. A continuación se crean dos entradas de URL o endpoints para encender y apagar dicho LED. Además mostramos un mensaje por la pantalla de la web.\n\n```python\nfrom flask import *\napp = Flask(__name__)\n\nimport RPi.GPIO as GPIO\nGPIO.setwarnings(False)\nGPIO.setmode(GPIO.BCM)\nGPIO.setup(17, GPIO.OUT)\nGPIO.output(17, GPIO.LOW)\n\n@app.route('\u002Fon')\ndef on():\n   GPIO.output(17, GPIO.HIGH)\n   return 'Led Encendido'\n\n@app.route('\u002Foff')\ndef off():\n   GPIO.output(17, GPIO.LOW)\n   return 'Led Apagado'\n\nif __name__ == '__main__':\n   app.run(host='0.0.0.0', port=8000, debug=True)\n```\n\nPor último jecuta el código y accede mediante el navegador a ambas direcciones para encender y apagar el LED. Observa como el LED se enciende o apaga en cada caso.\n\n```\nURL: localhost:8000\u002Fon\nURL: localhost:8000\u002Foff\n```\n\n![](img\u002Fon-off.jpg \"On Off\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Controlar varios LEDs\n\nPara controlar varios LED podemos crear varias funciones y cada una asignada a un pin GPIO de nuestra Raspberry Pi. Sin embargo, imagina que queremos controlar 5 LEDs. Podemos pensar que tenemos que crear 10 funciones (on y off para cada uno de los LED). La mejor solución pasa por pasar parámetros a la URL indicando el pin GPIO que queremos utilizar y el estado del LED que queremos asignar. Por ejemplo `\u002F17\u002F0`, `\u002F18\u002F1`, etc.\n\nEsto lo conseguimos añadiendo parámetros a la URL `@app.route('\u002F\u003Cled\u003E\u002F\u003Caction\u003E')` y a la función `def led(led, action):`.\n\n```python\nfrom flask import *\napp = Flask(__name__)\n\nimport RPi.GPIO as GPIO\nGPIO.setwarnings(False)\nGPIO.setmode(GPIO.BCM)\nGPIO.setup(17, GPIO.OUT)\nGPIO.output(17, GPIO.LOW)\nGPIO.setup(18, GPIO.OUT)\nGPIO.output(18, GPIO.LOW)\n\n@app.route('\u002F\u003Cled\u003E\u002F\u003Caction\u003E')\ndef led(led, action):\n   GPIO.output(int(led), int(action))\n   return 'Led: '+str(led)+' Estado: '+str(action)\n\nif __name__ == '__main__':\n   app.run(host='0.0.0.0', port=8000, debug=True)\n```\n\nAhora solamente nos queda probar que todos los enlaces funcionan correctamente accediendo a las siguientes URLs.\n\n```\nURL: localhost:8000\u002F17\u002F0\nURL: localhost:8000\u002F17\u002F1\nURL: localhost:8000\u002F18\u002F0\nURL: localhost:8000\u002F18\u002F1\n```\n\n![](img\u002Fvarios-leds.jpg \"Varios LEDs\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Añadiendo un template\n\nPor último, podemos crear un template personalizado con enlaces a las URLs para no tener que escribirlas en el navegador.\n\n```\n├ web\u002F\n├── templates\n│   └── led.html\n└── index.py\n```\n\n```python\nfrom flask import *\napp = Flask(__name__)\n\nimport RPi.GPIO as GPIO\nGPIO.setwarnings(False)\nGPIO.setmode(GPIO.BCM)\n\n# leds\namarillo = 17\nverde = 18\nGPIO.setup(amarillo, GPIO.OUT)\nGPIO.output(amarillo, GPIO.LOW)\nGPIO.setup(verde, GPIO.OUT)\nGPIO.output(verde, GPIO.LOW)\n\n@app.route('\u002F')\ndef home():\n   templateData = {\n      'amarillo' : 0,\n      'verde' : 0,\n   }\n   return render_template('led.html', **templateData)\n\n@app.route('\u002F\u003Cled\u003E\u002F\u003Caction\u003E')\ndef led(led, action):\n   GPIO.output(int(led), int(action))\n   templateData = {\n      'amarillo' : GPIO.input(amarillo),\n      'verde' : GPIO.input(verde),\n   }\n   return render_template('led.html', **templateData)\n\nif __name__ == '__main__':\n   app.run(host='0.0.0.0', port=8000, debug=True)\n```\n\n```html\n\u003Chtml\u003E\n\u003Chead\u003E\n   \u003Cstyle\u003E\n      .btn { \n         display:block;\n         margin: 20px;\n         padding: 20px 40px;\n         text-align: center;\n         border: 1px solid #000;\n         background: #ccc;\n         text-decoration: none;\n         font-size: 50px;\n         line-height: 3;\n         color: #000;\n      }\n      .btn.amarillo {\n         background: #ff0;\n      }\n      .btn.verde {\n         background: #0f0;\n      }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003E\n   {% if amarillo == 0 %}\n      \u003Ca class=\"btn\" href=\"\u002F17\u002F1\"\u003EAmarillo\u003C\u002Fa\u003E\n   {% else %}\n      \u003Ca class=\"btn amarillo\" href=\"\u002F17\u002F0\"\u003EAmarillo\u003C\u002Fa\u003E\n   {% endif %}\n\n   {% if verde == 0 %}\n      \u003Ca class=\"btn\" href=\"\u002F18\u002F1\"\u003EVerde\u003C\u002Fa\u003E\n   {% else %}\n      \u003Ca class=\"btn verde\" href=\"\u002F18\u002F0\"\u003EVerde\u003C\u002Fa\u003E\n   {% endif %}\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n```\n\n![](img\u002Foptimizacion.jpg \"Optimización\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Ejercicios propuestos\n\n1.- Enciende varios LEDs utilizando diferentes endpoints en el servidor web.\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fcontrol-de-gpio-con-flask-en-raspberry-pi\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:l}]}],fetch:[],mutations:[]}}("Control de GPIO con Flask en Python",{},Array(1),"Electrónica","Programación","Raspberry Pi","Controlar los pines GPIO a través de un servidor web en Python.","Secundaria","Bachillerato","Raspbian","GPIO","","Python")));