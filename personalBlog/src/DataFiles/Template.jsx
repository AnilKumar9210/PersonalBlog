import React, { useEffect, useState } from "react";
import "./Template.css";
import { db } from "../config/firebase";
import { collection, getDocs, updateDoc,doc , increment } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Template = () => {
  const [blogData, setBlogData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [likeCounter, setLikeCounter] = useState({});
  const [dislike, setDislike] = useState({});
  const [liked, setLiked] = useState({});
  const [disliked, setDisliked] = useState({});
  const navigate = useNavigate ();
  const bgImages = useState (['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg','image10.jpg',])

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

      setLikeCounter (initialLikes);
      setDislike (inititalDislikes);
      // console.log(blogData.likes,blogData.dislikes);
      // setLikeCounter ((prev)=> ({...prev,[blogData.id]: (blogData.likes)}));
      // setLiked ((prev)=> ({...prev,[blogData.id]: (blogData.likes !== 0 ? true : false)}));
      // setDislike ((prev)=> ({...prev,[blogData.id]: (blogData.dislikes)}));
      // setDisliked ((prev)=> ({...prev,[blogData.id]: (blogData.dislikes !== 0 ? true : false)}));
      // const index = Math.floor (Math.random () * 11);

      // console.log(index)
    }
    getData();
  }, []);

  const handleLikes = async(e) => {
    console.log(e.currentTarget.value)
    const postId = e.currentTarget.value;

    if (liked[postId]) {
      setLikeCounter((prev)=> ({...prev,[postId]: (prev[postId] || 0) - 1}));
      setLiked ((prev)=> ({...prev,[postId]:false}));

      await updateDoc (doc (db, "Blog", postId), {
        likes: likeCounter[postId]-1,
      })
      // setLiked(false);
    } else {
      setLikeCounter((prev) => ({...prev,[postId]:(prev[postId] || 0) + 1}));
      setLiked ((prev)=> ({...prev,[postId]:true}));
      // setLiked(true);

      await updateDoc (doc(db,"Blog",postId),{
        likes:likeCounter[postId] + 1,
      })

      if (disliked[postId]) {
        setDislike((prev) => ({...prev,[postId]:(prev[postId] || 0) -1}));
        setDisliked((prev)=>({...prev,[postId]:false}));

        await updateDoc (doc(db,"Blog",postId),{
          dislikes:dislike[postId] - 1,
        })
      }
    }
  };

  const handleDislikes = async(e) => {
    console.log(e.currentTarget.value,typeof e)
    const postId = e.currentTarget.value;

    if (disliked[postId]) {
      setDislike ((prev)=>({...prev,[postId]:(prev[postId] || 0) - 1}));
      setDisliked ((prev)=> ({...prev,[postId]:false}));

      await updateDoc (doc (db,"Blog",postId),{
        dislikes:dislike[postId] - 1,
      });

    } else {
      setDislike((prev) =>({...prev,[postId]:(prev[postId] || 0) + 1}));
      setDisliked ((prev)=> ({...prev,[postId]:true}));

      await updateDoc (doc (db,"Blog",postId),{
        dislikes:dislike[postId] + 1,
      });

      if (liked[postId]) {
        setLikeCounter((prev)=> ({...prev,[postId]:(prev[postId] || 0) - 1}));
        setLiked((prev)=> ({...prev,[postId]:false}));

        await updateDoc (doc (db,"Blog",postId),{
          likes:likeCounter[postId] -1
        })
      }
    }
  };

  const handleNavigate = (id)=> {
    const data = blogData.filter ((doc)=>( doc.id === id));
    console.log(data)
    navigate ('/FullBlog',{
      state:data
    })
    console.log(data)
  }

  return (
    <article className="template">
      <div className="tempBox">
        
        {blogData.map((item) => (
          <div key={item.title} className="outerBox">
            <div className="postUserInfo">
          <span>
            <img src="/src/assets/profileImg.png" alt="profile" />
          </span>
          <span>mafia madhu</span>
          <span>29 feb 2023</span>
        </div>
            <div  className="postInfo">
              <span className="nav" onClick={()=> {handleNavigate (item.id)}}>{item.title}</span>
              <span >{item.heading}</span>
            </div>
            <div className="postImg">
              <img src={`/src/backgroundImages/${item.category}/${item.imgUrl}`} alt="beach" />
            </div>
            <div className="blogContent">
              {item.content.slice (0,200)}....
              <div className="broadLine"></div>
            </div>
            <div className="react">
            <div className="actions">
              <div className="like arrange">
                <button value={item.id} onClick={handleLikes}>
                  <img src="/src/assets/thumbs-up.svg" alt="likes" />
                </button>
                <span className="likeCounter">{likeCounter[item.id] || 0}</span>
              </div>
              <div className="dislike arrange">
                <button value={item.id} onClick={handleDislikes}>
                  <img src="/src/assets/thumbs-down.svg" alt="dislikes" />
                </button>
                <span className="dislikeCounter">{dislike[item.id] || 0}</span>
              </div>
              </div>
              <div className="comment arrange">
          <button className='cmtButton'><img src="/src/assets/comment.svg" alt="" /></button>
        </div>
            </div>
            <div className="broadLine"></div>
          </div>))}
      </div>
    </article>
  );
};

export default Template;
