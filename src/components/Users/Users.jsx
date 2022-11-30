import { useEffect, useState } from "react";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      {users.map((user, index) => (
        <div key={index}>
          <span>{user.name} </span>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      ))}
    </>
  );
};

export default Users;
