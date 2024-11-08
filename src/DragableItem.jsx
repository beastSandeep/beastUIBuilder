/* eslint-disable react/prop-types */
import { useRef } from "react";

function DragableItem({ text = "Hello", className }) {
  let startX = useRef(0);
  let startY = useRef(0);

  function onDragStartHandler(e) {
    startX.current = e.clientX - e.target.offsetLeft;
    startY.current = e.clientY - e.target.offsetTop;

    // Optional: Change the appearance while dragging
    e.dataTransfer.setData("text/plain", ""); // Necessary for Firefox
  }

  function onDragEndHandler(e) {
    // Calculate the new position
    let newX = e.clientX - startX.current;
    let newY = e.clientY - startY.current;

    // Get the viewport width and button width
    const viewportWidth = window.innerWidth;
    const buttonWidth = e.target.offsetWidth;

    // Boundary check for x-axis (prevent going out of viewport horizontally)
    if (newX < 0) {
      newX = 0; // Prevent going off the left edge
    } else if (newX + buttonWidth > viewportWidth) {
      newX = viewportWidth - buttonWidth; // Prevent going off the right edge
    }

    // Apply the constrained position
    e.target.style.left = `${newX}px`;
    e.target.style.top = `${newY}px`;

    // e.target.style.left = `${setUnderLimiter(
    //   e.clientX,
    //   screenSize.screenW,
    //   e.target.getBoundingClientRect().width
    // )}px`;
    // e.target.style.top = `${e.clientY}px`;
  }

  return (
    <button
      draggable
      onDragStart={onDragStartHandler}
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
      className={`bg-black font-semibold text-white p-4 cursor-move absolute ${className}`}
    >
      {text}
    </button>
  );
}

export default DragableItem;
