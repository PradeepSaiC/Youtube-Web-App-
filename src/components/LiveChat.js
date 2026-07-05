import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux'
import { entriesList } from '../utils/dataHelper';
import { addToChat } from '../utils/liveChatSlice';

const LiveChat = () => {
    const [input,setInput] = useState([])
  const dispatch = useDispatch();
  const chats = useSelector( state => state.livechat.chats)
  function getRandomEntry(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
  useEffect(() => {
    const timer = setInterval(()=> {
        const item = getRandomEntry(entriesList);
        dispatch(addToChat(item));
    },2000)

    return () => {
        clearInterval(timer);
    }
  },[])
  return (
    
        <div className='w-[40%] mr-10'>

      <div className='bg-slate-200 p-2   px-4 w-full rounded-md  mt-20 h-[450px] '>
<h1 className='font-bold text-lg'>Live Chat: {chats.length}</h1>

<div className='h-[87%]  rounded-md my-4 p-2 bg-slate-100 no-scrollbar overflow-auto flex flex-col-reverse'>



  {
    chats.map((chat)=> (
        <Chat chat={chat}/>
    ))
  }
    
</div>
      </div>
      <div className='py-2 '>
        <form className='flex justify-between gap-2' onSubmit={(e)=>{
            e.preventDefault()
                 dispatch(addToChat({
                name:"sai",
                message:input
            }))
            setInput('')
        }}>

      
        <input value={input} onChange={(e)=> setInput(e.target.value)} className='border-2 border flex-grow p-1 shadow-md' type='text'/>
        <button type="submit" className='bg-red-600 p-1 px-3 rounded-sm text-white' type='submit'> Send</button>
          </form>
      </div>
      </div>
    
  )
}

export default LiveChat