const mongoose = require('../db/connection.js');

const ActivitySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        description: String,
        city: { type: String, required: true },
        state: { type: String, required: true },
        address: String,
        pricePoint: String,
        relatedTrip: String,
        rating: String,
        comments: String
    }
);

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;