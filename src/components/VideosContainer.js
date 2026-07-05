import React, { useContext, useEffect, useState } from 'react'
import { YOUTUBE_URL } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideosContainer = () => {
  const [videoList,setVideoList] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  console.log();
  
  const getVideos = async () => {
    const res = await fetch(YOUTUBE_URL);
    const data = await res.json();
    console.log(data.items);
    
    setVideoList(data.items);
  }
  if(videoList.length === 0) return <h1>Loading</h1>
  console.log(videoList[0]);
  
  return (
    <div className='mt-4 flex flex-wrap gap-4 col-span-11 ml-28'>
      {
        videoList.map((video) => 
          <Link to={"/watch?v="+video.id}>
           <VideoCard  key={video.id} video={video}/>
          </Link>
      
      )
      }
     
    </div>
  )
}

export default VideosContainer