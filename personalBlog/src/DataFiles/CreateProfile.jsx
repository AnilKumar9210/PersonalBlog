import React, { useEffect } from "react";
import "./CreateProfile.css";

const CreateProfile = (props) => {

  const handleSave = ()=> {
    props.setProData (true)
    console.log(props.proData)
  }
  return (
    <div className="create">
        <h1>Create Your Profile</h1>
      <div className="setProfile">
        <div className="mainData">
          <span>
            <input type="file" />
            <button>↑ Upload</button>
          </span>
          <input className="UserName" type="text" placeholder="Username" />
        </div>
        <input className="desc" type="text" placeholder="description" />
        <button className="saveData" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default CreateProfile;
