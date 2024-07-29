import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
        <input
          placeholder="Type here"
          className="border border-gray-300 rounded-l-full h-8 w-1/2 p-2"
          type="search"
        />
        <button className=" border border-black-300 px-5 py-2 h-8 rounded-r-full bg-gray-100">
          <CiSearch />
        </button>
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
