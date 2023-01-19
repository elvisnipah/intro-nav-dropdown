import React from "react";
import NavMenu from "../NavMenu";
import ReactDOM from "react-dom";

function Sidebar(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="flex h-full w-full fixed z-1 left-0 top-0">
          <div
            className="bg-[rgba(0,0,0,0.5)] w-[30%]"
            onClick={props.closeSideBar}
          ></div>
          <NavMenu closeSideBar={props.closeSideBar} />
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Sidebar;
