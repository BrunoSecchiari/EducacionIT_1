import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Users.css";

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
        <Link to={`/users/${user.id}`} className="User__Link">
          <div key={index}>
            <span>{user.name} </span>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Users;
