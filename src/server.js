import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "./database/mongo.connection.js";
import productRouter from "./routes/products.routes.js";
import { ProductSeeder } from "./seeders/product.seeder.js";

dotenv.config();
let app = express();

let allowedOrigins = process.env.client_url;
let seeder = new ProductSeeder();

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/products',productRouter);


app.get('/',(req,res)=>{
    res.json({
        'message':'hanlksdanl'
    })
});


// app.get('/insert',(req,res)=>{
//     seeder.insertSeeder();
//     res.send('welcomd tw');
// })



app.listen(process.env.port||8100,async (err)=>{
    if(err){
        console.log(err);
        return;
    }
    await connect();
    console.log(`listening to port ${process.env.port}`);
})