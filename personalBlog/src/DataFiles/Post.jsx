import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="file-upload flex">
        <span>Image : </span>
        <button>Upload File</button>
        <input type="file"/>
      </div>
      <div className="titleSec flex">
        <span>Title : </span>
        <input type="text" name="title" />
      </div>
      <div className="blog flex">
        <span>Share your Experience : </span>
        <textarea type="text" name="content"/>
      </div>
    </div>
  );
};

export default Post;
