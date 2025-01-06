import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { db } from "../config/firebase";
import {
  doc,
  updateDoc,
  getFirestore,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

const Profile = (props) => {
  const createRef = useRef(null);
  const profileRef = useRef(null);
  const [userName,setUserName] = useState ("");
  const [password,setPassword] = useState ("");

  const handleSave = async () => {
    // console.log(props.proData)
    console.log(props.accountId, props.hasAccount);
    // props.setProData(true);
    let newData = { hasAccount: "true" };
    const userRef = doc(db, "HasProfile", props.accountId);
    await updateDoc(userRef, newData)
      .then(() => console.log("Doc updated sucessfull"))
      .catch((err) => console.log("error :", err));

    console.log("its happening", props.accountId);
    props.setHasAccount((prev) => (prev = true));
    createRef.current.style.display = "none";
    profileRef.current.style.display = "block";
    console.log(props.accountId, props.hasAccount);
  };

  const LoginPageComp = () => {
    return (
      <div className="profile" ref={profileRef} style={{ display: "none" }}>
        <div className="profileData">
          <img src="./assets/user.png" alt="error" />
          <h3>Anil Kumar</h3>
        </div>
      </div>
    );
  };

  const UserProfileComp = () => {
    return (
      <div className="create" ref={createRef}>
        <h1>Create Your Profile</h1>
        <div className="setProfile">
          <div className="mainData">
            <span>
              <input type="file" />
              <button>↑ Upload</button>
            </span>
            <input className="UserName" type="text" placeholder="Username" minLength='4'
             onChange={(e)=>setUserName (e.target.value)}/>
          </div>
          <input className="desc" type="text" placeholder="description" minLength='10' 
          onChange={(e)=>setPassword (e.target.value)}/>
          <button className="saveData" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="userProfile">
      <LoginPageComp />
      <UserProfileComp />
    </div>
  );
};

export default Profile;
