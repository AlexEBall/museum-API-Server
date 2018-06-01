const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

//WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/museums"
);

const cafamSeed =  [
    {
        "tourAudience": "K-12",
        "floors": [
            {
            "floor": 1,
            "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1524791443/k-12floor1cover.jpg",
            "floorGallery": 
            [
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/blueorange.jpg",
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/wonderwoman.jpg",
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/angel.jpg"
            ],
            "audioLink": "https://ia801407.us.archive.org/3/items/FranklynMonkPodcast27/TourGuide.mp3",
            "floorText": "Testing floor text 1"
            },
            {
            "floor": 2,
            "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1524791993/k12floor2cover.jpg",
            "floorGallery": 
            [
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/blueorange.jpg",
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/wonderwoman.jpg",
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/angel.jpg"
            ],
            "audioLink": "https://ia801407.us.archive.org/3/items/FranklynMonkPodcast27/TourGuide.mp3",
            "floorText": "testing k12 floor text 2"
            },
            {
            "floor": 3,
            "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1524791994/k12floor3cover.jpg",
            "floorGallery": 
            [
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/blueorange.jpg",
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/wonderwoman.jpg",
                "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/angel.jpg"
            ],
            "audioLink": "https://ia801407.us.archive.org/3/items/FranklynMonkPodcast27/TourGuide.mp3",
            "floorText": "k12 floor 3 text: lorema dkfjsd fjsadflaksdjfkdfuewofajdskfjdsfk weuoifwiejfdskfaspoifgsdkgdskglajdkfagsdf;j"
            }
        ]
    },
    {
        "tourAudience": "University",
        "floors": [
            {
                "floor": 1,
                "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1524791994/unifloor1cover.jpg",
                "floorGallery": 
                [
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/blueorange.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/wonderwoman.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/angel.jpg"
                ],
                "audioLink": "https://ia802707.us.archive.org/2/items/ChristopherGauthierHarbinTourGuide/harbintourguide_vbr.mp3",
                "floorText": "luni1 test: orema dkfjsd fjsadflaksdjfkdfuewofajdskfjdsfk weuoifwiejfdskfaspoifgsdkgdskglajdkfagsdf;j"
            },
            {
                "floor": 2,
                "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1524791994/unifloor2cover.jpg",
                "floorGallery": 
                [
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/blueorange.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/wonderwoman.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/angel.jpg"
                ],
                "audioLink": "https://ia802707.us.archive.org/2/items/ChristopherGauthierHarbinTourGuide/harbintourguide_vbr.mp3",
                "floorText": "uni floor 2 text: lorema dkfjsd fjsadflaksdjfkdfuewofajdskfjdsfk weuoifwiejfdskfaspoifgsdkgdskglajdkfagsdf;j"
            },
            {
                "floor": 3,
                "coverPic": "https://res.cloudinary.com/dawjvqyvd/image/upload/v1524791994/unifloor3cover.jpg",
                "floorGallery": 
                [
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/blueorange.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/wonderwoman.jpg",
                    "https://res.cloudinary.com/dawjvqyvd/image/upload/c_scale,w_664/v1524791994/angel.jpg"
                ],
                "audioLink": "https://ia802707.us.archive.org/2/items/ChristopherGauthierHarbinTourGuide/harbintourguide_vbr.mp3",
                "floorText": "uni 3 text: lorema dkfjsd fjsadflaksdjfkdfuewofajdskfjdsfk weuoifwiejfdskfaspoifgsdkgdskglajdkfagsdf;j"
            }
        ]
    }
];

db.cafam
  .remove({})
  .then(() => db.cafam.collection.insertMany(cafamSeed))
  .then(data => {
    console.log(data);
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });