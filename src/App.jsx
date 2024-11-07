import { useEffect, useState } from "react";
import Axis from "./Axis";

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
  const [axis, setAixs] = useState({ top: "50%", left: "50%" });
  const [screenSize, setScreenSize] = useState({
    screenW: 1920,
    screenH: 1080,
  });

  useEffect(() => {
    const screenH = window.innerHeight;
    const screenW = window.innerWidth;

    setScreenSize({ screenW, screenH });

    window.onload = function () {
      this.addEventListener("mousemove", (e) => {
        setAixs({
          top: `${e.pageY}px`,
          left: `${e.pageX}px`,
        });
      });
    };

    () => {
      window.removeEventListener("mousemove");
    };
  }, []);

  function setUnderLimiter(x, screenSize, width) {
    return x + Math.ceil(width) >= screenSize
      ? Math.ceil((x - Math.ceil(width)) % screenSize)
      : Math.ceil(x % screenSize);
  }

  function onDragHandler(e) {
    // setting new mouse position
    // console.log("dragging...");
    setAixs({
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
    });
  }

  function onDragEndHandler(e) {
    // console.log("dragging ends");
    // setting new position from current mouse position

    // console.log(
    //   `func : ${setUnderLimiter(
    //     e.clientX,
    //     screenSize.screenW,
    //     e.target.getBoundingClientRect().width
    //   )}`,
    //   "\n",
    //   `clientX : ${e.clientX}`,
    //   "\n",
    //   `screenW : ${screenSize.screenW}`,
    //   "\n",
    //   `element width : ${e.target.getBoundingClientRect().width}`
    // );
    setAixs({ top: `${e.clientY}px`, left: `${e.clientX}px` });

    e.target.style.left = `${setUnderLimiter(
      e.clientX,
      screenSize.screenW,
      e.target.getBoundingClientRect().width
    )}px`;
    e.target.style.top = `${e.clientY}px`;
  }

  return (
    <>
      <main className="flex justify-between overflow-x-hidden">
        <Axis top={axis.top} left={axis.left}></Axis>

        {/* components */}
        {/* <section className="w-full flex flex-col gap-1"> */}
        {/* accordian start */}
        {/* {components.map((component) => (
            <div
              key={component.name}
              className="collapse collapse-arrow bg-black text-white text-center"
            >
              <input type="radio" name="components" />
              <div className="collapse-title text-sm font-medium">
                {component.name.toUpperCase()}
              </div>

              <div className="collapse-content flex justify-center flex-wrap gap-1">
                {component.contents.map((content) => (
                  <img
                    className="rounded-sm max-w-32"
                    key={content.name}
                    src={content.src}
                    alt={content.name}
                  />
                ))}
              </div>
            </div>
          ))} */}
        {/* accordian ends */}
        {/* </section> */}

        {/* main screen starts */}
        <section className="h-screen overflow-y-scroll w-full">
          <button
            style={{ position: "absolute" }}
            draggable
            onDragStart={() => {
              // console.log("dradding started");
              // storing intial position
            }}
            onDrag={onDragHandler}
            onDragEnd={onDragEndHandler}
            // onDragExit={() => {
            //   console.log("onDragExit");
            // }}
            // onDragOver={() => {
            //   console.log("somthing is over us");
            // }}
            // onDragLeave={() => {
            //   console.log("somthing is leaving us");
            // }}
            // onDrop={() => {
            //   console.log("somthing is dropped");
            // }}
            className="btn rounded-none btn-primary"
          >
            hello
          </button>
        </section>
        {/* main screen ends */}

        {/* <section className="h-screen overflow-y-scroll w-full"> */}
        {/* properties starts */}
        {/* <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-xs w-full max-w-xs"
          /> */}
        {/* properties ends */}
        {/* </section> */}
      </main>
    </>
  );
}

export default App;
