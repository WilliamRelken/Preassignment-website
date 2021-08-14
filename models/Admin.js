const mongoose = require('mongoose');
//const Schema = mongoose.Schema; same thing as line 3 lesson 40 udemy
const { Schema } = mongoose;

const adminSchema = new Schema({
    username: String,
    password: String
});

const Admins = mongoose.model('admins', adminSchema);

module.exports = Admins;