import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
const Volunteers = () => {
    return ( 
        <div className="Volunteers">
            <Navbar/>
            <div className="volTitle">
                <h1>Manage Volunteers</h1>
                <button id="add"><Link to='Volunteers/add'>+Add Volunteer</Link></button>
            </div>
            <div className="MngVolMenu">
                <label htmlFor="searchName">Search Volunteer: </label>
                <input type="text" name="searchName" id="search" /> 

                <label htmlFor="filterDrop">Filter: </label>
                <select name="filterDrop" id="filterDrop">
                    <option value="1">Approved/Pending Approval</option>
                    <option value="2">Approved</option>
                    <option value="3">Pending Approval</option>
                    <option value="4">Disapproved</option>
                    <option value="5">Inactive</option>
                    <option value="6">All</option>
                </select>
                <input type="checkbox" id="viewMatches" name="viewMatches"/>
                <label htmlFor="viewMatches">View Matches</label>
               
            </div>
            <div className="listVol">
                <h1>Placeholder for List of Volunteers</h1>
            </div>
        </div>    
    );
}
 
export default Volunteers;