import React from "react";

const FilteredList = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { items, filter } = props;

  // Return a new array with all the items that contain the filter
  const filteredItems = items.filter((item) => item.indexOf(filter) > -1);

  // ---------------------------------------------
  // II) JSX
  // ---------------------------------------------
  return (
    <>
      {filteredItems && filteredItems.map((item, idx) => {
        const start = item.indexOf(filter);
        const end = start + filter.length;
        return (
          <p key={idx}>
            {item.slice(0, start)}
            <span className="fw-bold text-decoration-underline">
              {item.slice(start, end)}
            </span>
            {item.slice(end)}
          </p>
        );
      })}
    </>
  );
};

export default FilteredList;
