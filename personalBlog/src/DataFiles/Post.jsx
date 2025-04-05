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
  const [heading,setHeading] = useState ("");
  const [category,setCategory] = useState ("choose");
  const [bgImages,setbgImages] = useState (['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg','image10.jpg',])

  useEffect (()=> {
    async function getData () {
    const coll = collection (db,"Blog");
    const data = await getDocs (coll);
    const id = data.docs.map ((doc)=> ({id:doc.id}));
    setId (id[0].id);

    // const userData = await getDocs (collection (db,"HasProfile"));
    // const userName = userData.docs.map ((doc)=>(doc.userName))
    // console.log(userName)
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

    const user = auth.currentUser;
    
    // const storageRef = doc (db,"Blog",Id);
    // await addDoc (storageRef, {title,content})
    // .then (()=>console.log("updated successfully"))
    // .catch ((err)=> console.log("Error : ",err));
    console.log(`${bgImages[Math.floor(Math.random ()*11)]}`)
    
    // const storageRef = ref(storage, `images/${Date.now()}-${image.name}`);
    try {
      // await uploadBytes (storageRef,image)
      // const downloadUrl = await getDownloadURL (storageRef);
      // console.log(downloadUrl,"Hello world") 
      await addDoc (collection (db,"Blog"), {
        content:content,
        title:title,
        heading:heading,
        category:category,
        imgUrl:`${bgImages[Math.floor(Math.random ()*11)]}`,
      });
      console.log(category)
      sucessRef.current.style.display = 'block';
      console.log("update sucessfully");
    }catch (err) {
      console.log("error :",err);
    }
    setTitle ("");
    setContent ("");
    setHeading ("");
    
  };

  


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
        <input type="file" onChange={(e)=> (setImage (e.target.files[0]))}/>
      </div>
      <div className="categorySec">
        <h3>Choose category :</h3>
        <select name="" id="" value={category} onChange={(e)=> (setCategory (e.target.value))} className="category">
        {/* <option value="">Choose category</option> */}
        <option value="travel">travel</option>
        <option value="work">work</option>
        <option value="eat">eat</option>
        </select>
      </div>
      <div className="box">
        <div className="titleSec flex">
          <span>Title : </span>
          <input className="input" 
          type="text" 
          name="title" 
          value={title} 
          onChange={(e)=> setTitle (e.target.value)} 
          />
        </div>
        <div className="titleSec flex">
          <span>Heading : </span>
          <input className="input" 
          type="text" 
          name="Heading" 
          value={heading} 
          onChange={(e)=> setHeading (e.target.value)} 
          />
        </div>
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
