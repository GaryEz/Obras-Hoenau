
const nodemailerTrasnporter=require("../controllers/functions")

const proyectos_destacados=[
    {
        id:1,
        nombre:"Obra 1",
        datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
        descripcion:"Descripcion de la obra N°1 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        estado:"finalizado",
        image:["obra-1/edi-1.jpg","perry.png","logo.png","logo2.png"],
        destacado:true,
        },
        {
        id:2,
        nombre:"Obra 2",
        datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
        descripcion:"Descripcion de la obra N°2 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        estado:"finalizado",
        image:["obra-2/edi-2.jpg","perry.png","logo.png","logo2.png"],
        destacado:true,
        },
        {
        id:3,
        nombre:"Obra 3",
        datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
        descripcion:"Descripcion de la obra N°3 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        estado:"progreso",
        image:["obra-3/edi-3.jpg","perry.png","logo.png","logo2.png"],
        destacado:true,
        }
]

module.exports={
    index:(req,res)=>{
        res.render("home.ejs",{
        proyectos_destacados
        })
    },
    about:(req,res)=>{
        res.render("nosotros.ejs")
    },
    mail:(req,res)=>{

       let {name,email,phone,comments}=req.body
        const mensaje={
            from:`${email}`,
            to:`Hoeanau <solutions.lardev@gmail.com>`,
            subject:`"HOLa" soy ${name}`,
            text:`"Mi num es "${phone} y mi comentario es: ${comments}`
        }
  nodemailerTrasnporter.sendMail(mensaje,(err,data)=>{
    console.log('email enviado')
            res.redirect('/')
  })

}

}
