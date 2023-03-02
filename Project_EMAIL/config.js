module.exports = {
    app:{
        port: process.env.DEV_APP_PORT || 3001,
        appName: process.env.DEV_APP_NAME || 'EmailSender',
        env: process.env.DEV_APP_PORT || 'development',
    },
    mail:{
        MAIL_SERVICE:"smtp.ethereal.email",
        //Obtener los datos de: https://ethereal.email/create 
        MAIL_USER:"wade.smith@ethereal.email",
        MAIL_PASS:"76zcg4CUP6pBvf6SCV"
    }
}

