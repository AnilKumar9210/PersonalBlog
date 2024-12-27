import React,{useRef} from "react";
import "./Post.css";

const Post = () => {

  const sucessRef = useRef (null);

  const handleSucess = ()=> {
    sucessRef.current.style.display = 'none';
  };

  const handlePublish = ()=> {
    sucessRef.current.style.display = 'block';
  }


  const Sucessful = () => {
    return (
      <div ref={sucessRef} style={{display:'none'}}>
      <div className="sucess" >
        <span>sucessfully published</span>
        <button onClick={handleSucess}>X</button>
      </div>
      </div>
    );
  };

  return (
    <div className="post">
      <h1>Share Your Experience</h1>
      <div className="file-upload flex">
        <span>Image : </span>
        <button>Upload Image</button>
        <input type="file" />
      </div>
      <div className="titleSec flex">
        <span>Title : </span>
        <input className="input" type="text" name="title" />
      </div>
      <div className="blog flex">
        <span>Share your Experience : </span>
        <textarea className="content" type="text" name="content" />
      </div>
      <div className="btn">
        <button className="publish" onClick={handlePublish}>Publish</button>
      </div>

      <Sucessful />
    </div>
  );
};

export default Post;
