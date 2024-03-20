import { Link } from "react-router-dom";


const User = ({userData}) => {
    const {name, id, username, email, phone} = userData;
    return (
        <div style={{border: '2px solid red', margin: '15px'}}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;