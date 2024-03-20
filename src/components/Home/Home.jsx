import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";


const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
      <div>
        <h1>This the The Home Component</h1>
        <Header></Header>
        {/* navigation state jodi loading hoy tahole ki hobe */}
        {navigation.state === "loading" ? (
          <h1>Loading.....</h1>
        ) : (
          <Outlet></Outlet>
        )}
        <Footer></Footer>
      </div>
    );
};

export default Home;