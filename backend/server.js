import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"

dotenv.config();

const app = express();

app.use(express.json());//to get the result from the postman

app.post("/api/products", async (req,res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product( product)

    try { 
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    }
    catch (error) {
        console.error("Error in create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error " });
    }       
});

//postman desktop app
// console.log(process.env.MONGO_URI);1


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});


//Ur1GIANYINuwK2Uh