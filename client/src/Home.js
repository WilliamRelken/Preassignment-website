import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
const Home = () => {
    return (
    <div className="Home">
        <Navbar/>
        <h2>Welcome to the VMS!</h2> 
        <p>The Volunteer Management System (VMS) is a web-based application that allows a nonprofit organization to collect volunteers’ information, track their participation in activities, and produce reports on their contributions</p>
        <button><Link to='/Volunteers'>Manage Volunteers</Link></button>
        <button><Link to='/Opportunities'>Manage Opportunites</Link></button>
    </div>
    );
}
 
export default Home;