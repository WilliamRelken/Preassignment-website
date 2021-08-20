import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const AddOpportunities = () => {
    const opportunity = {
        title: "",
        desc: "",
        center: "",
        date: ""
    }
    return (  
        <div className="AddOp">
            <Navbar/>
            <h1>Add an Opportunity</h1>
            <button onClick={() => console.log(opportunity)}>Log</button>
            <div className="addOpForm">
                <label htmlFor="opTitle" ><h3>Opportunity Title:</h3></label>
                <input type="text" name="opTitle" id="opTitle" onChange={(e) => opportunity.title = e.target.value}/><br/>
             
                <label htmlFor="opDesc"><h3>Description:</h3></label>
                <textarea name="opDesc" id="opDesc" cols="80" rows="8" onChange={(e) => opportunity.desc = e.target.value}></textarea><br/>

                <label htmlFor="opCenter"><h3>Center:</h3></label>
                <select name="opCenter" id="opCenter" onChange={(e) => opportunity.center = e.target.value}>
                    <option value="Northside Center">Northside Center</option>
                    <option value="Eastside Center">Eastside Center</option>
                    <option value="Southside Center">Southside Center</option>
                    <option value="Westside Center">Westside Center</option>
                </select>

                <label htmlFor="opDate"><h3>Date:</h3></label>
                <input type="date" name="opDate" id="opDate" onChange={(e) => opportunity.date = e.target.value}/>
            </div>
            <button id="cancelOpButton"><Link to="/Opportunities">Cancel</Link></button>
            <button id="addOpButton">Submit</button>
        </div>
    );
}
 
export default AddOpportunities;