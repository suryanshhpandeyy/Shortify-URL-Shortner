const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Email : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true
    },

},
{timestamps : true}
);

const Users = mongoose.model("users", usersSchema);

module.exports = Users;