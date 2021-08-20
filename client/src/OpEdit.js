import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const OpportunityEdit = () => {
    const opportunity = {
        title: "Cleaner",
        desc: "Due to COVID-19, we are looking for a daytime cleaner to disinfect common areas",
        center: "Northside Center",
        date: "2020-10-16"
    }
    return (  
        <div className="VolunteerEdit">
            <Navbar/>
            <h1>{opportunity.title}</h1>
            <div className="addOpForm">
                <button onClick={() => console.log(opportunity)}>Log</button>
                <label htmlFor="opTitle" ><h3>Opportunity Title:</h3></label>
                <input type="text" name="opTitle" id="opTitle" defaultValue={opportunity.title} onChange={(e) => opportunity.title = e.target.value}/><br/>
             
                <label htmlFor="opDesc"><h3>Description:</h3></label>
                <textarea name="opDesc" id="opDesc" cols="80" rows="8" defaultValue={opportunity.desc} onChange={(e) => opportunity.desc = e.target.value}></textarea><br/>

                <label htmlFor="opCenter"><h3>Center:</h3></label>
                <select name="opCenter" id="opCenter" defaultValue={opportunity.center} onChange={(e) => opportunity.center = e.target.value}>
                    <option value="Northside Center">Northside Center</option>
                    <option value="Eastside Center">Eastside Center</option>
                    <option value="Southside Center">Southside Center</option>
                    <option value="Westside Center">Westside Center</option>
                </select>

                <label htmlFor="opDate"><h3>Date:</h3></label>
                <input type="date" name="opDate" id="opDate" defaultValue={opportunity.date} onChange={(e) => opportunity.date = e.target.value}/>
            </div>
            <button id="cancelOpButton"><Link to="/Opportunities">Cancel</Link></button>
            <button id="addOpButton">Save</button>
        </div>
    );
}
 
export default OpportunityEdit;