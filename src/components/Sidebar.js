import React from "react";
import { useSelector } from "react-redux";
import { FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 px-3">
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <Link to={"/"}>Home</Link>
        <li>
          <FaMusic />
        </li>
        <li>gaming</li>
        <li>movie</li>
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
