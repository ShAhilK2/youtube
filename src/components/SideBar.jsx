import {
  faDiscourse,
  faHireAHelper,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faCirclePlay,
  faClock,
  faMessage,
  faNewspaper,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookBookmark,
  faChevronRight,
  faClockRotateLeft,
  faDumbbell,
  faFilm,
  faGear,
  faHouse,
  faPlane,
  faPodcast,
  faShirt,
  faSprout,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    isMenuOpen && (
      <div className="py-2 flex flex-col items-start gap-2 sm:w-[20%] h-auto  overflow-x-scroll ">
        {/* Home Button */}
        <Link to={"/"}>
          <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
            <FontAwesomeIcon icon={faHouse} className="text-xl text-gray-700" />
            <span className="text-base font-medium text-gray-800">Home</span>
          </button>
        </Link>

        {/* Shorts Button */}
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAgVBMVEX///8AAAC7u7vf399DQ0Pb29sfHx8jIyNnZ2eXl5dLS0sEBAT7+/srKyvT09P19fUPDw8UFBSioqI4ODjq6uoZGRmLi4uCgoJUVFS0tLQSEhLx8fHLy8s+Pj57e3tGRkbCwsJiYmKrq6tkZGQqKipaWlp+fn51dXWKiopvb2+Tk5MW4pSGAAAD80lEQVR4nO2c6WKiMBRGQ3GpQhEX3LHW1vX9H3C4QTsyN4F0QAkz3/mlacAcuJC9QgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4MsEmHnpOOYbxJqhb472kwzfvtaqcyt6LO7xpfR6v1WkQ57o8ZvLn45Hru2HyYc4yDLpJ8pvP0uMkOVp9f/XdUSxPNXtocbVs6beHC/l5Sp8XLMsLJfOQaVNEvmaSdkuKrvVjSlrAmK5rO/3s05fOgOXZJ8mhy5IPJJgtdTBMksYPKWgB8mpvb9/WdJGPLNOELnSfJfuKmMue74l8ZB+LM4UGf4X2qHg7lixLfcqm9Vm8PYdu9gKuOurQMI+5RZLUrbaMJgzoDtwHx44uco/lCzzli1URc3RGh7/iHo3Lrh+FRjhhGTfq15Ei5qIkhb8YHk2bHtdMiqxM9iyjrEwUMfdHZZLQsUQkrUxeWE6KfefCknnMWSPiv1G48Qd7ro+5TGVijYhYU9E2LOvEsAFjj0huZVLcgLFIZEUvnphnNqtMLBLJrUwUDZgwU5nUJxK2GJ46mUrs8eRI9gPuj61H5AFABCIkEr1USn1trYob3fW9tSCiBiKlgIgeiJSiUKQ923/2eIs3BztFjnKgPhr94JRWihxvbY6x+XiujSLBXfPpg3fX1dgoQgMLnd4mnQcKp2bDbjaK0MDJTgh3nt6ULz5IpMBGERp1lIV/eUtV5gYltFpE+JelNPEOha9iu0WEmHymN6XDZxey2C4ixHqcqrTyp6DtFxFiFKXxdV5pD2mGiBikNb0zzKnqGyGSHNBP40u/LqAhIkIsujK8tA9KY0SEf6IRR+2EZ3NEkofeyZlMb5IIrZb40h3UIJE1NVj4lM+Vxohcq3htBd8QEf8SSg++oONGM0RuzeC9vu3YBBGjjon9IoPZtat4ye0qWi+y66S347Og8265SNBKNYqHU6wWWZ3TqDIZ4LJVhFYI9IZpP+SY1w+5YaMILaRtudtrz/C9bXRKG0UWzm+6fPGGGhtFRHzTCGfGi+KsFJlco2r/g5JZKZI0rcZhNN/+5JR2ivwFECkFRPRApBQQ0WOlyPb8quS81R9jo0ig3UXm6RuQ9YjQIv+O9q8jnYfj6DsmNPVgOgNcHWzbRQZ3qfNYaota07YLGQj6MRG3p2akv+Q1bYQRH07O6OffUNfWJLmy3Wj+3AzZF9tWdz5zqMcxNOvEGhDQU6VYVv8E5IbKpWk/toCdXHRez4bKuy2u5c7zvcX1VJz3Mfwrm46FmFa5DZxvw3oi1W3M79f+PwYOpf9VghfFh7o1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4D/kFwb8LzNMb18+AAAAAElFTkSuQmCC"
            alt="Shorts"
            className="w-6 h-6"
          />
          <span className="text-base font-medium text-gray-800">Shorts</span>
        </button>

        {/* Subscriptions Button */}
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faBell} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            Subscriptions
          </span>
        </button>

        <div className="flex justify-center items-center gap-5">
          <h1 className="pl-4 text-bold text-xl">You </h1>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faClock} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">History</span>
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">Playlist</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faVideo} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            Your videos
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faFilm} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            Your movies
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faDiscourse}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">
            Your courses
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faBookBookmark}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">
            Watch later
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">
            Liked videos
          </span>
        </button>

        <div className="flex justify-center items-center gap-5">
          <h1 className="pl-4 text-bold text-xl">Explore </h1>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faClock} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">Trending</span>
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">Shopping</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faVideo} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">Music</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faFilm} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">Movies</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faDiscourse}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">Live</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faBookBookmark}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">Gaming</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faNewspaper}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">News</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faDumbbell}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">Sports</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faDiscourse}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">Courses</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faShirt} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            Fashion & Beauty
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faPodcast} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">Podcast</span>
        </button>

        <div className="flex justify-center items-center gap-5">
          <h1 className="pl-4 text-bold text-xl">More From Youtube </h1>
        </div>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faYoutube} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            YouTube Premium
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faYoutube} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            YouTube Studio
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faYoutube} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            YouTube Music
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faYoutube} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            YouTube Kids
          </span>
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faGear} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">Settings</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">
            Report history
          </span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon
            icon={faHireAHelper}
            className="text-xl text-gray-700"
          />
          <span className="text-base font-medium text-gray-800">Help</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg">
          <FontAwesomeIcon icon={faMessage} className="text-xl text-gray-700" />
          <span className="text-base font-medium text-gray-800">
            Send feedback
          </span>
        </button>
        <p className="px-2 text-gray-500 font-semibold">
          About Press Copyright Contact us Creators Advertise Developers
        </p>
        <p className="px-2 text-gray-500 font-semibold">
          Terms Privacy Policy & Safety How YouTube works Test new features
        </p>
        <p className="px-2 text-gray-500 font-semibold">© 2024 Youtube</p>
      </div>
    )
  );
};

export default SideBar;
