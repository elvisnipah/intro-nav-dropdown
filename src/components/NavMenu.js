import React, { useState } from "react";
import todoIcon from "../images/icon-todo.svg";
import calendarIcon from "../images/icon-calendar.svg";
import remindersIcon from "../images/icon-reminders.svg";
import planningIcon from "../images/icon-planning.svg";
import downArrowIcon from "../images/icon-arrow-down.svg";
import upArrowIcon from "../images/icon-arrow-up.svg";
import closeIcon from "../images/icon-close-menu.svg";

const NavMenu = (props) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const handleFeaturesClick = () => {
    setFeaturesOpen((prevFeaturesOpen) => !prevFeaturesOpen);
  };

  const handleCompanyClick = () => {
    setCompanyOpen((prevCompanyOpen) => !prevCompanyOpen);
  };

  return (
    <div className="flex w-3/4 bg-[hsl(0_0%_98%)] text-[18px] font-epilogue">
      <div className="p-4 w-full flex flex-col gap-4">
        <img
          src={closeIcon}
          alt=""
          onClick={props.closeSideBar}
          className="cursor-pointer h-5 w-5 self-end"
        />
        <div>
          <div
            onClick={handleFeaturesClick}
            className="cursor-pointer flex items-center"
          >
            <span className="pr-2">Features</span>
            <img src={featuresOpen ? upArrowIcon : downArrowIcon} alt="" />
          </div>
          <div
            className={`${
              featuresOpen ? "flex" : "hidden"
            } pl-8 py-2 flex-col gap-2`}
          >
            <span className="cursor-pointer flex gap-3 items-center hover:text-gray-600 max-w-[120px]">
              <img src={todoIcon} alt="" className="h-4" /> <p>Todo List</p>
            </span>
            <span className="cursor-pointer flex gap-3 items-center hover:text-gray-600 max-w-[120px]">
              <img src={calendarIcon} alt="" /> <p>Calendar</p>
            </span>
            <span className="cursor-pointer flex gap-3 items-center hover:text-gray-600 max-w-[120px]">
              <img src={remindersIcon} alt="" /> <p>Reminders</p>
            </span>
            <span className="cursor-pointer flex gap-3 items-center hover:text-gray-600 max-w-[120px]">
              <img src={planningIcon} alt="" /> <p>Planning</p>
            </span>
          </div>
        </div>
        <div className="">
          <div
            onClick={handleCompanyClick}
            className="flex items-center cursor-pointer"
          >
            <span className="pr-2 ">Company</span>
            <img src={companyOpen ? upArrowIcon : downArrowIcon} alt="" />
          </div>
          <div
            className={`${
              companyOpen ? "flex" : "hidden"
            } pl-8 py-2 flex-col gap-2`}
          >
            <p className="hover:text-gray-600 cursor-pointer max-w-[80px]">
              History
            </p>
            <p className="hover:text-gray-600 cursor-pointer max-w-[80px]">
              Our Team
            </p>
            <p className="hover:text-gray-600 cursor-pointer max-w-[80px]">
              Blog
            </p>
          </div>
        </div>
        <div>
          <p className="hover:text-gray-600 cursor-pointer max-w-[80px]">
            Careers
          </p>
        </div>
        <div>
          <p className="hover:text-gray-600 cursor-pointer max-w-[80px]">
            About
          </p>
        </div>
        <div className="flex flex-col mt-8 gap-4">
          <button className="font-epilogue">Login</button>
          <button className="rounded-xl border-[1px] border-black p-2 font-epilogue">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
