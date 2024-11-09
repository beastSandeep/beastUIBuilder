import { useEffect, useState } from "react";
import Axis from "./Axis";
import DragableItem from "./DragableItem";
import Divider from "./Divider";
import Tabs from "./Tabs";
import ActiveTab from "./ActiveTab";

import { data_tabs } from "./constants";
// const components = [
//   {
//     name: "buttons",
//     contents: [
//       { name: "img1", src: "/img1.jpg", elment: "", style: "" },
//       { name: "img3", src: "/img2.jpg", elment: "", style: "" },
//       { name: "img8", src: "/img1.jpg", elment: "", style: "" },
//       { name: "img2", src: "/img2.jpg", elment: "", style: "" },
//     ],
//   },
//   { name: "boxes", contents: [] },
//   { name: "badges", contents: [] },
// ];

function App() {
  const [axis, setAixs] = useState({ top: 0, left: 0 });
  const [topHeight, setTopHeight] = useState(530); // Default height for the top section
  const [leftWidth, setLeftWidth] = useState(960); // Default width for the top section
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    // Function to handle the keydown event
    const handleKeyDown = (event) => {
      if (event.ctrlKey) {
        // If Ctrl key is pressed, update state
        setIsCtrlPressed(true);
      }
    };

    // Function to handle the keyup event
    const handleKeyUp = (event) => {
      if (!event.ctrlKey) {
        // When the Ctrl key is released, reset state
        setIsCtrlPressed(false);
      }
    };

    // Adding the event listeners
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup the event listeners when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  function axisSetter(e) {
    setAixs({
      top: `${e.pageY}px`,
      left: `${e.pageX}px`,
    });
  }

  return (
    <>
      <main
        id="mainContainer"
        className="w-full h-screen relative flex flex-col "
      >
        {/* main screen starts */}
        <section
          onMouseEnter={axisSetter}
          onMouseMove={axisSetter}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          className="overflow-auto bg-white relative"
          style={{ height: `${topHeight}px` }}
        >
          <Axis
            top={axis.top}
            left={axis.left}
            isCtrlPressed={!isCtrlPressed}
          ></Axis>

          {Array(2)
            .fill("_")
            .map((e, i) => (
              <DragableItem
                key={i}
                text={`Sandeep ${i + 1}`}
                onDrag={axisSetter}
              />
            ))}
        </section>

        {/* divider */}
        <Divider onChange={setTopHeight} />

        {/* elements + properties */}
        <section
          id="sideContainer"
          className="relative z-[1] overflow-auto flex flex-1 bg-gray-700"
        >
          {/* elements */}
          <main className="" style={{ width: `${leftWidth}px` }}>
            left section
          </main>

          {/* divider */}
          <Divider
            id="sideContainer"
            onChange={setLeftWidth}
            isVertical={true}
          />

          {/* properties */}
          <main
            className="bg-white "
            style={{ width: `calc(100% - ${leftWidth}px)` }}
          >
            <Tabs data={data_tabs} onClick={setActiveTab}>
              <ActiveTab activeTab={activeTab}></ActiveTab>
            </Tabs>
          </main>
        </section>
      </main>
    </>
  );
}

export default App;
