import { useEffect, useState } from "react";

const User = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  });

  return (
    <>
      <div>{user.name}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
    </>
  );
};

export default User;
