import React, { useEffect , useState } from 'react'
import './Template.css'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Template = () => {

  const [blogData,setBlogData] = useState ([]);
  const [userData,setUserData] = useState ([]);

  useEffect (()=> {
    async function getData () {
      const userRef = collection (db,"Blog");
      const fetchData = await getDocs (userRef);
      const data = fetchData.docs.map ((doc)=> ({
        id:doc.id,
        ...doc.data ()}));
      // console.log(data);
      blogData.push (data)
      console.log("Hello world")
      console.log(blogData)
      
    }
    getData ();
  },[])

  return (
    <article className='template'>
      <div className="tempBox">
      <div className="postUserInfo">
        <span><img src="/src/assets/profileImg.png" alt="profile" /></span>
        <span>mafia madhu</span>
        <span>29 feb 2023</span>
      </div>
      {blogData[0].map ((item)=> (<><div key={item.title} className='postInfo'>
        <span>{item.heading}</span>
        <span>{item.title}</span>
      </div>
      <div className="postImg">
        <img src="/src/assets/default.jpg" alt="beach" />
      </div>
      <div className="blogContent">
        {item.content}
      </div></>))}
      </div>   
    </article>
  )
}

export default Template
