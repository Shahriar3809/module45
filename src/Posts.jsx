import { useLoaderData } from "react-router-dom";
import Post from "./components/Post";
import './components/User.css';

const Posts = () => {
    const allpost = useLoaderData();
    // console.log(allpost)
    return (
        <div>
            <h1>This is Post: </h1>
            <div className="container">
                {
                    allpost.map((post)=> <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;