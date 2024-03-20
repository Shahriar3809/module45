

const User = ({userData}) => {
    const {name, id, username, email, phone} = userData;
    return (
        <div style={{border: '2px solid red', margin: '15px'}}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;