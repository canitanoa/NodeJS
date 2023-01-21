Inicializar el proyecto
$ npm init -y

Instalamos las dependencias
$ npm install -g install-local

Dentro del directorio que se crea "node_modules" se agregan las dependencias que se descargaron de las intalaciones de arriba.

Instalamos express:
$ npm i express

Instalamos nodemon (para que el server se autoinicie con los cambios)
$ npm i nodemon

Para limpia la cache:
$ npm cache clean --force

Para ejecutar la app:
$ nodemon app.js

En el package.json podemos crear un script para invocar al comando nodemon app.js de manera que podamos desde la seccion NPM SCRIPTS de VSCode correr o debuggear la app.

