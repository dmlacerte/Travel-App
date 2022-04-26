const Activity = require('../models/activities-model.js');
const State = require('../models/state-model.js');
const seedData = require('./seed-data.json');
const stateData = require('./state-data.json');

Activity.deleteMany({})
    .then(() => Activity.insertMany(seedData))
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit()); 

State.deleteMany({})
    .then(() => State.insertMany(stateData))
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit());