import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  });

  return (
    <>
      <span>{user.name} </span>
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </>
  );
};

export default User;
