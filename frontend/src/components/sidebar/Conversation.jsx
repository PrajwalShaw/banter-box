import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                   <div className='flex gap-3 justify-between'>
                      <p className='font-bold text-gray-200'>John Doe</p>
                      <span className='text-xl'>🎃</span>
                   </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'/>
        </>
    )
}

export default Conversation

//flex-1: This tells the div to grow and take up the remaining available space in the parent container. 
//It means this element will expand to fill up the remaining space in its flex parent (if there is any).

//gap-3: This adds a 3-unit gap (which is usually 0.75rem or 12px by default) between the
// flex items (the <p> and <span> in this case). It ensures that the items are separated by some space.