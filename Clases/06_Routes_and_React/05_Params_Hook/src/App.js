import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Blog from "./components/Blog";
import BlogList from "./components/BlogList";

const App = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const [blogData, setBlogData] = useState([
    { id: 1, title: "First Blog", content: "This is the first blog post" },
    { id: 2, title: "Second Blog", content: "This is the second blog post" },
    { id: 3, title: "Third Blog", content: "This is the third blog post" },
  ]);

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="App bg-light p-3 text-center">
      <h1>useParams Example</h1>
      <hr />
      {/* Create the routes */}
      <Routes>
        <Route path="/" element={<BlogList blogData={blogData}/>} />
        <Route path="/blog/:postId" element={<Blog blogData={blogData} />} />
        {/* .... */}
      </Routes>
    </div>
  );
};

export default App;
