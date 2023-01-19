import React from "react";
import todoIcon from "../images/icon-todo.svg";
import calendarIcon from "../images/icon-calendar.svg";
import remindersIcon from "../images/icon-reminders.svg";
import planningIcon from "../images/icon-planning.svg";
import downArrowIcon from "../images/icon-arrow-down.svg";
import upArrowIcon from "../images/icon-arrow-up.svg";
import closeIcon from "../images/icon-close-menu.svg";

import useComponentVisible from "../hooks/use-component-visible";

const NavMenu = (props) => {
  const FeaturesTabCode = () => {
    return (
      <div>
        <div className="pl-8 py-2 flex flex-col gap-3 xl:absolute xl:left-[8%] xl:top-[8%] xl:bg-white xl:p-4 xl:rounded-xl">
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
    );
  };

  const FeaturesTabComponent = () => {
    const { ref, isComponentVisible } = useComponentVisible(false);
    return (
      <div ref={ref}>
        <div className="cursor-pointer flex items-center relative">
          <span className="pr-2 hover:text-[hsl(0,0%,8%)]">Features</span>
          <img src={isComponentVisible ? upArrowIcon : downArrowIcon} alt="" />
        </div>
        {isComponentVisible && <FeaturesTabCode />}
      </div>
    );
  };

  const CompanyTabCode = () => {
    return (
      <div>
        <div className="pl-8 py-2 flex flex-col gap-2 xl:absolute xl:left-[18%] xl:top-[8%] xl:bg-white xl:p-4 xl:rounded-xl">
          <p className="hover:text-[hsl(0,0%,8%)] cursor-pointer max-w-[90px]">
            History
          </p>
          <p className="hover:text-[hsl(0,0%,8%)] cursor-pointer max-w-[90px]">
            Our Team
          </p>
          <p className="hover:text-[hsl(0,0%,8%)] cursor-pointer max-w-[90px]">
            Blog
          </p>
        </div>
      </div>
    );
  };

  const CompanyTabComponent = () => {
    const { ref, isComponentVisible } = useComponentVisible(false);
    return (
      <div ref={ref}>
        <div className="flex items-center cursor-pointer relative">
          <span className="pr-2 hover:text-[hsl(0,0%,8%)]">Company</span>
          <img src={isComponentVisible ? upArrowIcon : downArrowIcon} alt="" />
        </div>
        {isComponentVisible && <CompanyTabCode />}
      </div>
    );
  };

  return (
    <div className="flex w-3/4 xl:w-full bg-[hsl(0_0%_98%)] text-[hsl(0,0%,41%)] font-epilogue">
      <div className="p-4 w-full flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <img
          src={closeIcon}
          alt=""
          onClick={props.closeSideBar}
          className="cursor-pointer h-5 w-5 self-end xl:hidden"
        />
        <div className="flex gap-4 flex-col xl:flex-row">
          <FeaturesTabComponent />
          <CompanyTabComponent />
          <div>
            <p className="hover:text-[hsl(0,0%,8%)] cursor-pointer max-w-[80px]">
              Careers
            </p>
          </div>
          <div>
            <p className="hover:text-[hsl(0,0%,8%)] cursor-pointer max-w-[80px]">
              About
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-4 xl:flex-row xl:mt-0 xl:justify-end">
          <button className="font-epilogue hover:text-[hsl(0,0%,8%)]">
            Login
          </button>
          <button className="rounded-xl border-[2px] border-[hsl(0,0%,41%)] hover:border-[hsl(0,0%,8%)] p-2 font-epilogue hover:text-[hsl(0,0%,8%)]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
