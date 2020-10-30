__NUXT_JSONP__("/tutoriales/arranque-automatico-en-raspbian", (function(a,b,c,d,e,f,g,h,i,j){c[0]="migueabellan";j.cdate="2019-04-01 00:00:00";j.mdate="2019-10-26 14:05:12";return {data:[{tutorial:{alias:"arranque-automatico-en-raspbian",title:a,description:b,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[e],software:[],level:[f,g],others:[h]},extra:{level:"Avanzado",duration:"15 minutos",videos:i},date:j},title:a,description:b,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Farranque-automatico-en-raspbian\u002Fimg\u002Fpreview.jpg",date:j,tags:[d,e,f,g,h],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Farranque-automatico-en-raspbian\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este tutorial vamos a explicar cómo crear un arranque automático de un programa en Raspberry Pi con Raspbian.\n\n### Antes de empezar\n\nVas a necesitar los siguientes componentes:\n\n- Raspberry Pi con Raspbian\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## RC.LOCAL\n\nPara que un comando o programa se ejecute cuando se inicia tu Raspberry Pi puedes agregar comandos al archivo `\u002Fetc\u002Frc.local`. Esto es especialmente útil si quieres hacer que ejecute un programa sin configuración o un inicio manual.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Arranque automático\n\nEn ocasiones nos gustaría ejecutar un programa al iniciar o encender la Raspberry Pi. En este caso, tenemos que añadir la ejecución del mismo en el fichero `\u002Fetc\u002Frc.local` encargado para tal fin.\n\nEn primer lugar debemos darle permisos de ejecución a nuestro fichero principal.\n\n```sh\npi@raspberrypi:~ $ sudo chmod +x fichero.py\n```\n\nPara probar que nuestro proyecto funciona, podemos ejecutar el comando de ejecución de python3. Para pararlo, utiliza las teclas `ctrl + c`.\n\n```sh\npi@raspberrypi:~ $ python3 fichero.py\n```\n\nUna vez hemos comprobado que funciona correctamente, nos falta añadir la anterior instrucción al fichero `rc.local` justo antes de la última línea 'exit 0'.\n\n```sh\npi@raspberrypi:~ $ sudo leafpad \u002Fetc\u002Frc.local\n```\n\nObserva en este caso como se añade la ruta absoluta del fichero a ejecutar justo antes de la instrucción `exit 0`.\n\n```\n...\n\npython3 \u002Fhome\u002Fpi\u002Ffichero.py\n\nexit 0\n```\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Ejercicios propuestos\n\n1.- Crea un sencillo proyecto web en Python con Flask y agrégalo al fichero `rc.local` para que se ejecute al arrancar la Raspberry Pi.\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Farranque-automatico-en-raspbian\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:i}]}],fetch:[],mutations:[]}}("Arranque automático en Raspbian","Ejecutar programas de forma automática al arrancar Raspbian.",Array(1),"Informática","Raspberry Pi","Secundaria","Bachillerato","Raspbian","",{})));