import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/UI/Sidebar";
import Body from "./components/Body";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const [mobileView, setMobileView] = useState(null);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    if (windowSize < 1281) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  return (
    <div className="grow bg-[hsl(0_0%_98%)] text-[18px] font-epilogue flex flex-col">
      {/* {windowSize} */}
      <Header showSideBar={openSideBar} mobileView={mobileView} />
      {sideBarOpen && <Sidebar closeSideBar={closeSideBar} />}
      <Body mobileView={mobileView} />
    </div>
  );
}

export default App;
