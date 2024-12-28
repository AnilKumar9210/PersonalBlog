import React, { useRef } from 'react'
import './Profile.css'

const Profile = (props) => {

  const createRef = useRef (null);
  const profileRef = useRef (null);

  const handleSave = ()=> {
    console.log(props.proData.hasAccount)
    if (!props.proData) {
      props.setProData (true)
      createRef.current.style.display = 'none';
      profileRef.current.style.display = 'block';
    }
  };


  return (
  <div className='userProfile'>

    <div className='profile' ref={profileRef} style={{display:'none'}}>
      <div className="profileData">
        <img src="./assets/user.png" alt="error" />
        <h3>Anil Kumar</h3>
      </div>
    </div>

    <div className="create" ref={createRef}>
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
    
  </div>
  )
}

export default Profile
