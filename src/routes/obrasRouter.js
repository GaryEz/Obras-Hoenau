const express=require("express")
const router=express.Router()
const obrasController=require("../controllers/obrasController")

router.get("/",obrasController.projects)
router.get("/detalle/:id",obrasController.obraDetail)


module.exports=router