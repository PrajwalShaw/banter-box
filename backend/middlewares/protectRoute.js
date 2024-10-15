import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token)
        {
            return res.status(401).json({error : "Unauthorized- No token provided"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);

        if(!decoded)
        {
            res.status(401).json({error : "Unauthorized- Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user)
        {
            res.status(404).json({error: "User not found"});
        }

        req.user = user;//the information about the user present in the dB

        next();
    }
    catch(error)
    {

        res.status(500).json({error : "Internal server error"});
    }
};


export default protectRoute;