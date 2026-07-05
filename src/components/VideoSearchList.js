import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_QUERY_URI } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoSearchList = () => {
  const [searchParams] = useSearchParams()
  const [searchResult,setSearchResult] = useState([])
  const searchQuery = searchParams.get("search_query")
  useEffect(()=>{
    getSearchResults();
  },[searchQuery])

  const getSearchResults = async() => {
    const res = await fetch(YOUTUBE_SEARCH_QUERY_URI+searchParams.get("search_query"))
    const json = await res.json();
    console.log("In video Search List "+json.items);
    setSearchResult(json.items)
  }
  return searchResult && (
    <div className='col-span-11 mt-20 flex ml-16 flex-wrap gap-4 justify-center'>
        {
            searchResult.map((res) => <Link to={"/watch?v="+res.id.videoId}>
             <VideoCard key={res.id} video={res}/>
            </Link>)
        }
    </div>
  )
}

export default VideoSearchList;