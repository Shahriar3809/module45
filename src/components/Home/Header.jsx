import { Link, NavLink } from 'react-router-dom';
import '../Header.css'
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/about">about</Link> */}
        {/* <Link to="/contact">contact</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
