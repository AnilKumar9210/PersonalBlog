import { useEffect, useState,useRef } from "react";
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
import {db} from './config/firebase'
import { collection,doc,getDoc, getDocs } from "firebase/firestore";

function App() {
  const signOutRef = useRef (null);

  const [hasAccount,setHasAccount] = useState (false);
  const [proData,setProData] = useState (false)
  
  useEffect (()=> {
    const checkProfile = async ()=> {
      const hasProfileRef = doc (db,"HasProfile","pSSXxyOkJVj7DUbFouyZ");
      const data = await getDoc (hasProfileRef);
      const filteredData = data.data ();
      setProData (filteredData.hasAccount)
    };

    checkProfile ();
  },[])
  
  const Title = () => {
    return <header className="title">Wander & wonder</header>;
  };

  useEffect (()=> {

  },[signOutRef]);

  const SignOutPopup = () => {
    return <div ref={signOutRef} className="popupCard" style={{display:'none'}}>
        <div className="popup">
          <span>Signed out</span>
          <button onClick={()=>signOutRef.current.style.display = 'none'}>X</button>
        </div>
      </div>
  };
  

  return (
    <>
      <Title />
      <Router>
        <Navbar props={{
          signOutRef:signOutRef,
          proData:proData,
          setProData : setProData
        }}/>
        <Routes>
          {/* <Route path="/" /> */}
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/profile" element={<Profile setProData={setProData} proData={proData}/>} />
          <Route path="/work" element={<Work />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/Eat" element={<Eat />} />
          <Route path="/Travel" element={<Travel />} />
          <Route path="/About" element={<About />} />
          <Route path="/creat-post" element={<Post/>} />
        </Routes>
      </Router>
      <SignOutPopup/>
    </>
  );
}

export default App;
