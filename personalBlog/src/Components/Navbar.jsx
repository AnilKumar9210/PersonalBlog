import React, {useEffect, useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { auth, GoogleProvider } from "../config/firebase";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const Navbar = (props) => {
  const [change,setChange] = useState (props.proData)
  const navigation = useNavigate ();
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      if (!auth.currentUser) {
        const result = await signInWithPopup(auth, provider);
      }
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };
  

  const handleSignOut = async () => {
    try {
      if (auth.currentUser) {
        if (confirm("Do You want to signOut")) {
          auth.signOut();
          props.signOutRef.current.style.display = 'block'
          console.log("signed out");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };


  useEffect (()=>{},[change])
  
  return (
    <nav>
      <li>
        <Link className="link img" to='/profile'>
          <img  src="./assets/profilImg.png" alt="text" />
        </Link>
      </li>
      <li>
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/eat">
          Eat
        </Link>
        <Link className="link" to="/travel">
          Travel
        </Link>
        <Link className="link" to="/work">
          Work
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li>
        <button onClick={handleGoogleSignIn}>sign-in</button>
        <button onClick={handleSignOut}>sign-out</button>
      </li>
      
      
    </nav>
  );
};

export default Navbar;
