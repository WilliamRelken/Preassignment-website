import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Silicon Spiders - VMS</h1>
        <div className="links">
          <Link to="/Volunteers">Manage Volunteers</Link>
          <Link to="/Opportunities">Manage Opportunities</Link>
          <Link to="/" style={{
              color: "white",
              backgroundColor: 'red',
              borderRadius: '8px'
          }}>Logout</Link>
        </div>
      </nav>
    );
  }
  export default Navbar;