import { useState } from "react";

const Hello = () => {
  const [leftWidth, setLeftWidth] = useState(300); // Initial width for the left section
  const minWidth = 50; // Minimum width for the sections

  // Mouse down event to start resizing
  const handleMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Mouse move event to resize sections
  const handleMouseMove = (event) => {
    const container = document.getElementById("container");
    const maxWidth = container.clientWidth - minWidth;
    const newLeftWidth = event.clientX - container.getBoundingClientRect().left;

    if (newLeftWidth > minWidth && newLeftWidth < maxWidth) {
      setLeftWidth(newLeftWidth); // Update width of left section
    }
  };

  // Mouse up event to stop resizing
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div id="container" className="flex w-full h-screen">
      <div
        className="bg-gray-200 h-full overflow-auto"
        style={{ width: `${leftWidth}px` }}
      >
        Left Section
      </div>
      <div
        className="bg-gray-400 cursor-ew-resize h-full w-2"
        onMouseDown={handleMouseDown} // Start resizing on mouse down
      ></div>
      <div
        className="bg-gray-300 h-full overflow-auto flex-grow"
        style={{ width: `calc(100% - ${leftWidth}px - 0.5rem)` }}
      >
        Right Section
      </div>
    </div>
  );
};

export default Hello;
