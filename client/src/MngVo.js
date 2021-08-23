import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import {Component} from "react";
import axios from "axios";

class Volunteers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volunteers: [],
            filters: [],
            nameSearch: [""]
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


        let results = vol.reduce(function(filtered, option) {
            let fname = JSON.stringify(option.fname).toUpperCase();
            let lname = JSON.stringify(option.lname).toUpperCase();

            //fname = fname.slice(0,(name.length - 1));
            //console.log(fname +" | " + fname + " | " + name.length);

            if (fname.match(name) || lname.match(name) || name == "") {

                filtered.push(option);
            }
            return filtered;
        }, []);

        const listItems = results.map((d) => <li key={d._id}>{d.fname} {d.lname} | Approval Status: {d.approval_status} <button> EDIT </button></li>);

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
                    <select name="filterDrop" id="filterDrop">
                        <option value="1">Approved/Pending Approval</option>
                        <option value="2">Approved</option>
                        <option value="3">Pending Approval</option>
                        <option value="4">Disapproved</option>
                        <option value="5">Inactive</option>
                        <option value="6">All</option>
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