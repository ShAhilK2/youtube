import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ButtonList = () => {
  return (
    <div className="flex gap-2 pl-5 whitespace-nowrap overflow-y-scroll w-screen">
      <Button>All</Button>

      <Button>Music</Button>
      <Button>Mixes</Button>
      <Button>Frequencies</Button>
      <Button>JavaScript</Button>
      <Button>Skills</Button>
      <Button>Gaming</Button>
      <Button>Live</Button>
      <Button>Wealth</Button>
      <Button>Playlists</Button>
      <Button>Engines</Button>

      <Button>News</Button>
      <Button>Movies</Button>
      <Button>Tarot Reading</Button>
      <Button>Gym </Button>
      <Button>Sports</Button>
      <Button>Cars</Button>

      <Button>Recently uploaded</Button>
      <Button>Watched</Button>
      <Button>Hot wheels</Button>
      <Button>Lofi Music</Button>
      <Button>Sidhu Moosewala</Button>
      <Button>New to you</Button>
    </div>
  );
};

export default ButtonList;
