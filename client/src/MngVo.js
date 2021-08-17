import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
const Volunteers = () => {
    return ( 
        <div className="Volunteers">
            <Navbar/>
            <h1>Manage Volunteers Component Placeholder</h1>
            <label htmlFor="selectList">Filter: </label>
            <select name="selectList" id="selectList">
                <option value="1">Approved/Pending Approval</option>
                <option value="2">Approved</option>
                <option value="3">Pending Approval</option>
                <option value="4">Disapproved</option>
                <option value="5">Inactive</option>
                <option value="6">All</option>
            </select>
            <button><Link to='Volunteers/add'>+Add Volunteer</Link></button>
        </div>    
    );
}
 
export default Volunteers;