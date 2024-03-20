import { Link } from 'react-router-dom';
import '../Header.css'
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Header;
