/* eslint-disable react/prop-types */
function Axis({ top = 0, left = 0, isCtrlPressed = false }) {
  function isChangeTop(dependency) {
    if (dependency) {
      return 0;
    } else {
      return top;
    }
  }
  function isChangeLeft(dependency) {
    if (dependency) {
      return 0;
    } else {
      return left;
    }
  }

  return (
    <div className="select-none pointer-events-none">
      <hr
        style={{ top: isChangeTop(isCtrlPressed) }}
        className="fixed border-opacity-50 w-screen border-t-2 broder border-dashed border-t-rose-700 border-b-0 border-l-0 border-r-0"
      />
      <div
        style={{ left: isChangeLeft(isCtrlPressed) }}
        className=" fixed border-opacity-50 w-fit h-screen border-l-2 broder border-dashed border-l-green-700 border-b-0 border-t-0 border-r-0"
      />
    </div>
  );
}

export default Axis;
