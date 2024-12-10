import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieById, closeMenu } from "../utilis/appSlice";
import { useSearchParams } from "react-router-dom";
import { fetchMovieById } from "../utilis/constant";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const movieById = useSelector((state) => state.app.movieById);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  const getMovieById = async () => {
    try {
      const res = await fetch(fetchMovieById(id));
      if (!res.ok) throw new Error("Failed to fetch movie details");
      const data = await res.json();
      dispatch(addMovieById(data.items[0]));
    } catch (error) {
      console.error("Error fetching movie details:", error.message);
    }
  };

  useEffect(() => {
    dispatch(closeMenu());
    if (id) getMovieById();
  }, [id]);

  const title = movieById?.snippet?.localized?.title || "No title available";
  const description =
    movieById?.snippet?.localized?.description || "No description available";
  const channelTitle = movieById?.snippet?.channelTitle || "Unknown Channel";
  const thumbnail = movieById?.snippet?.thumbnails?.default?.url;
  const publishedDate = movieById?.snippet?.publishedAt;

  return (
    <div
      className={`p-4 flex flex-col lg:flex-row gap-6 transition-all duration-300 ${
        isMenuOpen ? "lg:w-[85%]" : "lg:w-full"
      }`}
    >
      {/* Video Player and Details Section */}
      <div className="flex flex-col lg:w-3/4">
        <div className="relative pb-[56.25%] overflow-hidden rounded-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Title */}
        <h1 className="text-xl font-semibold text-gray-900 mt-4">{title}</h1>

        {/* Channel Info */}
        <div className="flex items-center gap-4 mt-2">
          {thumbnail && (
            <img
              src={thumbnail}
              alt={channelTitle}
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            <p className="text-lg font-medium text-gray-800">{channelTitle}</p>
            {publishedDate && (
              <p className="text-sm text-gray-500">
                Published on: {new Date(publishedDate).toDateString()}
              </p>
            )}
          </div>
        </div>

        {/* Video Description */}
        <div className="mt-4 border-t border-gray-300 pt-4">
          <h2 className="text-lg font-bold mb-2">Description</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Comment Section */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">Comments</h2>
          <CommentSection />
        </div>
      </div>

      {/* Live Chat Section */}
      <div className="lg:w-1/4">
        <h2 className="text-lg font-bold mb-4">Live Chat</h2>
        <div className="bg-gray-100 border border-gray-300 rounded-lg overflow-y-auto h-[500px] p-4">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
