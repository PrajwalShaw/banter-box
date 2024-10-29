//express ka jo server hain na...basically uss ke upar ek socket ka server bana raha hu 
import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET","POST"]
    }
});

const userSocketMap = {};// {userId : socketId}

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}



io.on("connection", (socket) => {//this socket here is a user which has some properties like id and all
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

     //io.emit() is used to send events to all the connected clients
     io.emit("getOnlineUsers",Object.keys(userSocketMap));//so when a user connects it will immediately send who is online/offline and we can grab it with the event thing


    //socket.on() is used to listen to the events. Can be used on both client and server side
    socket.on("disconnect" , () => {
       console.log("user disconnected", socket.id);
        delete userSocketMap[userId];//delete it from the map
        io.emit("getOnlineUsers",Object.keys(userSocketMap));//inform all the clients that that particular user is not online now
    });
});

export {app,io,server};

