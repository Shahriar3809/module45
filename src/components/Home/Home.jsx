import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";


const Home = () => {
    return (
        <div>
            <h1>This the The Home Component</h1>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;