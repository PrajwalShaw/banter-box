import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}
//sm:h-[450px]---> for small screens width should be 450px and above
//md:h-[550px]---> for medium size screens width should be 550px and above
export default Home