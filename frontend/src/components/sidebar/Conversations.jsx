import React from 'react'
import Conversation from './Conversation'
const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}
//The overflow-auto class adds scrollbars only when necessary. That is, if the content inside the container is too 
//large (i.e., it overflows the boundaries of the container), scrollbars will appear, but only if there's an overflow.
export default Conversations