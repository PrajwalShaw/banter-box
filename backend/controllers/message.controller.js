import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId,io } from "../socket/socket.js";

export const sendMessage = async (req,res)=>{
    try{
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;//it is coming from protectRoute line no.26 

        let conversation = await Conversation.findOne({
            participants : { $all : [senderId,receiverId]},
        })

        if(!conversation)
        {
            conversation = await Conversation.create({
                participants :[senderId,receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        
        //if the new message is a success
        if(newMessage)
        {
            conversation.messages.push(newMessage._id);
        }

          //save them to our dB
        //this will not run in parallel
        // await conversation.save();
        // await newMessage.save();

        //this will run in parallel
        //kind of an optimization
        await Promise.all([conversation.save(),newMessage.save()]);
  
         //SOCKET IO functionality will go here
          const receiverSocketId = getReceiverSocketId(receiverId);
          if(receiverSocketId)
          {
             io.to(receiverSocketId).emit("newMessage",newMessage);//this will send event to a specific client
          }




        res.status(200).json({newMessage});
    }
    catch(error)
    {
          console.log("Error in sendMessage controller", error.message);
          res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async(req,res) =>{
    try{
         const {id : userToChatId} = req.params;
         const senderId = req.user._id;

         //This checks the database for a conversation where both senderId and userToChatId are participants.
         //This includes the actual messages in the conversation, not just references to them.
         const conversation = await Conversation.findOne({
            participants: {$all : [senderId,userToChatId]},
         }).populate("messages"); //Not references but actual messages between those two people

         if(!conversation)
            return res.status(200).json([]);//agar dono ke bich main koi conversation nahi hua toh empty array

         const messages = conversation.messages;//jitna bhi bhi messages hain un dono ke bich main woh isme de do

         res.status(200).json(messages);//display all the messages between them
    } 
    catch(error)
    {
       console.log("Error in getmessage controller",error.message);
       res.status(500).json({error: "Internal server error"});
    }
}