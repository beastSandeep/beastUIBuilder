/* eslint-disable react/prop-types */
function Tabs({ data = [], onClick, children }) {
  let activeTab = "";

  function clickHandler(e) {
    activeTab = e.target.id.split("-")[1];
    onClick(activeTab);
  }

  return (
    <main className="p-2">
      <section className="flex gap-2">
        {data.map((el) => (
          <button
            style={{ border: el.name === activeTab ? "1px solid red" : "none" }}
            className="bg-gray-300 rounded-lg px-4 py-2 font-medium text-black select-none"
            id={`Tabs-${el.name}`}
            key={el.name}
            onClick={clickHandler}
          >
            {el.name}
          </button>
        ))}
      </section>
      {children}
    </main>
  );
}

export default Tabs;
