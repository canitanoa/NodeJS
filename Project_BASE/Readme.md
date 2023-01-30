# Proyecto Nodejs + LDAP

```cmd

$ cd Project_BASE
$ npm init -y
$ npm install i express morgan ldapjs dotenv node-ssh --save
    - express: es el modulo principal del servidor
    - morgan: middleware para log de peticiones http
    - ldapjs: para conectividad con LDAP
    - dotenv: es para manejar variables de entorno
    - node-ssh: para enviar paquetes seguros por red
$ npm i install nodemon -D
    - nodemon: es para que el server se reinicie automaticamente

Para ejecutar el server: 
    Add in package.json -> "startapp": "nodemon src/server.js",
    $ npm run startapp
    o 
    $ nodemon src/server.js 
```
