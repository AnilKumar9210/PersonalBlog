import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {auth , GoogleProvider} from '../config/firebase'
import { signInWithPopup,GoogleAuthProvider,signOut } from 'firebase/auth'


const Navbar = () => {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            if (!auth.currentUser) {
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                console.log("User Info:", user);
            }
        } catch (error) {
          console.error("Error during sign-in:", error.message);
        }
      };

      const handleSignOut = async () => {
        try {
            if (auth.currentUser) {
               if(confirm ("Do You want to signOut")) {
                   auth.signOut ();
                   console.log ("signed out")
               }
            }
        } catch (err) {
            console.error (err);
        }
      };
  return (
    <nav>
        <li>
            <Link className='link profile' to="/profile">
                <img src='./assets/profilImg.png' alt="text" />
            </Link>
        </li>
        <li>
        <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/eat">Eat</Link>
        <Link className='link' to="/travel">Travel</Link>
        <Link className='link' to="/about">About</Link>
        </li>
        <li>
            <button onClick={handleGoogleSignIn}>sign-in</button>
            <button onClick={handleSignOut}>sign-out</button>
        </li>
    </nav>
  )
}

export default Navbar
