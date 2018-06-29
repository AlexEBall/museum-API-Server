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
        // console.log('HEYYYYYYY:::::========', typeof(req.params.floor));
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
    // post
    create: function(req, res) {
        db.cafam
            .create(req.body)
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    },
    // put
    // updateAudioLink: function(req, res) {
    //     // console.log('Hey are we hitting this before failing? Not sure also what is the request===', req);
    //     const floor = parseInt(req.params.floor);
    //     // console.log('MY REQUESTS BODY:::::::::::=======', req.body);
    //     db.cafam
    //         .updateOne({ 'floors.floor': floor},
    //         {$set: { 'floors.$[element].audioLink': req.body.input}},
    //         { arrayFilters: [{ 'element.floor': floor}]})
    //         .then(cafamModel => res.json(cafamModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // updateAnImgLink: function(req, res) {
    //     console.log(req);
    //     const floor = parseInt(req.params.floor);
    //     const position = parseInt(req.body.position);
    //     const mongoSetNestedArrayPositionFilterString = `floors.$[element].floorGallery.${position}`;
    //     console.log('The string=====', mongoSetNestedArrayPositionFilterString);
    //     db.cafam
    //         .updateOne({ 'floors.floor': floor},
    //         {$set: { [mongoSetNestedArrayPositionFilterString]: req.body.pictureInput }},
    //         { arrayFilters: [{ 'element.floor': floor }]})
    //         .then(cafamModel => res.json(cafamModel))
    //         .catch(err => res.status(422).json(err));
    // },
    updateLinks: function(req, res) {
        if (req.body.pictureInput) {
            const floor = parseInt(req.params.floor);
            const position = parseInt(req.body.position);
            const mongoSetNestedArrayPositionFilterString = `floors.$[element].floorGallery.${position}`;
            console.log('The string=====', mongoSetNestedArrayPositionFilterString);
            db.cafam
                .updateOne({ 'floors.floor': floor},
                {$set: { [mongoSetNestedArrayPositionFilterString]: req.body.pictureInput }},
                { arrayFilters: [{ 'element.floor': floor }]})
                .then(cafamModel => res.json(cafamModel))
                .catch(err => res.status(422).json(err));
        } else {
            const floor = parseInt(req.params.floor);
            // console.log('MY REQUESTS BODY:::::::::::=======', req.body);
            db.cafam
                .updateOne({ 'floors.floor': floor},
                {$set: { 'floors.$[element].audioLink': req.body.input}},
                { arrayFilters: [{ 'element.floor': floor}]})
                .then(cafamModel => res.json(cafamModel))
                .catch(err => res.status(422).json(err));
        }
    },

    remove: function(req, res) {
        db.cafam
            .findById({ _id: req.params.id })
            .then(cafamModel => cafamModel.remove())
            .then(cafamModel => res.json(cafamModel))
            .catch(err => res.status(422).json(err));
    }
}
// works in the shell but not on robo 3t
// db.getCollection('cafam').updateOne({ 'floors.floor': 1},
//             {$set: { 'floors.$[element].audioLink': 'testywoooooo' }},
//             { arrayFilters: [{ 'element.floor': 1 }]});

// this will push something in to my nested array but won't necissarily update one
// db.getCollection('cafam').updateOne({ 'floors.floor': 1},
//              {$push: { 'floors.$[element].floorGallery': 
//                  {
//                  $each: ['holy smokes'],
//                  $position: 2
//                  } 
//                  }},
//              { arrayFilters: [{ 'element.floor': 1 }]});

// will update seems like but how to pass the position into the string?
// works but have to wrap the whole concated sting in []
// db.getCollection('cafam').updateOne({ 'floors.floor': 1},
//             {$set: { 'floors.$[element].floorGallery.2': 'testywoooooo' }},
//             { arrayFilters: [{ 'element.floor': 1 }]});