import React from "react";
import ListItem from "./ListItem";

function List(props) {
  let { users } = props;
  return (
    <ul>
      {users.map((user, index) => (
        <ListItem key={index} user={user} handleClick={props.handleClick} />
      ))}
    </ul>
  );
}

export default List;
