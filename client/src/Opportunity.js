import { Link } from "react-router-dom"

const Opportunity = () => {
    const opportunity = {
        title: "Cleaner",
        desc: "Due to COVID-19, we are looking for a daytime cleaner to disinfect common areas",
        date: "10/16/2020",
        center: "Northside Center"
    }
    return ( 
        <div className="opportunity">
            <h3>{opportunity.title}</h3>
            <p>Description: {opportunity.desc}</p>
            <p>Date: {opportunity.date}</p>
            <p>{opportunity.center}</p>
            <button id="OpViewMatch">View Matches</button>
            <button id="OpEdit"><Link to="/Opportunities/edit">Edit</Link></button>
            <button id="OpDelete">Delete</button>
        </div>
    );
}
 
export default Opportunity;