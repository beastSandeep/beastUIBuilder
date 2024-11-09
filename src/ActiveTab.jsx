/* eslint-disable react/prop-types */
import { data_tabs } from "./constants";

function ActiveTab({ activeTab = "" }) {
  return (
    <>
      {activeTab === data_tabs[0].name && (
        <section>{data_tabs[0].name}</section>
      )}
      {activeTab === data_tabs[1].name && (
        <section>{data_tabs[1].name}</section>
      )}
    </>
  );
}

export default ActiveTab;
