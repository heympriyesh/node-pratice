const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Pratice = mongoose.model('Pratice', profileSchema);
module.exports = Pratice;