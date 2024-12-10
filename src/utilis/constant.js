const YT_KEY = import.meta.env.VITE_YOUTUBE_API
export const MAX_RESULTS = 50;
export const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=${MAX_RESULTS}&key=${YT_KEY}`


export const fetchMovieById =(id)=>{
    return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YT_KEY}`
}

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const OFFSET_YOUTUBE_LIVE = 250;


