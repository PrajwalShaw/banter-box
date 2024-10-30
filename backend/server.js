import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connectToMongoDB } from "./db/dbConnection.js";
import cookieParser from "cookie-parser";
import { app,server } from "./socket/socket.js";
import path from "path";

//const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();//this basically gives path to the root folder

dotenv.config();

app.use(express.json());//allow us to extract these fields from req.body....to parse the data coming from req.body
app.use(cookieParser());//call the middleware to access the cookies

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
// app.get("/",(req,res)=>{//route
//     res.send("Hello World!!");
// });

app.use(express.static(path.join(__dirname,"/frontend/dist")));//this is a static middleware that express gives us which is basically used to serve static files
//like html,css and JS...,image files,sound files which we basicaaly have in our frontend file
//becoz of this I am able to connect the frontend with the server

//if we go to terminal in the frontend directory and write npm run build....vite will create a frontend application
//for us and put everything(all files and folders)  in dist and when we deploy our code we typically build and bundle 
//our frontend code for optimizations...and we use the static middleware so that this frontend will be served as a static
//file

//whichever route I accept from these(the routes defined above)...plz render the index.html inside dist folder which is inside 
//the frontend folder. The index.html contains the enitire javascript file which will be rendered
app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})


server.listen(PORT,()=>{
        connectToMongoDB();
        console.log(`Server running on port ${PORT}`);
});    
