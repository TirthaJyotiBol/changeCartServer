import mongoose, { model } from "mongoose";

let productSchema = mongoose.Schema({
    name: {
        type: Map,
        of: String,
        required: true
    },
    price: {
        type: Map,
        of: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    description: {
        type: Map,
        of: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    type:{
        type:String,
        required:true
    }
});

export let Product = model("Product", productSchema);
