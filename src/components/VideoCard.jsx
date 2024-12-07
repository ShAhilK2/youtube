import React from "react";

// Utility function to format "time ago"
const formatTimeAgo = (publishedAt) => {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();
  const timeDiff = currentDate - publishedDate;
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
};

// Utility function to format the views (e.g., 1,000,000)
const formatViews = (views) => {
  return new Intl.NumberFormat().format(views);
};
const VideoCard = ({ info }) => {
  const channelName = info?.snippet?.channelTitle || "Unknown Channel";
  const title = info?.snippet?.localized?.title || "Untitled info";
  const thumbnailURL = info?.snippet?.thumbnails?.high?.url;
  const channelImg = info?.snippet?.thumbnails?.default?.url;
  const viewsCount = info?.statistics?.viewCount || 0;
  const timeAgo = formatTimeAgo(info?.snippet?.publishedAt);
  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
      {/* Thumbnail */}
      <img
        src={thumbnailURL}
        alt="video thumbnail"
        className="w-full h-48 object-cover"
      />

      {/* Video Information */}
      <div className="p-4">
        {/* Channel Image and Name */}
        <div className="flex items-center space-x-3 mb-2">
          <img
            src={channelImg}
            alt="channel image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm font-semibold text-gray-800">{channelName}</p>
        </div>

        {/* Video Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
          {title}
        </h2>

        {/* Views and Time Ago */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>{viewsCount} views</p>
          <div className="text-center bg-gray-400 w-1 h-1 rounded-xl"></div>
          <p>{timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
