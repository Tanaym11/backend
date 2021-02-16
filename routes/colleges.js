const router = require('express').Router();
let College = require('../models/college.model');

router.route('/').get((req, res) => {
    College.find()
    .then(colleges => res.json(colleges))
    .catch(err =>  res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const Year_founded = Number(req.body.Year_founded);
    const City = req.body.City;
    const State = req.body.State;
    const Country = req.body.Country;
    const No_of_students = req.body.No_of_students;
    const Courses = req.body.Courses;

    const newUser = new College({
        Name,
        Year_founded,
        City,
        State,
        Country,
        No_of_students,
        Courses
    });

    newUser.save()
    .then(() => res.json('College added'))
    .catch(err => res.status(400).json('Error '+ err));
});

router.route('/:id').get((req, res) =>{
    College.findById(req.params.id)
    .then(college => res.json(college))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;