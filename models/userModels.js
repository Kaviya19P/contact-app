
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [ true, "Please add user name"]
    },
    email: {
        type: String,
        required: [ true, "please add user email address"],
        unique: [ true, "Email id is already exist"]
    },
    password: {
        type: String,
        required: [ true, "please add user password"]
    }
},{
    timestamps: true
});

module.exports = mongoose.model ( "user" , userSchema );