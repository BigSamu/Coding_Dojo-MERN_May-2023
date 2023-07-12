import React, { useState } from "react";

import Input from "./Input";
import FilteredList from "./FilteredList";

const Wrapper = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const {items} = props
  const [filter, setFilter] = useState("");

  // ---------------------------------------------
  // II) JSX
  // ---------------------------------------------
  return (
    <div className="mt-3">
      <h2>My Filtered List</h2>

      <Input filter={filter} setFilter={setFilter} />
      <hr />
      <FilteredList
        filter={filter}
        items={items.filter((item) => item.indexOf(filter) > -1)}
      />
    </div>
  );
};

export default Wrapper;
