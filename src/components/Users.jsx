import { useLoaderData } from "react-router-dom";
import User from "./User";
import './User.css'
const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
      <div className="container">
        {users.map((user) => (
          <User key={user.id} userData={user}></User>
        ))}
      </div>
    );
};

export default Users;