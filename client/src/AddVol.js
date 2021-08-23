import Navbar from "./Navbar"
import {Component} from "react";

class AddVolunteer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            volunteer: [{
                fname: "William",
                lname: "Railcan",
                username: "asdfjkl",
                password: "asdfqwer1234",
                pref_centers: {
                    north: true,
                    east: false,
                    south: false,
                    west: false
                },
                skills: "none",
                address: "123 unf Lane",
                home_phone: "0987654321",
                work_phone: "1234567890",
                cell_phone: "1029384756",
                email: "unf@unf.edu",
                education: "Some college",
                licenses: "none",
                emc_name: "debra",
                emc_home_phone: "0987654321",
                emc_work_phone: "1029384756",
                emc_email: "mom@gmail.com",
                emc_address: "123 unf Lane",
                has_dl: true,
                has_ssn: false,
                approval_status: "Approved",
            }],
        };
    }


    sendJson = () => {
        console.log("sending:\n" + JSON.stringify(this.state.volunteer));
        fetch("/addvolunteer", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(this.state.volunteer)


        }).then(r => r);
        console.log("finished. redirecting...");
        window.location.replace("/Volunteers");

    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.sendJson();
        window.location.replace("/Volunteers");
    }

    Log = () => {
        console.log(this.state.volunteer);
    }

    render(){

        return(
            <div className="AddVol">
                <Navbar/>
                <h1>Add Volunteer</h1>
                <div className="VolForm">
                    <button onClick={this.Log}>Log (Check your console...)</button>
                    <h3>Basic Info</h3>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" onChange={(e) => this.state.volunteer.firstName = e.target.value}/>
                    <br/>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" onChange={(e) => this.state.volunteer.lastName = e.target.value}/>
                    <br/>
                    <label htmlFor="userName">Username: </label>
                    <input type="text" id="userName" onChange={(e) => this.state.volunteer.userName = e.target.value}/>
                    <br/>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" onChange={(e) => this.state.volunteer.password = e.target.value}/>
                    <br/>
                    <span className="centers">

            <h3>Preferred Centers:</h3>
            <input type= "checkbox" id="north" value="north" onChange={() => this.state.volunteer.pref_centers.north = !this.state.volunteer.pref_centers.north}/>
            <label htmlFor="north">Northside Center</label><br/>
            <input type= "checkbox" id="east" value="east" onChange={() => this.state.volunteer.pref_centers.east = !this.state.volunteer.pref_centers.east}/>
            <label htmlFor="east">Eastside Center</label><br/>
            <input type= "checkbox" id="south" value="south" onChange={() => this.state.volunteer.pref_centers.south = !this.state.volunteer.pref_centers.south}/>
            <label htmlFor="south">Southside Center</label><br/>
            <input type= "checkbox" id="west" value="west" onChange={() => this.state.volunteer.pref_centers.west = !this.state.volunteer.pref_centers.west}/>
            <label htmlFor="west">Westside Center</label><br/>
            </span>

                    <h3>Skills &#38; Interests:</h3>
                    <p>Please enter any applicable skills and your interests!</p>
                    <textarea name="skills" id="skills" cols="70" rows="8" onChange={(e) => this.state.volunteer.skills = e.target.value}></textarea>
                    <h3>Availability Times</h3>
                    <p>In progress...</p>

                    <span className="information">
                <h3>Information: </h3>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" onChange={(e) => this.state.volunteer.address = e.target.value}/><br/>
                <label htmlFor="homePhone">Home Phone:</label>
                <input type="text" id="homePhone" name="homePhone" onChange={(e) => this.state.volunteer.homePhone = e.target.value}/><br/>
                <label htmlFor="workPhone">Work Phone:</label>
                <input type="text" id="workPhone" name="workPhone" onChange={(e) => this.state.volunteer.workPhone = e.target.value}/><br/>
                <label htmlFor="cellPhone">Cell Phone:</label>
                <input type="text" id="cellPhone" name="cellPhone" onChange={(e) => this.state.volunteer.cellPhone = e.target.value}/><br/>
                <label htmlFor="email">Email Address:</label>
                <input type="text" id="email" name="email" onChange={(e) => this.state.volunteer.email = e.target.value}/><br/>
                <label htmlFor="education">Highest Level of Education:</label>
                <input type="text" name="education" id="education" onChange={(e) => this.state.volunteer.education = e.target.value}/><br/>
                <label htmlFor="licenses">Current Licenses:</label>
                <input type="text" id="licenses" name="licenses" onChange={(e) => this.state.volunteer.licenses = e.target.value}/>
            </span>
                    <span className="emergency">
                <h3>Emergency Contact</h3>
                <label htmlFor="eName">Name:</label>
                <input type="text" id="eName" name="eName" onChange={(e) => this.state.volunteer.eName = e.target.value}/><br/>
                <label htmlFor="eHomePhone">Home Phone:</label>
                <input type="text" id="eHomePhone" name="eHomePhone" onChange={(e) => this.state.volunteer.eHomePhone = e.target.value}/><br/>
                <label htmlFor="eWorkPhone">Work Phone:</label>
                <input type="text" id="eWorkPhone" name="eWorkPhone" onChange={(e) => this.state.volunteer.eWorkPhone = e.target.value}/><br/>
                <label htmlFor="eEmail">Email Address:</label>
                <input type="text" id="eEmail" name="eEmail" onChange={(e) => this.state.volunteer.eEmail = e.target.value}/><br/>
                <label htmlFor="eAddress">Address:</label>
                <input type="text" id="eAddress" name="eAddress" onChange={(e) => this.state.volunteer.eAddress = e.target.value}/><br/>
            </span>
                    <span className="status">
                <h3>Volunteer Status</h3>
                <input type="checkbox" id="copyOfDrivers" name="copyOfDrivers" onChange={(e) => this.state.volunteer.copyDrivers = !this.state.volunteer.copyDrivers}/>
                <label htmlFor="copyOfDrivers">Copy of Drivers License on File?</label><br/>
                <input type="checkbox" id="copyOfSocial" name="copyOfSocial" onChange={(e) => this.state.volunteer.copySocial = !this.state.volunteer.copySocial}/>
                <label htmlFor="copyOfSocial">Copy of Social Security on File?</label><br/>
                <label id="labelStatusDrop"htmlFor="statusDrop">Approval Status: </label>
                    <select name="statusDrop" id="statusDrop" onChange={(e) => this.state.volunteer.approvalStatus = e.target.value}>
                        <option value="Approved/Pending Approval">Approved/Pending Approval</option>
                        <option value="Approved">Approved</option>
                        <option value="Pending Approval">Pending Approval</option>
                        <option value="Disapproved">Disapproved</option>
                        <option value="Inactive">Inactive</option>
                        <option value="All">All</option>
                    </select>
            </span>
                </div>
                <button id="submitAddVol" onClick={this.handleSubmit}>Submit</button> {/*PLACEHOLDER SUBMIT VOLUNTEER BUTTON*/}
            </div>
            );

    }

}

 
export default AddVolunteer;