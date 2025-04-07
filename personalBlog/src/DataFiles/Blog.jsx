import React, { useRef, useState } from 'react'
import './Blog.css'
import { db } from "../config/firebase";
import { collection, getDocs, updateDoc,doc , increment } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; 
import Comments from './Comments';

const Blog = ({blogData}) => {
  const [likeCounter,setLikeCounter] = useState ({});
  const [dislike,setDislike] = useState ({});
  const [liked,setLiked] = useState({});
  const [disliked,setDisliked] = useState({});
  const [comment,setComment] = useState ("");
  const [cmtList,setCmtList] = useState ([]);
  const errorRef = useRef (null);
  const [showComment,setShowComment] = useState (false);
  // const usrData = useState ({...blogData})

  const toggleComment = ()=> {
    setShowComment (prev=> !prev)
  }

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

  // const handleCmtChange = (e)=> {
  //   setComment (e.target.value);
  // }

  const handlePublish = ()=> {
    if (comment.length < 3) {
    if (errorRef.current) {
      errorRef.current.style.display = 'block';
    }
  } else {
    if (errorRef.current) {
      errorRef.current.style.display = 'none';
    }
    setCmtList(prev => [...prev, comment]);
    setComment(""); // Clear the input
  }
  }

  

  return (
    <article>
      <div className="postUserInfo">
        <span><img src="/src/assets/profileImg.png" alt="profile" /></span>
        <span onClick={ ()=>(console.log(blogData.id))}>mafia madhu</span>
        <span>29 feb 2023</span>
      </div>
      <div className='postInfo'>
        <span>{blogData.title}</span>
        <span>{blogData.heading}</span>
      </div>
      <div className="postImg">
        <img src={`/src/backgroundImages/${blogData.category}/${blogData.imgUrl}`} alt={`${blogData.category}`} />
      </div>
      <div className="blogContent">
        {blogData.content}
      </div>
      <div className='margin-top'>
        {/* <hr /> */}
        <div className="line">
        </div>
      <div className="react">
        <div className='actions'>
        <div className="like arrange">
          <button onClick={handleLikes} value={blogData.id}><img src="/src/assets/thumbs-up.svg" alt="" /></button>
          <span className="likeCounter">{likeCounter[blogData.id] || blogData.likes}</span>
        </div>
        <div className="dislike arrange">
          <button onClick={handleDislikes} value={blogData.id}><img src="/src/assets/thumbs-down.svg" alt="" /></button>
          <span className="dislikeCounter">{dislike[blogData.id] || blogData.dislikes}</span>
        </div>
        </div>
        <div className="comment arrange">
          <button className='cmtButton' value={blogData.id} onClick={toggleComment}>
            <img src="/src/assets/comment.svg" alt="comments" />
            </button>
        </div>
      </div>
        <div className="line"></div>
      </div>
      {showComment && (
  <Comments
    comment={comment}
    setComment={setComment}
    cmtList={cmtList}
    handlePublish={handlePublish}
    errorRef={errorRef}
  />
)}
      <div>
        <div className="line"></div>
        
      <div className="socialMedia">
        <div className="websites">
        <span><a href="https://www.facebook.com/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg></a></span>
        <span><a href="https://x.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg></a></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg></span>
        </div>
        <span>{blogData.category}</span>
      </div>
        <div className="line"></div>
      </div>
      
    </article>
  )
}

export default Blog
