import React from "react";

function ListItem(props) {
  const { user } = props;
  return (
    <li className="list-item" onClick={e => props.handleClick(e, user.id - 1)}>
      <img
        className="list-item profile-pic"
        src={user.profileImage}
        alt={"profile image of " + user.firstName}
      />
      {user.firstName} {user.lastName}
    </li>
  );
}

export default ListItem;
