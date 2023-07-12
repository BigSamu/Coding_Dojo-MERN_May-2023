import React from "react";

const FilteredList = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  const { filter, items } = props;
  // ---------------------------------------------
  // II) JSX
  // ---------------------------------------------
  return (
    <>
      {items && items.map((item, i) => {
          const start = item.indexOf(filter);
          const end = start + filter.length;
          return (
            <p key={i}>
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
