import React from 'react'

const VideoCard = ({video}) => {
   const {snippet,statistics} = video;
   
  return (

        <div className='p-2 bg-slate-100 w-72 h-80 cursor-pointer'>
        <img src={snippet.thumbnails.medium.url} alt='Thumbnail' />
        <h1 className='font-bold '>{snippet.title}</h1>
        <h2>{snippet.channelTitle}</h2>
        <p>{statistics?.viewCount}</p>
    </div>


  )
}

export default VideoCard