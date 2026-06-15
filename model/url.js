const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    ShortID : {
        type : String,
        required : true,
        unique : true
    },
    RedirectURL : {
        type : String,
        required : true
    },
    visitHistory : [{ timestamp : {type: Number}}],

},
{timestamps : true}
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;