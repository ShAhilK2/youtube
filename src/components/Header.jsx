import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilis/appSlice";
import { YOUTUBE_SEARCH_API } from "../utilis/constant";
import { cacheresults } from "../utilis/seachSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  const getSearchSuggestion = async () => {
    console.log("API CALL -" + searchQuery);
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
        return setSuggestions(searchCache[searchQuery]);
      } else {
        return getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow  ">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-black cursor-pointer"
          onClick={handleToggleMenu}
        />
        <img
          src="data:image/png;base64,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"
          alt="YouTube Logo"
          className="w-32"
        />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col w-1/2">
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow py-2 pl-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="px-4 py-2 bg-gray-100 text-gray-400 rounded-r-full hover:bg-gray-50">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed top-[58px] bg-white  w-[45%] shadow-lg rounded-lg border border-gray-100 hover:border-gray-300 z-10 ">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-5 flex gap-2 items-center  shadow-sm hover:pointer hover:bg-gray-300"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-xl"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faUser}
          className="text-2xl text-gray-700 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
