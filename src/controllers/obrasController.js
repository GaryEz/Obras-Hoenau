const projects=[
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
    image:["obra-2/edi-2.jpg"],
    destacado:true,
    },
    {
    id:3,
    nombre:"Obra 3",
    datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
    descripcion:"Descripcion de la obra N°3 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    estado:"progreso",
    image:["obra-3/edi-3.jpg"],
    destacado:true,
    },
    {
    id:4,
    nombre:"Obra 4",
    datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
    descripcion:"Descripcion de la obra N°4 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    estado:"progreso",
    image:[],
    destacado:false,
    },
    {
    id:5,
    nombre:"Obra 5",
    datos:"Datos de la obra-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum! ",
    descripcion:"Descripcion de la obra N°5 -Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    estado:"progreso",
    image:[],
    destacado:false,
    }
]

let title="Hoenau | Obras"
module.exports={
    projects:(req,res)=>{
        res.render("obras.ejs",{
           title,projects 
        })
    },
    obraDetail:(req,res)=>{
        let title="Hoenau | Obra"
        const id_obra=+req.params.id
        const obra=[]
        const imagesH=[]
        
        
        projects.forEach(project=>{

            if(project.id==id_obra){
                obra.push(project)
            }
        })
        res.render("obra.ejs",{
            obra,title,imagesH
        })
    }
}



