const db = require('../models');

module.exports = {
    findAll: (req, res, next) => {
        // console.log(req);
        db
            .artistConnect
            .find(req.query)
            .sort({_id: 1})
            .then(artistConnectModel => res.json(artistConnectModel))
            .catch(err => res.status(422).json(err));
    },
    findByID: (req, res, next) => {
        db
            .artistConnect
            .findById(req.params.id)
            .then(artistConnectModel => res.json(artistConnectModel))
            .catch(err => res.status(422).json(err));
    },
    findByFloor: (req, res, next) => {
        const floor = parseInt(req.params.floor);
        db
            .artistConnect
            .find( { "floor": floor})
            .then(artistConnectModel => res.json(artistConnectModel))
            .catch(err => res.status(422).json(err));
    }
}