import React from "react";
import { useSelector } from "react-redux";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 px-3">
      <h1 className="font-bold">Subscription</h1>
      <ul className="flex flex-col">
        <Link to={"/"}>
          <GoHome />
          Home
        </Link>
        <Link to={"/"}>Shorts</Link>
        <Link to={"/"}>Subscription</Link>
      </ul>

      <h1 className="font-bold pt-4">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>sport</li>
        <li>gaming</li>
        <li>movie</li>
      </ul>
    </div>
  );
};

export default Sidebar;
