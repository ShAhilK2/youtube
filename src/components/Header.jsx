import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilis/appSlice";
import { SEARCH_FROM_KEYWORD, YOUTUBE_SEARCH_API } from "../utilis/constant";
import { cacheresults } from "../utilis/seachSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestion = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await res.json();
    setSuggestions(data[1]);
    dispatch(
      cacheresults({
        [searchQuery]: data[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchResults = async (searchQuery) => {
    const res = await fetch(SEARCH_FROM_KEYWORD(searchQuery));
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    if (!searchQuery) return;
    getSearchResults();
  }, [searchQuery]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex items-center justify-between px-4  shadow-md md:px-6 ">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl text-black cursor-pointer md:text-2xl"
          onClick={handleToggleMenu}
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg"
          alt="Logo"
          className="w-14 h-14 md:w-20 md:h-20"
        />
      </div>

      {/* Middle Section */}
      <div className="relative flex-grow mx-4 md:mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 text-sm border rounded-md md:px-4 md:py-2 md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500 md:right-4"
          onClick={() => getSearchResults()}
        />
        {showSuggestion && suggestions.length > 0 && (
          <ul className="absolute left-0 w-full p-2 mt-2 bg-white border rounded-md shadow-md max-h-60 overflow-y-auto">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="px-3 py-1 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
                onClick={() => setSearchQuery(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faUser} className="text-xl md:text-2xl" />
      </div>
    </header>
  );
};

export default Header;
