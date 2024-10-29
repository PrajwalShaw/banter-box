import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading,conversations} = useGetConversations();
  console.log("CONVERSATIONS:", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>

          {
            conversations.map((conversation,idx)=>(
               <Conversation 
                 key = {conversation._id}
                 conversation={conversation}
                 emoji= {getRandomEmoji()}
                  lastIdx = {idx === conversation.length - 1}
               />
            ))
          }
          {loading ? <span className='loading loading-spinner mx-auto'></span>: null}
        {/* <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/> */}
    </div>
  )
}
//The overflow-auto class adds scrollbars only when necessary. That is, if the content inside the container is too 
//large (i.e., it overflows the boundaries of the container), scrollbars will appear, but only if there's an overflow.
export default Conversations;