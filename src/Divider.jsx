/* eslint-disable react/prop-types */
function Divider({ setTopHeight }) {
  // Mouse down event to start resizing
  const handleMouseDown = (event) => {
    event.preventDefault();
    // Add mousemove and mouseup listeners to the document
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Mouse move event to adjust top section height
  const handleMouseMove = (event) => {
    const container = document.getElementById("mainContainer");
    const minHeight = 50; // Minimum height for the top section
    const maxHeight = container.clientHeight - minHeight;
    const newTopHeight = event.clientY - container.getBoundingClientRect().top;

    // Ensure the height stays within the bounds
    if (newTopHeight > minHeight && newTopHeight < maxHeight) {
      setTopHeight(newTopHeight);
    }
  };

  // Mouse up event to stop resizing
  const handleMouseUp = () => {
    // Remove mousemove and mouseup event listeners
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      id="divider"
      className="flex items-center w-full h-3 bg-gradient-to-r from-teal-700 to-yellow-600 cursor-row-resize"
      onMouseDown={handleMouseDown}
    >
      <div className="w-full border-t-2 border-dashed border-white" />
    </div>
  );
}

export default Divider;
