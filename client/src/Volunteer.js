import { Link } from "react-router-dom"

const Volunteer = (props) => {
    //const volunteer = props;
    const volunteer = {
        firstName: "Ricardo",
        lastName: "Carrasco",
        approvalStatus: "Active"
    }
    return (  
        <div className="Volunteer">
            <h3>{volunteer.firstName + " " + volunteer.lastName}</h3>
            <p>Approval Status: {volunteer.approvalStatus}</p>

            <button id="VolViewMatch">View Matches</button>
            <button id="VolEdit"><Link to="/Volunteers/edit">Edit</Link></button>
        </div>
    );
}
 
export default Volunteer;