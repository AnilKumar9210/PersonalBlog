import React from "react";
import "./CreateProfile.css";

const CreateProfile = () => {
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
        <button className="saveData">Save</button>
      </div>
    </div>
  );
};

export default CreateProfile;
