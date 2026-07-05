import React, { useEffect, useState } from 'react'

import CommentList from './CommentList';
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
const CommentsContainer = ({param}) => {
  // get comments and send to commentlist component
  const [comments,setComments] = useState([])
  useEffect(()=> {
    getComments();
  },[])
  const getComments = async() => {
    const res = await fetch(YOUTUBE_COMMENTS_API+param);
    const data = await res.json();
    console.log(data);
    setComments(data.items)
  }
  return (
    
    <div className='ml-5 p-2 bg-gray-200 rounded-md w-[87%] h-[900px] no-scrollbar overflow-auto'>
      <h1 className='font-bold text-2xl mb-5'>
        Comments:
      </h1>
      <CommentList comments={comments}/>
    </div>
  
  )
}

export default CommentsContainer