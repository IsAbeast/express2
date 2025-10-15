const mongoose = require('mongoose');

//  Define schema (rules to follow to create collections aka tables in the db)
// defines the shape of the documents within that collection
const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true}
}, {timestamps: true});

// Create model (interface to interact with the database)
const Student = mongoose.model('Student', studentSchema);
//
module.exports = Student;