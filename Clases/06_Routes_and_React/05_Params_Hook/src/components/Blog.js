import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Blog = (props) => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const { blogData } = props;
  const navigate = useNavigate();
  // const params = useParams();
  // const postId = params.postId;
  // Above same as:
  const { postId } = useParams();
  const blogPost = blogData.find((item) => item.id === Number(postId));

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------
  const handleOnClickGoBack = () => {
    navigate("/");
  };
  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="card my-4">
      <div className="card-body">
        <h2 className="card-title">{blogPost.title}</h2>
        <p className="card-text">{blogPost.content}</p>
        <button className="btn btn-primary" onClick={handleOnClickGoBack}> Go back</button>
      </div>
    </div>
  );
};

export default Blog;
