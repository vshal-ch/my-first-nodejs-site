const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    feeling: {
        type: String,
        required: true
    }
},{timestamps: true});

const Fling = mongoose.model('flings',flingSchema);

module.exports = Fling;