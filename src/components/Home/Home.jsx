import { Outlet } from "react-router-dom";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <h1>This the The Home Component</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;