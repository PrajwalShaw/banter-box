import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn : '15d'
    })

    res.cookie("jwt",token,{
        maxAge : 15 * 24 * 60 * 60 * 1000,//mili-seconds
        httpOnly : true,//to prevent XSS attacks cross-site scripting attacks
        sameSite : "strict"//to prevent XSS forgery attacks
    });
};

export default generateTokenAndSetCookie;