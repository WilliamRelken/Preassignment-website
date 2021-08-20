import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const AddVolunteer = () => {
    let volunteer = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        northCenter: false,
        eastCenter: false,
        southCenter: false,
        westCenter: false,
        skills: "",
        address: "",
        homePhone: "",
        workPhone: "",
        cellPhone: "",
        email: "",
        education: "",
        licenses: "",
        eName: "",
        eHomePhone: "",
        eWorkPhone: "",
        eEmail: "",
        eAddress: "",
        copyDrivers: false,
        copySocial: false,
        approvalStatus: "",
    }
    const Log = () => {
        console.log(volunteer);
    }
    return (  
        <div className="AddVol">
            <Navbar/>
            <h1>Add Volunteer</h1>
            <div className="VolForm">
                <button onClick={Log}>Log (Check your console...)</button>
                <h3>Basic Info</h3>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" onChange={(e) => volunteer.firstName = e.target.value}/>
                <br/>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" onChange={(e) => volunteer.lastName = e.target.value}/>
                <br/>
                <label htmlFor="userName">Username: </label>
                <input type="text" id="userName" onChange={(e) => volunteer.userName = e.target.value}/>
                <br/>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" onChange={(e) => volunteer.password = e.target.value}/>
                <br/>
                <span className="centers">

                <h3>Preferred Centers:</h3>
                <input type= "checkbox" id="north" value="north" onChange={() => volunteer.northCenter = !volunteer.northCenter}/>
                <label htmlFor="north">Northside Center</label><br/>
                <input type= "checkbox" id="east" value="east" onChange={() => volunteer.eastCenter = !volunteer.eastCenter}/>
                <label htmlFor="east">Eastside Center</label><br/>
                <input type= "checkbox" id="south" value="south" onChange={() => volunteer.southCenter = !volunteer.southCenter}/>
                <label htmlFor="south">Southside Center</label><br/>
                <input type= "checkbox" id="west" value="west" onChange={() => volunteer.westCenter = !volunteer.westCenter}/>
                <label htmlFor="west">Westside Center</label><br/>
                </span>

                <h3>Skills &#38; Interests:</h3>
                <p>Please enter any applicable skills and your interests!</p>
                <textarea name="skills" id="skills" cols="70" rows="8" onChange={(e) => volunteer.skills = e.target.value}></textarea>
                <h3>Availability Times</h3>
                <p>In progress...</p>

                <span className="information">
                    <h3>Information: </h3>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" onChange={(e) => volunteer.address = e.target.value}/><br/>
                    <label htmlFor="homePhone">Home Phone:</label>
                    <input type="text" id="homePhone" name="homePhone" onChange={(e) => volunteer.homePhone = e.target.value}/><br/>
                    <label htmlFor="workPhone">Work Phone:</label>
                    <input type="text" id="workPhone" name="workPhone" onChange={(e) => volunteer.workPhone = e.target.value}/><br/>
                    <label htmlFor="cellPhone">Cell Phone:</label>
                    <input type="text" id="cellPhone" name="cellPhone" onChange={(e) => volunteer.cellPhone = e.target.value}/><br/>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" id="email" name="email" onChange={(e) => volunteer.email = e.target.value}/><br/>
                    <label htmlFor="education">Highest Level of Education:</label>
                    <input type="text" name="education" id="education" onChange={(e) => volunteer.education = e.target.value}/><br/>
                    <label htmlFor="licenses">Current Licenses:</label>
                    <input type="text" id="licenses" name="licenses" onChange={(e) => volunteer.licenses = e.target.value}/>
                </span>
                <span className="emergency">
                    <h3>Emergency Contact</h3>
                    <label htmlFor="eName">Name:</label>
                    <input type="text" id="eName" name="eName" onChange={(e) => volunteer.eName = e.target.value}/><br/>
                    <label htmlFor="eHomePhone">Home Phone:</label>
                    <input type="text" id="eHomePhone" name="eHomePhone" onChange={(e) => volunteer.eHomePhone = e.target.value}/><br/>
                    <label htmlFor="eWorkPhone">Work Phone:</label>
                    <input type="text" id="eWorkPhone" name="eWorkPhone" onChange={(e) => volunteer.eWorkPhone = e.target.value}/><br/>
                    <label htmlFor="eEmail">Email Address:</label>
                    <input type="text" id="eEmail" name="eEmail" onChange={(e) => volunteer.eEmail = e.target.value}/><br/>
                    <label htmlFor="eAddress">Address:</label>
                    <input type="text" id="eAddress" name="eAddress" onChange={(e) => volunteer.eAddress = e.target.value}/><br/>
                </span>
                <span className="status">
                    <h3>Volunteer Status</h3>
                    <input type="checkbox" id="copyOfDrivers" name="copyOfDrivers" onChange={(e) => volunteer.copyDrivers = !volunteer.copyDrivers}/>
                    <label htmlFor="copyOfDrivers">Copy of Drivers License on File?</label><br/>
                    <input type="checkbox" id="copyOfSocial" name="copyOfSocial" onChange={(e) => volunteer.copySocial = !volunteer.copySocial}/>
                    <label htmlFor="copyOfSocial">Copy of Social Security on File?</label><br/>
                    <label id="labelStatusDrop"htmlFor="statusDrop">Approval Status: </label>
                        <select name="statusDrop" id="statusDrop" onChange={(e) => volunteer.approvalStatus = e.target.value}>
                            <option value="Approved/Pending Approval">Approved/Pending Approval</option>
                            <option value="Approved">Approved</option>
                            <option value="Pending Approval">Pending Approval</option>
                            <option value="Disapproved">Disapproved</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                </span>
            </div>
            <button id="cancelAddVol"><Link to="/Volunteers">Cancel</Link></button> {/*PLACEHOLDER CANCEL VOLUNTEER BUTTON*/}
            <button id="submitAddVol">Submit</button> {/*PLACEHOLDER SUBMIT VOLUNTEER BUTTON*/}
        </div>
    );
}
 
export default AddVolunteer;