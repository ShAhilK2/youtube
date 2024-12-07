import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utilis/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../utilis/appSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((state) => state.app.popularVideos);

  const getPopularVideos = async () => {
    const res = await fetch(YOUTUBE_API);
    const data = await res.json();
    console.log(data.items);
    dispatch(addPopularVideos(data.items));
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  if (!popularVideos || popularVideos.length === 0) return <p>Loading...</p>;

  return (
    <div className="video-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-4">
      {popularVideos.map((video) => {
        return <VideoCard key={video.id} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
