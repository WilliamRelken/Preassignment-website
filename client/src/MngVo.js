import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import {Component} from "react";
import axios from "axios";

class Volunteers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volunteers: [],
            filters: "ALL",
            nameSearch: []
        };
    }



    async componentDidMount() {
        await axios
            .get('/listvolunteers')
            .then((res) => res.data) // <--- map to the JSON data here to keep things simple
            .then((volunteers) => this.setState({ volunteers }));
    }

    listVolunteers = () => {
        let vol = this.state.volunteers;
        let name = JSON.stringify(this.state.nameSearch).toUpperCase();
        let filter = JSON.stringify(this.state.filters).toUpperCase();
        console.log(filter);
        
        name = name.slice(1,(name.length -1));

        let results = vol.reduce(function(filtered, option) {
            let fname = JSON.stringify(option.fname).toUpperCase();
            let lname = JSON.stringify(option.lname).toUpperCase();
            let status = JSON.stringify(option.approval_status).toUpperCase();
            //console.log(fname);
            //console.log(lname);
            //fname = fname.slice(1,(name.length -1));
            //lname = lname.slice(1,(name.length -1));
            if(name.includes(" ")){
                let searchNames = name.split(" ", 2);
                //console.log(searchNames);
                let firstSearchName = searchNames[0];
                let lastSearchName = searchNames[1];
                //console.log(firstSearchName);
                //console.log(lastSearchName);
                if (((fname.includes(firstSearchName) && lname.includes(lastSearchName)) || name == "") && ((filter.includes("ALL")) ? true:status.includes(filter))) {

                    filtered.push(option);
                }
            }
            

            //console.log(fname +" | " + fname + " | " + name);
            //console.log(fname.search(name) +" | " + lname.search(name) + " | " + name.length);
            console.log(status);
            console.log(filter);
            if ((fname.includes(name) || lname.includes(name) || name == "") && ((filter.includes("ALL")) ? true:status.includes(filter))) {

                filtered.push(option);
            }

            return filtered;
        }, []);

        const listItems = results.map((d) => 
        <div key={d._id}className="Volunteer">
            <h3>{d.fname + " " + d.lname}</h3>
            <p>Approval Status: {d.approval_status}</p>
            <button id="VolViewMatch">View Matches</button>
            <button id="VolEdit"><Link to="/Volunteers/edit">Edit</Link></button>
        </div>);

        return listItems;
    }

    render() {
       

        return (
            <div className="Volunteers">
                <Navbar/>
                <div className="volTitle">
                    <h1>Manage Volunteers</h1>
                    <button id="add"><Link to='Volunteers/add'>+Add Volunteer</Link></button>
                </div>
                <div className="MngVolMenu">
                    <label htmlFor="searchName">Search Volunteer: </label>
                    <input type="text" name="searchName" id="search" onChange={(e) => this.setState({"nameSearch": e.target.value})}/>

                    <label htmlFor="filterDrop">Filter: </label>
                    <select name="filterDrop" id="filterDrop" defaultValue="All" onChange={(e) => this.setState({"filters": e.target.value})}>
                        <option value="Approved/Pending Approval">Approved/Pending Approval</option>
                        <option value="Approved">Approved</option>
                        <option value="Pending Approval">Pending Approval</option>
                        <option value="Disapproved">Disapproved</option>
                        <option value="Inactive">Inactive</option>
                        <option value="All">All</option>
                    </select>
                    <input type="checkbox" id="viewMatches" name="viewMatches"/>
                    <label htmlFor="viewMatches">View Matches</label>

                </div>
                <div className="listVol">

                    {this.listVolunteers()}

                </div>
            </div>
        )
    }

}


export default Volunteers;