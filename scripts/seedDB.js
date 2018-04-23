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
            "coverPic": "picture.jpg",
            "floorGallery": ["pic1.jpg", "pic2.jpg", "pic3.jpg"],
            "audioLink": "https...",
            "floorText": "lorema dkfjsd fjsadflaksdjfkdfuewofajdskfjdsfk weuoifwiejfdskfaspoifgsdkgdskglajdkfagsdf;j"
            },
            {
            "floor": 2,
            "coverPic": "picture22.jpg",
            "floorGallery": ["pic1342.jpg", "pic234.jpg", "234pic3.jpg"],
            "audioLink": "https...",
            "floorText": "lorema dkfjsd fjsadflaksdjfkdfuewofajdskfjdsfk weuoifwiejfdskfaspoifgsdkgdskglajdkfagsdf;j"
            },
            {
            "floor": 3,
            "coverPic": "picture33.jpg",
            "floorGallery": ["pic14324.jpg", "pic4232.jpg", "pi42c33.jpg"],
            "audioLink": "https...",
            "floorText": "lorema dkfjsd fjsadflaksdjfkdfuewofajdskfjdsfk weuoifwiejfdskfaspoifgsdkgdskglajdkfagsdf;j"
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