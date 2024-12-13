import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`transition-all duration-300 ${
        isMenuOpen ? "w-[70%] sm:w-[85%] " : "w-full"
      }`}
    >
      <div className="flex flex-col">
        <ButtonList />

        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
