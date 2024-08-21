import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // console.log(searchQuery);
    // call the api after 2 milisecond
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    // if we call the api again within 2 millisecond then first unmount the existing api and then again set the timer of 2 millisecond

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json);
    // update the data in cache by dispatch()
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-4  m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mx-1 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        ></img>
        <img
          className="h-8 cursor-pointer"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg"
        ></img>
      </div>

      {/* search */}
      <div className="col-span-10">
        <div>
          <input
            placeholder="Type here"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="border border-gray-300 rounded-l-full h-8 w-1/2 p-2"
            type="search"
          />
          <button className=" border border-black-300 px-5 py-2 h-8 rounded-r-full bg-gray-100">
            <CiSearch />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed  bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex gap-2 py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  <CiSearch />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* user Icon */}
      <div className="col-span-1">
        <img
          className="h-8"
          alt="userIcon"
          src="https://openclipart.org/download/247319/abstract-user-flat-3.svg"
        ></img>
      </div>
    </div>
  );
};

export default Head;
