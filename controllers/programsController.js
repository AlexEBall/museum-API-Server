const db = require('../models');

module.exports = {
    findAll: (req, res, next) => {
        // console.log(req);
        db.programs
            .find(req.query)
            .sort({ _id: 1 })
            .then(cafamProgramsModel => res.json(cafamProgramsModel))
            .catch(err => res.status(422).json(err));
    },
    createProgram: (req, res) => {
        console.log('hey request', req);
        db.programs
            .create(req.body)
            .then(cafamProgramsModel => res.json(cafamProgramsModel))
            .catch(err => res.status(422).json(err));
    },
}