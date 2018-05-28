const db = require('../models');

module.exports = {
    findAll: (req, res, next) => {
        db.programs
            .find(req.query)
            .sort({ _id: 1 })
            .then(cafamProgramsModel => res.json(cafamProgramsModel))
            .catch(err => res.status(422).json(err));
    }
}