const YT_KEY = import.meta.env.VITE_YOUTUBE_API

export const YOUTUBE_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${YT_KEY}`


