import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const details = useLoaderData();
    const {name, email} = details;
    return (
        <div>
            <h2>Details User: {name} </h2>
            <p>{email}</p>
        </div>
    );
};

export default UserDetails;