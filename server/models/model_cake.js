const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    bakername: { type: String, required: [true, "Name is required"] },
    imageurl: { type: String, required: [true, "Please provide a valid url"], minlength: [10, "url must be 10 or more characters long"] },
    arrayratings: []

}, { timestamps: true })
const Cake = mongoose.model('cakes', CakeSchema);

//Exports:
module.exports = {
    Cake: Cake,
};