import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connectToMongoDB } from "./db/dbConnection.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());//allow us to extract these fields from req.body....to parse the data coming from req.body
app.use(cookieParser());//call the middleware to access the cookies

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
// app.get("/",(req,res)=>{//route
//     res.send("Hello World!!");
// });

app.listen(PORT,()=>{
        connectToMongoDB();
        console.log(`Server running on port ${PORT}`);
});    
