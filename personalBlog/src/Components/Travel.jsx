import React, {useState, useEffect } from 'react'
import Blog from '../DataFiles/Blog'
import {db} from '../config/firebase'
import { collection, getDocs, updateDoc,doc , increment } from "firebase/firestore";

const Travel = () => {

  const Footer = () => {
    return (
      <footer>
        <div className="about">
          <div className="box">
            <img
              src="https://www.hollywoodreporter.com/wp-content/uploads/2022/02/Daredevil-Charlie-Cox-Marvel-Everett-TCDDARE_EC009-H-2022.jpg?w=1296&h=730&crop=1"
              alt="Error"
            />
            <span className="heading">Anil Kumar</span>
          </div>
          <div className="info">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              natus, dolores facere cum id ea. Eius quibusdam voluptatum
              sapiente ipsa necessitatibus praesentium aliquid provident unde
              doloribus, vel similique odit impedit molestiae facere?
            </p>
            <a to="/profile">Read more</a>
          </div>
        </div>
        <div className="contact">
          <span className="heading">Join my Mailing list</span>
          <label htmlFor="email">Email *</label>
          <input type="email" name="email" />
          <button className="sub">Subscribe</button>
        </div>
      </footer>
    );
  };

  const [blogData,setBlogData] = useState ([]);

  useEffect(() => {
      async function getData() {
        const userRef = collection(db, "Blog");
        const fetchData = await getDocs(userRef);
        const data = fetchData.docs.map((doc) => ({
          id:doc.id,
          ...doc.data(),
        }));
        // console.log(data);
        // blogData.push(data);
        setBlogData (data)
        console.log("Hello world");
        const initialLikes = {};
        const inititalDislikes = {};
        data.forEach ((doc)=> {
          initialLikes[doc.id] = doc.likes || 0;
          inititalDislikes[doc.id] = doc.dislikes || 0;
        })
  
        // setLikeCounter (initialLikes);
        // setDislike (inititalDislikes);
        // console.log(blogData)
      }
      getData();
    }, []);
  return (
    <div>
      {blogData.map ((data)=> (data.category == 'travel' && <Blog blogData={data}/>))}
      <Footer/>
    </div>
  )
}

export default Travel
