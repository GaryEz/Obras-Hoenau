const express=require("express")
const app=express()
const path=require("path")

const indexRouter=require("./src/routes/indexRouter")
const obrasRouter=require("./src/routes/obrasRouter")
require('dotenv').config();
const ports=process.env.PORT || 3000

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use("/",indexRouter)
app.use("/obras",obrasRouter)


app.listen(ports,()=>{
    console.log(`servidor levantado en el puerto ${ports}, http://localhost:${ports}`);
})
