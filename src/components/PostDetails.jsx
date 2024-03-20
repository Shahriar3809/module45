import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const detail = useLoaderData();
    // console.log(detail)
    return (
        <div>
            <h2>Details: {detail.title}</h2>
            <h5>Description {detail.body}</h5>
        </div>
    );
};

export default PostDetails;