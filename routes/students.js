const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find()
    .then(students => res.json(students))
    .catch(err =>  res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const Year_of_batch= Number(req.body.Year_of_batch);
    const College_id = req.body.College_id;
    const Skills = req.body.Skills;
    
    const newStudent = new Student({
        Name,
        Year_of_batch,
        College_id,
        Skills,
    });

    newStudent.save()
    .then(() => res.json('Student added'))
    .catch(err => res.status(400).json('Error '+ err));
});

router.route('/:id').get((req, res) =>{
    Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted.'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
    .then(student => {
        student.Name = req.body.Name;
        student.Year_of_batch = Number(req.body.Year_of_batch);
        student.College_id = req.body.College_id;
        student.Skills = req.body.Skills;

        student.save()
        .then(() => res.json('Student updated'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;