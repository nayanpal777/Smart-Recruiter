//init code
const mongoose = require('mongoose');
const dateonly = require('mongoose-dateonly')(mongoose);
//creating Schema
const loginschema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    pre_placement: {
        type: dateonly,
        require: true,
    },
    date: {
        type: dateonly,
        require: true,
    },
    Cpackage: {
        type: Number,
        require: true
    },
    student_placed: {
        type: Number,
        require: true
    },
    technical: {
        type: String,
        require: true
    }
});

//creating Models
mongoose.model('Company', loginschema);
//exports model
module.exports = mongoose.model('Company');