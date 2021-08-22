import Navbar from "./Navbar";
import {Link} from 'react-router-dom';

function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

function getVolunteers() {



}

const Volunteers = () => {

    fetch("/listvolunteers", {
        method: "GET",
        mode: "cors",
        credentials: "include"


    }).then(res => {
        res.json().then(r => {
            console.log(JSON.stringify(r));
        });
    })

        .catch((error) => {
        });

    return (
        <div className="Volunteers">
            <Navbar/>
            <div className="volTitle">
                <h1>Manage Volunteers</h1>
                <button id="add"><Link to='Volunteers/add'>+Add Volunteer</Link></button>
            </div>
            <div className="MngVolMenu">
                <label htmlFor="searchName">Search Volunteer: </label>
                <input type="text" name="searchName" id="search"/>

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
            <div className="listVol" onLoad={getVolunteers()}>




            </div>
        </div>
    );
}
 
export default Volunteers;