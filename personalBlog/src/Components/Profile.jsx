import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { doc, updateDoc,collection,getDocs } from "firebase/firestore";

const Profile = () => {
  const createRef = useRef(null);
  const profileRef = useRef(null);
  const [accDetails,setAccDetails] = useState ([]);
  const [desc,setDesc] = useState ("");
  const [userName,setUserName] = useState ("");
  const [id,setId] = useState ("");

  //fetching user details 
  useEffect(() => {
      async function getProfile() {
        const userRef = collection(db, "HasProfile");
        const fetchData = await getDocs (userRef);
        const userDetails = fetchData.docs.map (doc=> ({
          id:doc.id,
          ...doc.data ()
        }));
        console.log(userDetails)
        accDetails.push (userDetails[0]);
        // accDetails[0].push (userRef.id ());
        console.log(accDetails[0].hasAccount);
      }
      getProfile();
    }, []);


    //updating user details in database
    const handleSave = async ()=> {
      // console.log(desc)
      accDetails[0].description = desc;
      accDetails[0].userName = userName;
      accDetails[0].hasAccount = true;
      const userRef = doc (db,'HasProfile',accDetails[0].id);
      await updateDoc (userRef,accDetails[0])
      .then (()=>console.log('sucessfully updated'))
      .catch ((err)=>console.log('error occured :',err))
      console.log(accDetails[0]);
    }
  // const handleSave = async () => {
  //   // console.log(props.proData)
  //   console.log(props.accountId, props.hasAccount);
  //   // props.setProData(true);
  //   let newData = { hasAccount: "true" };
  //   const userRef = doc(db, "HasProfile", props.accountId);
  //   await updateDoc(userRef, newData)
  //     .then(() => console.log("Doc updated sucessfull"))
  //     .catch((err) => console.log("error :", err));

  //   console.log("its happening", props.accountId);
  //   props.setHasAccount((prev) => (prev = true));
  //   createRef.current.style.display = "none";
  //   profileRef.current.style.display = "block";
  //   console.log(props.accountId, props.hasAccount);
  //   setUserData([
  //     ...userData,
  //     {
  //       name: userName,
  //       pass: password,
  //       account: props.hasAccount,
  //       id: uuidv4(),
  //     },
  //   ]);
  // };

  

  const LoginPageComp = () => {
    return (
      <div className="profile" ref={profileRef} style={{ display: "none" }}>
        <div className="profileData">
          <img src="./assets/user.png" alt="error" />
          <h3>Anil Kumar</h3>
          {accDetails[0].map((info) => {
            return (
              <div key={info.id} className="userData">
                <div className="userName">{info.userName}</div>
                <div className="pass">{info.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const handleUserPass = (e) => {
    setDesc(e.target.value);
    console.log(desc)
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
    console.log(userName)
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
              // onChange={handleUserName}
              onChange = {e=>setUserName (e.target.value)}
              // autoFocus
            />
          </div>
          <input
            className="desc"
            type="text"
            placeholder="description"
            value={desc}
            onChange={(e)=>setDesc (e.target.value)}
            // onChange={handleUserPass}
           
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
      {/* <LoginPageComp /> */}
      <UserProfileComp />
    </div>
  );
};

export default Profile;
