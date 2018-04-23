const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cafamSchema = new Schema({

});

const cafam = mongoose.model("cafam", cafamSchema);

module.exports = cafam;