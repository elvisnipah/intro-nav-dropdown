import React from "react";
import menuIcon from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import NavMenu from "./NavMenu";

function Header(props) {
  return (
    <header>
      <nav className="flex p-4 items-center xl:gap-8 justify-between xl:justify-start">
        <img src={logo} alt="" className="xl:h-[27px]" />
        {props.mobileView && (
          <div className="cursor-pointer block" onClick={props.showSideBar}>
            <img src={menuIcon} alt="" />
          </div>
        )}
        {!props.mobileView && <NavMenu mobileView={props.mobileView} />}
      </nav>
    </header>
  );
}

export default Header;
