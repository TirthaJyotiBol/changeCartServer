import { Product } from "../models/products.model.js";

export class ProductsRepo{
    fetchAllProducts=async ()=>{
        try{
            let products = await Product.find();

            return {
                status:true,
                data: products,
                error:null
            }
        }
        catch(err){
            console.log(err);
            return {
                status:false,
                data:[],
                error:'Server error'
            }
        }
    }


    fetchCurrProduct=async (id)=>{
        try{
            let product = await Product.findById(id);
            return {
                status:true,
                data: product,
                error:null
            }
        }
        catch(err){
            console.log(err);
            return {
                status:false,
                data:[],
                error:'Server error'
            }
        }
    }

    getRecommendedProductById = async (id, type) => {
        try {
            let products = await Product.find({
                _id: { $ne: id }, 
                type: type
            });
    
            return {
                status: true,
                data: products,
                error: null
            };
        } catch (error) {
            console.log(error);
            return {
                status: false,
                data: null,
                error: error.message
            };
        }
    };
    

}