import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import {Component} from "react";
import axios from "axios";

class Volunteers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volunteers: [],
        };
    }



    async componentDidMount() {
        await axios
            .get('/listvolunteers')
            .then((res) => res.data) // <--- map to the JSON data here to keep things simple
            .then((volunteers) => this.setState({ volunteers }));
    }

    render() {
        let vol = this.state.volunteers;

        const listItems = vol.map((d) => <li key={d._id}>{d.fname} {d.lname} | Approval Status: {d.approval_status} <button> EDIT </button></li>);

        return (
            <div className="Volunteers">
                <Navbar/>
                <div className="volTitle">
                    <h1>Manage Volunteers</h1>
                    <button id="add"><Link to='Volunteers/add'>+Add Volunteer</Link></button>
                </div>
                <div className="MngVolMenu">
                    <label htmlFor="searchName">Search Volunteer: </label>
                    <input type="text" name="searchName" id="search"/>

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

                    {listItems}

                </div>
            </div>
        )
    }

}


export default Volunteers;