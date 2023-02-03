
/* 
const fulImg=document.getElementById("fulImg")


function closeImg(){
    ful.style.display= "none"
}
 */
const ful=document.getElementById("fulImgBox")
const ful2=document.getElementById("fulImgBox2")
const ful3=document.getElementById("fulImgBox3")

const imagen1=document.querySelector("#modal-img")
const imagen2=document.querySelector("#modal2-img")
const imagen3=document.querySelector("#modal3-img")

const modalImg=document.querySelector("#fulImgBox")



imagen1.addEventListener("click",(e)=>{
    ful.style.display="flex"
})
imagen2.addEventListener("click",(e)=>{
    ful2.style.display="flex"
})
imagen3.addEventListener("click",(e)=>{
    ful3.style.display="flex"
})


ful.addEventListener("click",(e)=>{
ful.style.display="none"
})

ful2.addEventListener("click",(e)=>{
    ful2.style.display="none"
    })

ful3.addEventListener("click",(e)=>{
        ful3.style.display="none"
        })
        
