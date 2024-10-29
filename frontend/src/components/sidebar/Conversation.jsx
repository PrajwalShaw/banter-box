import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation,lastIdx,emoji}) => {
    const {selectedConversation,setSelectedConversation} = useConversation();//we just call this hook and we are able to use any value we click at....global usage..can be used anywhere
    const isSelected  = selectedConversation?._id === conversation._id;//agar current conversation ka id aur selected conversation ka id same hua toh isSelected ka value true hojaye ga
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-400" : ""}`} 
            onClick={()=> setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-24 rounded-full">
                        <img src={conversation.profilePic} alt='use-avatar'/>
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                   <div className='flex gap-3 justify-between'>
                      <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                      <span className='text-xl'>{emoji}</span>
                   </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'/>

            {!lastIdx && <div className='divider my-0 py-1 h=1 '/>}
        </>
    )
}

export default Conversation

//flex-1: This tells the div to grow and take up the remaining available space in the parent container. 
//It means this element will expand to fill up the remaining space in its flex parent (if there is any).

//gap-3: This adds a 3-unit gap (which is usually 0.75rem or 12px by default) between the
// flex items (the <p> and <span> in this case). It ensures that the items are separated by some space.