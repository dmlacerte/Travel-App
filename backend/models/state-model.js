const mongoose = require('../db/connection.js');

const StateSchema = new mongoose.Schema(
    {
        name: String,
        haveVisited: { type: Boolean, default: false },
        wantToVisit: { type: Boolean, default: false }
    }
);

const State = mongoose.model('State', StateSchema);

module.exports = State;