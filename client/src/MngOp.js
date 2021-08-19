import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Opportunities = () => {
    return ( 
        <div className="Opportunities">
            <Navbar/>
            <div className="opTitle">
                <h1>Manage Opportunites</h1>
                <button id="add"><Link to="/Opportunities/add">+Add Opportunity</Link></button>
            </div>
            <div className="MngOpMenu">
                <label htmlFor="searchOp">Search Opportunity: </label>
                <input type="text" name="searchOp" id="search" /> 

                <label htmlFor="filterDrop">Filter: </label>
                <select name="filterDrop" id="filterDrop">
                    <option value="1">Most Recent</option>
                    <option value="2">By Center</option>
                </select>
                
                <input type="checkbox" id="viewMatches" name="viewMatches"/>
                <label htmlFor="viewMatches">View Matches</label>
               
            </div>
            <div className="listOp">
                <h1>Placeholder for List of Opportunities</h1>
            </div>
        </div>
    );
}
 
export default Opportunities;