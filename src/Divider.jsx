/* eslint-disable react/prop-types */
function Divider({ onChange, isVertical = false, id = "mainContainer" }) {
  // Mouse down event to start resizing
  const handleMouseDownHeight = (event) => {
    event.preventDefault();
    // Add mousemove and mouseup listeners to the document
    document.addEventListener("mousemove", handleMouseMoveHeight);
    document.addEventListener("mouseup", handleMouseUpHeight);
  };

  // Mouse move event to adjust top section height
  const handleMouseMoveHeight = (event) => {
    const container = document.getElementById(id);
    const minHeight = Math.floor(container.clientHeight / 8); // Minimum height for the top section
    const maxHeight = container.clientHeight - minHeight;
    const newTopHeight = event.clientY - container.getBoundingClientRect().top;

    // Ensure the height stays within the bounds
    if (newTopHeight > minHeight && newTopHeight < maxHeight) {
      onChange(newTopHeight);
    }
  };

  // Mouse up event to stop resizing
  const handleMouseUpHeight = () => {
    // Remove mousemove and mouseup event listeners
    document.removeEventListener("mousemove", handleMouseMoveHeight);
    document.removeEventListener("mouseup", handleMouseUpHeight);
  };

  // Mouse down event to start horizontal resizing
  const handleMouseDownWidth = (event) => {
    event.preventDefault();
    // Add mousemove and mouseup listeners to the document
    document.addEventListener("mousemove", handleMouseMoveWidth);
    document.addEventListener("mouseup", handleMouseUpWidth);
  };

  // Mouse move event to adjust left section width
  const handleMouseMoveWidth = (event) => {
    const container = document.getElementById(id);
    const minWidth = Math.floor(container.clientWidth / 6); // Minimum width for the sections
    const maxWidth = container.clientWidth - minWidth;
    const newLeftWidth = event.clientX - container.getBoundingClientRect().left;

    if (newLeftWidth > minWidth && newLeftWidth < maxWidth) {
      onChange(newLeftWidth); // Update width of left section
    }
  };

  // Mouse up event to stop horizontal resizing
  const handleMouseUpWidth = () => {
    // Remove mousemove and mouseup event listeners
    document.removeEventListener("mousemove", handleMouseMoveWidth);
    document.removeEventListener("mouseup", handleMouseUpWidth);
  };

  return (
    <>
      {isVertical ? (
        <div
          id="divider"
          className="flex select-none justify-center w-3 h-full bg-gradient-to-b from-teal-700 to-yellow-600 cursor-col-resize"
          onMouseDown={handleMouseDownWidth}
        >
          <div className="h-full border-l-2 border-dashed border-white" />
        </div>
      ) : (
        <div
          id="divider"
          className="flex select-none items-center w-full h-3 bg-gradient-to-r from-teal-700 to-yellow-600 cursor-row-resize"
          onMouseDown={handleMouseDownHeight}
        >
          <div className="w-full border-t-2 border-dashed border-white" />
        </div>
      )}
    </>
  );
}

export default Divider;
