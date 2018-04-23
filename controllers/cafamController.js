const db = require('../models');

module.exports = {
    findAll: (req, res, next) => {
        db.cafam
            .find(req.query)
            .sort({ _id: 1 })
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    }
}