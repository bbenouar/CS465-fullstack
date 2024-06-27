
const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;