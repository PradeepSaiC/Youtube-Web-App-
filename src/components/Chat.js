import React from 'react'

const Chat = ({chat}) => {
  return (
    <div className='flex no-scrollbar overflow-auto m-1 border-b-2 flex-shrink-0'>
              <img
          className="w-12 h-8 cursor-pointer "
          src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
          alt="User"
        />
              <div>
                  <h2 className='font-bold text-sm'> {chat.name}</h2>
                  <p>{chat.message} </p>
                </div>
    </div>
  )
}

export default Chat