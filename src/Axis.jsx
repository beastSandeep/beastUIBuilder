/* eslint-disable react/prop-types */
function Axis({ top = "0", left = "0" }) {
  return (
    <div className=" select-none">
      <hr
        style={{ top }}
        className="absolute border-opacity-25 w-screen border-t-2 broder border-dashed border-t-rose-700 border-b-0 border-l-0 border-r-0"
      />
      <div
        style={{ left }}
        className="absolute  border-opacity-25 w-fit h-screen border-l-2 broder border-dashed border-l-green-700 border-b-0 border-t-0 border-r-0"
      />
    </div>
  );
}

export default Axis;
