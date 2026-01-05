import React from "react";

function UserProfile(props) {
  let { name, age, bio } = props;
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>
      </div>
    </div>
  );
}

export default UserProfile;
