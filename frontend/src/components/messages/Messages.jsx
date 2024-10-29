import React, { useEffect,useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'
const Messages = () => {

  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(); 
  useListenMessages();//this will listen to the incoming messages coming from the socket.io
 // console.log("messages:", messages);

  //This code is a React useEffect hook used to automatically scroll to the most recent message whenever the messages
  // array changes. Let's break it down step by step:
  useEffect(()=>{
    if (messages.length > 0) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
           <div key={message._id} ref={lastMessageRef}>
              <Message  message={message} />
            </div>
        ))}



      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages


//This part is checking if the loading variable is true. If it is, it will execute the code after the &&.
//loading && is a short way of saying "if loading is true, do this."
//[...]Array(3) creates an array with 3 empty elements.
//.map((_, idx) is used to loop through each element of the array, where _ is the value (unused here) and idx is the
//index. For each iteration, it renders a <MessageSkeleton /> component, which likely represents a skeleton loading UI,
//with a unique key for React's tracking.


//From line 13 to 17
//If loading is false (the data is fully loaded) and there are messages (messages.length > 0), the component will 
//render a list of Message components.Each Message component represents one individual message, and it is rendered 
//for each item in the messages array.The key={message._id} ensures that each message has a unique identifier for 
//React to manage the list efficiently.