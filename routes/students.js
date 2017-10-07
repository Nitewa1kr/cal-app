var express = require('express');
var router = express.Router();

var Student = require('../models/student');
/*---------------------STUDENT-----------------------*/
//GET ALL STUDENTS
router.get('/students', function(req, res){
    Student.getStudent(function(err, students){
        if(err){
            throw err;
        }
        res.json(students);
    });
});
//GET ONE STUDENT
router.get('/students/:_id', function(req, res){
    Student.getStudentById(req.params._id,function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    });
});
//POST
router.post('/students', function(req, res){
    var student = req.body;
    
    Student.addStudent(student, function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    });
});
//PUT
router.put('/students/:_id', function(req, res){
    var id = req.params._id
    var student = req.body;
    Student.updateStudent(id, student, {}, function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    });
});
//DELETE
router.delete('/students/:_id', function(req, res){
    var id = req.params._id
    Student.deleteStudent(id, function(err, student){
        if(err){
            throw err;
        }
        res.json(student);
    });
});

module.exports = router;