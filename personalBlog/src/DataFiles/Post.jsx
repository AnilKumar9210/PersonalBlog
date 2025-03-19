import React,{useContext, useEffect, useRef, useState} from "react";
import "./Post.css";
import {db,auth,storage} from '../config/firebase';
import { collection, doc, updateDoc ,getDocs, addDoc,} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Post = () => {

  const sucessRef = useRef (null);
  const [title,setTitle] = useState ("");
  const [content,setContent] = useState ("");
  const [image,setImage] = useState (null);
  const [imageUrl,setImageUrl] = useState ("");
  const [keys,setKeys] = useState ([]);
  const [Id,setId] = useState ("");

  useEffect (()=> {
    async function getData () {
    const coll = collection (db,"Blog");
    const data = await getDocs (coll);
    const id = data.docs.map ((doc)=> ({id:doc.id}));
    setId (id[0].id);
    };
    getData ();
  },[]);


  const handleSucess = ()=> {
    sucessRef.current.style.display = 'none';
  };

  const handlePublish = async ()=> {
    if (title.length < 3) {
      alert ("Enter a valid titel");
      return;
    }
    if (content.length < 20) {
      alert ("Enter a valid content");
      return;
    }
    sucessRef.current.style.display = 'block';
    const user = auth.currentUser;
    
    const storageRef = doc (db,"Blog",Id);
    await updateDoc (storageRef, {title,content})
    .then (()=>console.log("updated successfully"))
    .catch ((err)=> console.log("Error : ",err));

    setTitle ("");
    setContent ("");
    // const pair = Math.floor(1000 + Math.random() * 9000);
    // localStorage.setItem (Id,keys);
    // if (image) {
    //   const storageRef = ref (storage,`images/${image.name}`)
    // try {
    //   await uploadBytes (storageRef,image);
    //   const url = await getDownloadURL (storageRef);
    //   setImageUrl (url);

    //   await addDoc (collection (db,"Blog"), {
    //     imageUrl:url
    //   });
    // } catch (error) {
    //   console.log(error);
    // } else {
    //   await uploadBytes (storageRef,)
    // }
    // console.log(url);
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

  return (<>
  
    <div className="post">
      <h1>Share Your Experience</h1>
      <div className="containerBox">
      <div className="file-upload flex">
        <span>Image : </span>
        <button>Upload Image</button>
        <input type="file" onChange={handleImage}/>
      </div>
      <div className="titleSec flex">
        <span>Title : </span>
        <input className="input" 
        type="text" 
        name="title" 
        value={title} 
        onChange={(e)=> setTitle (e.target.value)} 
        />
      </div>
      <div className="blog flex">
        <span>Share your Experience : </span>
        <textarea className="content" 
        type="text" name="content" 
        value={content} 
        onChange={(e)=> setContent (e.target.value)}
        />
      </div>
    </div>
      <div className="btn">
        <button className="publish" onClick={handlePublish}>Publish</button>
      </div>
      <Sucessful />
    </div>
  </>);
};

export default Post;
