const mongoose = require('mongoose');
//const Schema = mongoose.Schema; same thing as line 3 lesson 40 udemy
const { Schema } = mongoose;

const volunteerSchema = new Schema({
    fname: String,
    lname: String,
    username: {
        type:'String',
        required: true
    },
    password: {
        type:'String',
        required: true
    },
    pref_centers: {

        north: {
            type: 'Boolean'
        },
        east: {
            type: 'Boolean'
        },
        south: {
            type: 'Boolean'
        },
        west: {
            type: 'Boolean'
        }

    },
    skills: {
        type:'String',
        default: 'Unspecified'
    },
    availability: {
        type:'String',
        required: true,
        default: 'Unspecified'
    },
    address: {
        type:'String',
        required: true
    },
    home_phone: {
        type:'String',
        required: true
    },
    work_phone: {
        type:'String',
        required: true
    },
    cell_phone: {
        type:'String'
    },
    email: {
        type:'String',
        required: true
    },
    education: {
        type:'String',
        default: 'none'
    },
    licenses: {
        type:'String',
        default: 'none'
    },
    emc_name: {
        type:'String',
        required: true
    },
    emc_home_phone: {
        type:'String',
        required: true
    },
    emc_work_phone: {
        type:'String',
        required: true
    },
    emc_email: {
        type:'String',
        required: true
    },
    emc_address: {
        type:'String',
        required: true
    },
    has_dl: {
        type:'Boolean',
        required: true,
        default: false
    },
    has_ssn: {
        type:'Boolean',
        required: true,
        default: false
    },
    approval_status: {
        type:'String',
        required: true,
        default: 'Pending'
    }

});

const Volunteers = mongoose.model('volunteers', volunteerSchema);

module.exports = Volunteers;