import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
const Volunteers = () => {
    return ( 
        <div className="Volunteers">
            <Navbar/>
            <h1>Manage Volunteers</h1>
            <div className="MngVolMenu">
                <label htmlFor="searchName">Search Volunteer: </label>
                <input type="text" name="searchName" id="searchName" /> 

                <label htmlFor="filterDrop">Filter: </label>
                <select name="filterDrop" id="filterDrop">
                    <option value="1">Approved/Pending Approval</option>
                    <option value="2">Approved</option>
                    <option value="3">Pending Approval</option>
                    <option value="4">Disapproved</option>
                    <option value="5">Inactive</option>
                    <option value="6">All</option>
                </select>
               <button id="addVol"><Link to='Volunteers/add'>+Add Volunteer</Link></button>
            </div>
            <div className="listVol">
                <h1>Placeholder for List of Volunteers</h1>
            </div>
        </div>    
    );
}
 
export default Volunteers;