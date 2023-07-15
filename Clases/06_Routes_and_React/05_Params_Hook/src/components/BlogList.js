import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { blogData } = props;
  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="list-group">
      {
        blogData && blogData.map((item, idx) =>
          <Link
            key={idx}
            to={`/blog/${item.id}`}
            className="list-group-item list-group-item-action"
          >
            {item.title}
          </Link>
        )
      }
    </div>

  );
};

export default BlogList;
