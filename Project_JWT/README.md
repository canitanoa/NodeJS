Inicializar el proyecto
$ npm init -y

Dentro del directorio que se crea "node_modules" se agregan las dependencias que se descargaron de las intalaciones de arriba.

Instalamos express:
$ npm i -g express jsonwebtoken

Instalamos nodemon (para que el server se autoinicie con los cambios)
$ npm i -g nodemon

Para limpia la cache:
$ npm cache clean --force

Para ejecutar la app:
$ nodemon app.js

En el package.json podemos crear un script para invocar al comando nodemon app.js de manera que podamos desde la seccion NPM SCRIPTS de VSCode correr o debuggear la app.

