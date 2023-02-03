const nodemailer=require("nodemailer")
require('dotenv').config();
const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth:{
            user:"solutions.lardev@gmail.com",
            pass:"qngkptaniqmsqbrf"
        }
})

module.exports=transporter