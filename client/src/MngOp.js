import Navbar from "./Navbar";
import Opportunity from "./Opportunity";
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
                
            </div>
            <div className="listOp">
                <Opportunity/>
            </div>
        </div>
    );
}
 
export default Opportunities;