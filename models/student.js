var mongoose = require('mongoose');

// STUDENT SCHEMA

var studentSchema = mongoose.Schema({
    
    title: { type: String },
    email:{ type: String },
    event:{ type: String },
    start: {type: String},
    time:{type: String},
    
});

var Student = module.export = mongoose.model('Student', studentSchema);

// GET STUDENTS
module.exports.getStudent = function(callback){
    Student.find(callback);
}

module.exports.getStudentById = function(id,callback){
    Student.findById(id,callback);
}

//ADD STUDENT
module.exports.addStudent = function(student,callback){
    Student.create(student,callback);
}
//UPDATE STUDENT
module.exports.updateStudent = function(id, student, options, callback){
    var query = {_id: id};
    var update = {
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        event: student.event,
        eventDate: student.eventDate,
    };
    Student.findOneAndUpdate(query, update, options ,callback);
}

//DELETE STUDENT
module.exports.deleteStudent = function(id,callback){
    var query = {_id: id};
    Student.remove(query,callback);
}