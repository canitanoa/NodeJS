Create project: 
$ mkdir Project_EMAIL
$ cd Project_EMAIL
$ npm init -y

Install packages:
$ npm i nodemailer

Create server:
$ touch index.js


Para configurar el servidor de emial: 
Se utiliza Ethereal que es un servicio SMTP falso, antitransaccional completamente gratuito donde los mensajes nunca se entregan.

```txt
Para obtener los parametros de conexión: 
1- Crear una cuenta en https://ethereal.email/create
2- Copiar los datos Username y Password reemplazar en las variables del archivo config.js
3- Abrir la casilla de inbox: https://ethereal.email/messages
```

Ejecutar el server:
$ cd cd .\Project_EMAIL\
$ node .\index.js 

Ejecutar el POSTMAN:
```txt
    POST
        http://localhost:3001/send-email

        {
            "from": "lala@gmail.com",
            "to": "pepe@gmail.com",
            "subject": "Test email",
            "message": "This is a test email sent from my Node.js API!"
        }
```
