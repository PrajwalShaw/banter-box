import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
const MessageContainer = () => {

    //const noChatSelected = true;
    const {selectedConversation,setSelectedConversation} = useConversation();
    useEffect(()=>{
          //unmount the function(clean up)//refer to video of as a programmer....at 3:26
          return ()=> setSelectedConversation(null);
    },[setSelectedConversation])
    
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ?
                (<NoChatSelected />) : (
                    <>
                        {/**Header */}
                        <div className='bg-slate-500 px-4 py-2 mb-2'>
                            <span className='label-text'>To:</span><span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
                        </div>

                        <Messages />
                        <MessageInput />

                    </>
                )} 
        </div>
    )
}

export default MessageContainer

//min-w-[450px]: This is a custom minimum width set to 450px. It tells the container 
//that it should be at least 450px wide, but it can grow larger depending on the content or parent container.

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullName} </p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' /> {/**in small screens text will be 3xl and in medium screens it will be 6xl */}
            </div>
        </div>
    )
} 