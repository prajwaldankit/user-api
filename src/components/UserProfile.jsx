import React from "react";

function UserProfile(props) {
  const { user } = props;
  return (
    <div className="user-profile">
      <div className="profile profile-top">
        <img
          src={user.profileImage}
          alt={"profile image of " + user.firstName}
          className="profile profile-pic"
        />
      </div>
      <div className="profile profile-contents">
        <div className="profile profile-basic-info">
          <div className="profile profile-name">
            {user.firstName} {user.lastName}
          </div>
          <div className="profile profile-email">{user.email}</div>
          <div className="profile profile-phone">{user.phone}</div>
        </div>
        <div className="profile profile-address">
          <span className="profile profile-city">{user.address.city}</span>,
          <span className="profile profile-state"> {user.address.state}</span>
          <div className="profile profile-country">{user.address.country}</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
