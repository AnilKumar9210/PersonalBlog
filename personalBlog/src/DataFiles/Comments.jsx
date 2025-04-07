import React from 'react'

const Comments = ({ comment, setComment, cmtList, handlePublish, errorRef }) => {
  return (
    <div className="comments">
      <div className="heading">Comments</div>
      <div className="line"></div>
      <div className="write">
        <textarea
          name="cmts"
          placeholder="Write your opinion ...."
          minLength={4}
          id=""
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          cols={40}
          value={comment}
        />
        <div className="error" ref={errorRef}>
          Please enter a valid comment...
        </div>
        <button className="publishBtn" onClick={handlePublish}>
          publish
        </button>
      </div>
      <div className="line"></div>
      <>
        {cmtList.map((item,index) => {
          return (
            <div className="opinions" key={index}>
              <div className="cmtUsers">
                <span>
                  <img src="/src/assets/profileImg.png" alt="profile" />
                </span>
                <span>unknown user</span>
              </div>
              <div className="cmtContent">
                <span>{item}</span>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};


export default Comments
