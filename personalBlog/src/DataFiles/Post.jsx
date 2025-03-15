import React,{useRef, useState} from "react";
import "./Post.css";

const Post = () => {

  const sucessRef = useRef (null);
  const [title,setTitle] = useState ("");
  const [blog,setBlog] = useState ("");
  const [image,setImage] = useState (null);
  const [imageUrl,setImageUrl] = useState ("");

  const handleSucess = ()=> {
    sucessRef.current.style.display = 'none';
  };

  const handlePublish = async ()=> {
    sucessRef.current.style.display = 'block';
    // const storageRef = ref (storage,`images/${image.name}`);
    // try {
    //   await uploadBytes (storageRef,image);
    //   const url = await getDownloadURL (storageRef);
    //   setImageUrl (url);
    //   console.log('Upload successful',url);
    // } catch (err) {
    //   console.log("upload failed :",err)
    // }
  };

  const handleImage = (e)=> {
    if (e.target.files[0]) {
      setImage (e.target.files[0]);
    }
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
      <div className="containerBox">
      <div className="file-upload flex">
        <span>Image : </span>
        <button>Upload Image</button>
        <input type="file" />
      </div>
      <div className="titleSec flex">
        <span>Title : </span>
        <input className="input" type="text" name="title" onChange={(e)=> setTitle (e.target.value)} />
      </div>
      <div className="blog flex">
        <span>Share your Experience : </span>
        <textarea className="content" type="text" name="content" onChange={(e)=> setBlog (e.target.value)}/>
      </div>
    </div>
      <div className="btn">
        <button className="publish" onClick={handlePublish}>Publish</button>
      </div>
      <Sucessful />
    </div>
  );
};

export default Post;
