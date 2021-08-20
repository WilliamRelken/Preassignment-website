import Navbar from "./Navbar";
import { Link } from "react-router-dom";
//TO DO: ALLOW INPUT OF A VOLUNTEER OBJECT AS A PROP
const VolunteerEdit = () => {
    let volunteer = {
        firstName: "Ricardo",
        lastName: "Carrasco",
        userName: "Admin",
        password: "pass",
        northCenter: true,
        eastCenter: true,
        southCenter: false,
        westCenter: true,
        skills: "Can Drive",
        address: "UNF Dr",
        homePhone: "9041119999",
        workPhone: "9041119999",
        cellPhone: "9041119999",
        email: "n01359099@unf.edu",
        education: "BS IS",
        licenses: "Drivers",
        eName: "Aubrey",
        eHomePhone: "Graham",
        eWorkPhone: "9042329023",
        eEmail: "drake@gmail.com",
        eAddress: "Toronto Rd",
        copyDrivers: true,
        copySocial: true,
        approvalStatus: "Inactive",
    }
    const Log = () =>{
        console.log(volunteer);
    }
    return (  
        <div className="VolunteerEdit">
            <Navbar/>
            <h1>{volunteer.firstName + ' ' + volunteer.lastName}</h1>
            <div className="VolForm">
                <button onClick={Log}>Log</button>

                <h3>Basic Info</h3>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" defaultValue={volunteer.firstName} onChange={(e) => volunteer.firstName = e.target.value}/>
                <br/>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" defaultValue={volunteer.lastName} onChange={(e) => volunteer.lastName = e.target.value}/>
                <br/>
                <label htmlFor="userName">Username: </label>
                <input type="text" id="userName" defaultValue={volunteer.userName} onChange={(e) => volunteer.userName = e.target.value}/>
                <br/>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" defaultValue={volunteer.password} onChange={(e) => volunteer.password = e.target.value}/>
                <br/>
                <span className="centers">

                <h3>Preferred Centers:</h3>
                <input type= "checkbox" id="north" defaultChecked={volunteer.northCenter} onChange={() => volunteer.northCenter = !volunteer.northCenter}/>
                <label htmlFor="north">Northside Center</label><br/>
                <input type= "checkbox" id="east" defaultChecked={volunteer.eastCenter} onChange={() => volunteer.eastCenter = !volunteer.eastCenter}/>
                <label htmlFor="east">Eastside Center</label><br/>
                <input type= "checkbox" id="south" defaultChecked={volunteer.southCenter} onChange={() => volunteer.southCenter = !volunteer.southCenter}/>
                <label htmlFor="south">Southside Center</label><br/>
                <input type= "checkbox" id="west" defaultChecked={volunteer.westCenter} onChange={() => volunteer.westCenter = !volunteer.westCenter}/>
                <label htmlFor="west">Westside Center</label><br/>
                </span>

                <h3>Skills &#38; Interests:</h3>
                <p>Please enter any applicable skills and your interests!</p>
                <textarea name="skills" id="skills" cols="70" rows="8" defaultValue={volunteer.skills} onChange={(e) => volunteer.skills = e.target.value}></textarea>
                <h3>Availability Times</h3>
                <p>In progress...</p>

                <span className="information">
                    <h3>Information: </h3>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" defaultValue={volunteer.address} onChange={(e) => volunteer.address = e.target.value}/><br/>
                    <label htmlFor="homePhone">Home Phone:</label>
                    <input type="text" id="homePhone" name="homePhone" defaultValue={volunteer.homePhone} onChange={(e) => volunteer.homePhone = e.target.value}/><br/>
                    <label htmlFor="workPhone">Work Phone:</label>
                    <input type="text" id="workPhone" name="workPhone" defaultValue={volunteer.workPhone} onChange={(e) => volunteer.workPhone = e.target.value}/><br/>
                    <label htmlFor="cellPhone">Cell Phone:</label>
                    <input type="text" id="cellPhone" name="cellPhone" defaultValue={volunteer.cellPhone} onChange={(e) => volunteer.cellPhone = e.target.value}/><br/>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" id="email" name="email" defaultValue={volunteer.email} onChange={(e) => volunteer.email = e.target.value}/><br/>
                    <label htmlFor="education">Highest Level of Education:</label>
                    <input type="text" name="education" id="education" defaultValue={volunteer.education} onChange={(e) => volunteer.education = e.target.value}/><br/>
                    <label htmlFor="licenses">Current Licenses:</label>
                    <input type="text" id="licenses" name="licenses" defaultValue={volunteer.licenses} onChange={(e) => volunteer.licenses = e.target.value}/>
                </span>
                <span className="emergency">
                    <h3>Emergency Contact</h3>
                    <label htmlFor="eName">Name:</label>
                    <input type="text" id="eName" name="eName" defaultValue={volunteer.eName} onChange={(e) => volunteer.eName = e.target.value}/><br/>
                    <label htmlFor="eHomePhone">Home Phone:</label>
                    <input type="text" id="eHomePhone" name="eHomePhone" defaultValue={volunteer.eHomePhone} onChange={(e) => volunteer.eHomePhone = e.target.value}/><br/>
                    <label htmlFor="eWorkPhone">Work Phone:</label>
                    <input type="text" id="eWorkPhone" name="eWorkPhone" defaultValue={volunteer.eWorkPhone} onChange={(e) => volunteer.eWorkPhone = e.target.value}/><br/>
                    <label htmlFor="eEmail">Email Address:</label>
                    <input type="text" id="eEmail" name="eEmail" defaultValue={volunteer.eEmail} nChange={(e) => volunteer.eEmail = e.target.value}/><br/>
                    <label htmlFor="eAddress">Address:</label>
                    <input type="text" id="eAddress" name="eAddress" defaultValue={volunteer.eAddress} onChange={(e) => volunteer.eAddress = e.target.value}/><br/>
                </span>
                <span className="status">
                    <h3>Volunteer Status</h3>
                    <input type="checkbox" id="copyOfDrivers" name="copyOfDrivers" defaultChecked={volunteer.copyDrivers} onChange={(e) => volunteer.copyDrivers = !volunteer.copyDrivers}/>
                    <label htmlFor="copyOfDrivers">Copy of Drivers License on File?</label><br/>
                    <input type="checkbox" id="copyOfSocial" name="copyOfSocial" defaultChecked={volunteer.copySocial} onChange={(e) => volunteer.copySocial = !volunteer.copySocial}/>
                    <label htmlFor="copyOfSocial">Copy of Social Security on File?</label><br/>
                    <label id="labelStatusDrop"htmlFor="statusDrop">Approval Status: </label>
                        <select name="statusDrop" id="statusDrop" defaultValue={volunteer.approvalStatus} onChange={(e) => volunteer.approvalStatus = e.target.value}>
                            <option value="Approved/Pending Approval">Approved/Pending Approval</option>
                            <option value="Approved">Approved</option>
                            <option value="Pending Approval">Pending Approval</option>
                            <option value="Disapproved">Disapproved</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                </span>
            </div>
            <button id="cancelAddVol"><Link to="/Volunteers">Cancel</Link></button> {/*PLACEHOLDER CANCEL VOLUNTEER BUTTON*/}
            <button id="submitAddVol" >Save</button> {/*PLACEHOLDER SAVE BUTTON*/}
        </div>
    );
}
 
export default VolunteerEdit;