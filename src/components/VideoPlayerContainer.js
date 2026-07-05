import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar, toggleSidebar } from '../utils/sidebarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const VideoPlayerContainer = () => {
  const [searchParams]=useSearchParams();
  const [getInfo,setGetInfo] = useState(null);
    const dispatch = useDispatch();
  
    useEffect(()=> {
        dispatch(closeSidebar());
        getDetails();
        window.scrollTo(0,0)
        return (() => {
          dispatch(toggleSidebar())
        })
    },[])

  const getDetails = async () =>{
    const url = "https://www.youtube.com/watch?v="+searchParams.get("v")
    const res = await fetch("https://www.youtube.com/oembed?url="+encodeURIComponent(url)+"&format=json")
    const json = await res.json();
    setGetInfo(json);
  }

  return (
  <div className='flex w-full justify-around'>

  <div className='flex flex-col w-full mb-10'>
    <div className='col-span-9 px-5  mt-20 '>
      <iframe width="90%" height="450" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className='my-2 w-full text-wrap ml-5 p-1'>
      <h1 className='font-bold  text-xl'>{getInfo?.title}</h1>
      <p>{getInfo?.author_name}</p>
    </div>
    <CommentsContainer param = {searchParams.get("v")}/>
      </div>
    <LiveChat/>
        </div>
  )
}

export default VideoPlayerContainer