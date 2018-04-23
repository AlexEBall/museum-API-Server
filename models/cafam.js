const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const floorSchema = new Schema({
    floor: Number,
    coverPic: String,
    floorGallery: [String],
    audioLink: String,
    floorText: String
});

const cafamSchema = new Schema({
    tourAudience: String,
    floors: [floorSchema]
});

const cafam = mongoose.model("cafam", cafamSchema);

module.exports = cafam;