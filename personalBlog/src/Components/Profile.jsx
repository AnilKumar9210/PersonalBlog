import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { doc, updateDoc } from "firebase/firestore";

const Profile = (props) => {
  const createRef = useRef(null);
  const profileRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([{}]);

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
    setUserData([
      ...userData,
      {
        name: userName,
        pass: password,
        account: props.hasAccount,
        id: uuidv4(),
      },
    ]);
  };

  const LoginPageComp = () => {
    return (
      <div className="profile" ref={profileRef} style={{ display: "none" }}>
        <div className="profileData">
          <img src="./assets/user.png" alt="error" />
          <h3>Anil Kumar</h3>
          {userData.map((info) => {
            return (
              <div key={info.id} className="userData">
                <div className="userName">{info.name}</div>
                <div className="pass">{info.pass}</div>
                <div className="acc">{info.account}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const handleUserPass = (e) => {
    setPassword(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
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
              value={userData.name}
              onChange={() => handleUserName}
              autoFocus
            />
          </div>
          <input
            className="desc"
            type="text"
            placeholder="description"
            value={userData.pass}
            onChange={() => handleUserPass}
           
          />
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
