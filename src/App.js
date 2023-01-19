import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/UI/Sidebar";
import Body from "./components/Body";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openSideBar = () => {
    setSideBarOpen(true);
    console.log(sideBarOpen);
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
    console.log(sideBarOpen);
  };

  return (
    <div className="grow bg-[hsl(0_0%_98%)] text-[18px] font-epilogue">
      <Header showSideBar={openSideBar} />
      {sideBarOpen && <Sidebar closeSideBar={closeSideBar} />}
      <Body />
    </div>
  );
}

export default App;
