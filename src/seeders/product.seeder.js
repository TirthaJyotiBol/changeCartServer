import { data } from "./product.seeder.data.js";
import { Product } from "../models/products.model.js";

export class ProductSeeder{
    async insertSeeder(){
        try{
            await Product.insertMany(data)
            console.log('data inserted');
        }
        catch(e){
            console.log(e);
        }
    }
}