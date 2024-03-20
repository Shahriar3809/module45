import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    console.log(post)
    const {title, id, body} = post;
    const navigate = useNavigate()
    const handleShowDetails = () => {
      navigate(`/posts/${id}`);
    }

    return (
      <div style={{ border: "2px solid green", margin: "10px" }}>
        <h3>{title}</h3>
        <p>{body}</p>
        <Link to={`/posts/${id}`}>
          <button>Details</button>
        </Link>
        <button onClick={handleShowDetails}>Click for Details</button>
      </div>
    );
};

export default Post;