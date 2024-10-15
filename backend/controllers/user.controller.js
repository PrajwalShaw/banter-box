import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
    try{
       const loggedInUserId = req.user._id;

       const filteredUsers = await User.find({_id : {$ne: loggedInUserId}}).select("-password");//woh sab users ko display karo except the one 
       //jo loggedIn hain...also we don't want to see their passwords

       res.status(200).json(filteredUsers);
    }
    catch(error)
    {
        console.log("Error in getUsersForSidebar",error.message);
        res.status(500).json({error: "Internal server error"});
    }
}