import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)
    return (
      <div>
        <h1>Oops!!!</h1>
        <h2>{error.status || error.statusText}</h2>
        <Link to='/'>
          <button>Go to Home</button>
        </Link>
      </div>
    );
};

export default ErrorPage;