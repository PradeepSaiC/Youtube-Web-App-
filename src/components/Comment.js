import React from 'react'
import parse from "html-react-parser"
const Comment = ({comment}) => {
    console.log(comment?.topLevelComment?.snippet?.authorProfileImageUrl  ?? comment?.authorProfileImageUrl);
    
    
  return (

    <div className='flex gap-1 rounded-md  bg-slate-300 p-2 '>
          <img
          referrerpolicy="no-referrer"
          className="w-12 h-8 cursor-pointer "
          src={comment?.topLevelComment?.snippet?.authorProfileImageUrl  ?? comment?.authorProfileImageUrl?? "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"}
          alt="user"
        />
        <div>
          <h2 className='font-bold text-md'> {comment?.topLevelComment?.snippet?.authorDisplayName ?? comment?.authorDisplayName}</h2>
          <p>{parse(comment.topLevelComment?.snippet?.textDisplay ?? comment?.textDisplay ?? "")}</p>
        </div>
    </div>
  )
}

export default Comment