import react, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sound/notification sound.mp3";

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversation();

    //listening to the messages from the useEffect
    useEffect(()=>{
        socket?.on("newMessage",(newMessage) => {
            newMessage.shouldShake = true;
             const sound = new Audio(notificationSound);
             sound.play()
            setMessages([...messages,newMessage])
        });

        return () => socket?.off("newMessage");//if we don't write this line...then what will happen...?
        //there will be a lot of events which will be rejected from this socket....so when u will send a message u
        //will hear the nofication sound multiple times....that is why we do a clean up...so that we are not listening 
        //for this event more than once
    },[socket,setMessages,messages]);
};

export default useListenMessages