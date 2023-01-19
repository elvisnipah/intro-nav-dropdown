import React from "react";
import menuIcon from "../images/icon-menu.svg";
import logo from "../images/logo.svg";

function Header(props) {
  return (
    <header>
      <nav className="flex justify-between p-4">
        {/* <p className="font-bold text-3xl">snap</p> */}
        <img src={logo} alt="" />
        <div className="cursor-pointer block" onClick={props.showSideBar}>
          <img src={menuIcon} alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
