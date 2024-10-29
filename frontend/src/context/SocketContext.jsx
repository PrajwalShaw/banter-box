import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

//The useSocketContext function is a custom React hook, allowing 
//components to access and use a context specifically created for WebSocket or socket-related functionality. 
//So, any component calling useSocketContext() will now have access to the WebSocket functionalities that 
//SocketContext provides.
export const useSocketContext = () => {
      return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {

    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io("http://localhost:5000",{
                query:{
                   userId : authUser._id
                },
            });

            setSocket(socket);

            //when I log in I want to know who are online or offline
            //socket.on() is used to listen to the events. Can be used on both client and server side
            socket.on("getOnlineUsers", (users) => {
                 setOnlineUsers(users);
            });

              

            return () => socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);//whenever user changes run this useEffect hook

    
    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>
           {children}
        </SocketContext.Provider>
    )
};



