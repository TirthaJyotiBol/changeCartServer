import { ProductsRepo } from "../repositories/products.repo.js"

export class ProcuctController{

    constructor(){
        this.prod_repo = new ProductsRepo();
    }

    getAllProducts = async (req,res)=>{
        let data =  await this.prod_repo.fetchAllProducts();
        if(data.status==true){
            return res.status(200).json(data)
        }
        res.status(500).json({
            status:true,
            data:[],
            error:'server error'
        })
    }

    getProductById = async(req,res)=>{
        let id = req.params.id;
        let data =  await this.prod_repo.fetchCurrProduct(id);

        if(data.status==true){
            return res.status(200).json(data)
        }
        res.status(500).json({
            status:true,
            data:[],
            error:'server error'
        })
    }

    getRecommendedProductById  = async (req,res)=>{
        let id = req.params.id;
        let type = req.params.type;
        let data =  await this.prod_repo.getRecommendedProductById(id,type);

        if(data.status==true){
            return res.status(200).json(data)
        }
        res.status(500).json({
            status:true,
            data:[],
            error:'server error'
        })
    }
}