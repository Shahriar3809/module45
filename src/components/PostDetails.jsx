import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const detail = useLoaderData();
    // destructure params of details
    const {id} = useParams();
    console.log(id)


    // console.log(detail)
    const navigate = useNavigate();
    const handleGoBack = () => {
        //-1 means previous one
        navigate(-1)
    }
    return (
        <div>
            <h2>Details: {detail.title}</h2>
            <h5>Description {detail.body}</h5>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;