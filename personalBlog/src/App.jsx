import { useEffect, useState, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { auth } from "./config/firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Eat from "./Components/Eat";
import Travel from "./Components/Travel";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Post from "./DataFiles/Post";
import CreateProfile from "./DataFiles/CreateProfile";
import { db } from "./config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

function App() {
  const signOutRef = useRef(null);
  const [proData, setProData] = useState(false);
  const navigate = useNavigate ()
  const [accDetails, setAccDetails] = useState([]);
  const [title,setTitle] = useState ("");
    const [content,setContent] = useState ("");

  useEffect(() => {
    async function getProfile() {
      const userRef = collection(db, "HasProfile");
      const fetchData = await getDocs (userRef);
      const userDetails = fetchData.docs.map (doc=>({
        id:doc.id,
        ...doc.data ()
      }));
      accDetails.push (userDetails[0])
      console.log(typeof accDetails[0].description,"ehlo")
    }
    getProfile();
  }, []);

  const Title = () => {
    return <header className="title">Wander & wonder</header>;
  };


  const handleCreateBlog = ()=> {
      // console.log(hasAccount)
      if (accDetails[0].hasAccount) {
        navigate ('/create-post')
      } else {
        navigate ('/profile')
      }
    }
  

  // useEffect(() => {
  //   handleCreateBlog ()
  // }, [signOutRef,accDetails]);

  const SignOutPopup = () => {
    return (
      <div ref={signOutRef} className="popupCard" style={{ display: "none" }}>
        <div className="popup">
          <span>Signed out</span>
          <button onClick={() => (signOutRef.current.style.display = "none")}>
            X
          </button>
        </div>
      </div>
    );
  };

  const CreateBlog = ()=>{
    return <button className="createBlog" onClick={handleCreateBlog}>
    <div className="sign">+</div>
    <div className="text">Create</div>
  </button>
  }

  

  return (
    <>
      <Title />
      {/* <Router> */}
        <Navbar
          props={{
            signOutRef: signOutRef,
            proData: proData,
            setProData: setProData,
          }}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route path="/work" element={<Work />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Eat" element={<Eat />} />
          <Route path="/Travel" element={<Travel />} />
          <Route path="/About" element={<About />} />
          <Route path="/create-post" element={<Post />} />
        </Routes>
      <SignOutPopup />
      <CreateBlog/>
    </>
  );
}

export default App;
