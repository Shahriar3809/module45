import { Link } from "react-router-dom";


const Post = ({post}) => {
    console.log(post)
    const {title, id, body} = post;
    return (
      <div style={{ border: "2px solid green", margin: "10px" }}>
        <h3>{title}</h3>
        <p>{body}</p>
        <Link to={`/posts/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    );
};

export default Post;