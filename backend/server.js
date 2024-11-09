import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());//to get the result from the postman

app.use("/api/products", productRoutes); 

//postman desktop app
// console.log(process.env.MONGO_URI);1


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});


//Ur1GIANYINuwK2Uh