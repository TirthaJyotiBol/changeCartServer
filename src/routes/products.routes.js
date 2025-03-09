import express from "express";
import { ProcuctController } from "../controller/products.controller.js";

let productRouter = express.Router();
let prodCont = new ProcuctController();

productRouter.get('/',(req,res)=>{
    prodCont.getAllProducts(req,res);
});

productRouter.get('/:id',(req,res)=>{
    prodCont.getProductById(req,res);
})

productRouter.get('/recommended/:id/:type',(req,res)=>{
    prodCont.getRecommendedProductById(req,res);
})


export default productRouter;