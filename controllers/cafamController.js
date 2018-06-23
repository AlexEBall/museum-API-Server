const db = require('../models');

module.exports = {
    findAll: (req, res, next) => {
        db.cafam
            .find(req.query)
            .sort({ _id: 1 })
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    },
    findByID: (req, res, next) => {
        db.cafam
            .findById(req.params.id)
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    },
    findByFloor: (req, res, next) => {
        console.log('HEYYYYYYY:::::========', typeof(req.params.floor));
        const floor = parseInt(req.params.floor);
        db.cafam
            .aggregate([
            {
                $project: {
                    floors: {
                        $filter: {
                            input: '$floors',
                            as: 'floor',
                            cond: { $eq: ["$$floor.floor", floor]}
                        }
                    }
                }
            }
            ])
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status[422].json(err));
    },
    create: function(req, res) {
        db.cafam
            .create(req.body)
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.cafam
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.cafam
            .findById({ _id: req.params.id })
            .then(cafamModel => cafamModel.remove())
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    }
}