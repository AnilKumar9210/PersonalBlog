import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { Form, useFetcher } from "react-router-dom";

const Profile = () => {
  const createRef = useRef(null);
  const profileRef = useRef(null);
  const [accDetails, setAccDetails] = useState([]);
  const [userName, setUserName] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [bool, setBool] = useState(false);

  //fetching user details
  useEffect (()=>{},[bool])
  useEffect(() => {
    async function getProfile() {
      const userRef = collection(db, "HasProfile");
      const fetchData = await getDocs(userRef);
      const userDetails = fetchData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAccDetails([userDetails[0]]);
      console.log(typeof accDetails,accDetails)
      setBool (userDetails[0].hasAccount);
      // console.log(accDetails[0]);
    }
    getProfile();
  }, []);

  //updating user details in database
  const handleSave = async () => {
    // console.log(desc)
    if (accDetails.length === 0 ) {
      alert ("please enter login details first");
      return;
    }
    accDetails[0].description = desc;
    accDetails[0].userName = userName;
    accDetails[0].hasAccount = true;
    const userRef = doc(db, "HasProfile", accDetails[0].id);
    await updateDoc(userRef, accDetails[0])
      .then(() => console.log("sucessfully updated"))
      .catch((err) => console.log("error occured :", err));
    console.log(accDetails[0]);
    setBool (true);
    alert("Profile created successfully");
  };

  const LoginPageComp = () => {
    return (
      <div className="profile" ref={profileRef}>
        <div className="profileData">          
          {accDetails.length > 0 && (<>
          <div className="profileName">
            <img src='src/assets/user.png' alt="error" />
            <span>{accDetails[0].userName}</span>
          </div>
              <div key={accDetails[0].id} className="userData">
                <li className="userName">{accDetails[0].userName}</li>
                <li className="pass">{accDetails[0].description}</li>
              </div>
            </>)
          }
        </div>
        <hr />
      </div>
    );
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
    console.log(desc);
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
            <input
              className="UserName"
              type="text"
              placeholder="Username"
              value={userName}
              // onChange={(e)=> {setUserName (e.target.value)}}
              onChange={handleUserName}
              autoFocus
            />
          </div>
          <input
            className="desc"
            type="text"
            placeholder="description"
            value={desc}
            // onChange={(e)=> {setDesc (e.target.value)}}
            onChange={handleDesc}
            autoFocus
          />
          <button className="saveData" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    );
  };

  return <div className="userProfile">{bool? <LoginPageComp /> : <UserProfileComp />}</div>
};

export default Profile;
