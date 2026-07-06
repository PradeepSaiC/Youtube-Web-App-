const YOUTUBE_DATA_API=process.env.REACT_APP_YOUTUBE_DATA_API;



export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_DATA_API;
export const YOUTUBE_SEARCH_SUGGESTION = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_SEARCH_QUERY_URI ="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key="+YOUTUBE_DATA_API+"&q="

export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=20&key="+YOUTUBE_DATA_API+"&videoId="
