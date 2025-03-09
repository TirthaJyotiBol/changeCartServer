import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export async function connect(){
    try{
        let mongo_uri = process.env.mongo_url;
        mongoose.connect(mongo_uri);
        console.log('connected to mongo db');
    }
    catch(err){
        console.log(err);
    }
}