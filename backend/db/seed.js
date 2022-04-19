const Activity = require('../models/activities-model.js');
const seedData = require('./seed-data.json');

Activity.deleteMany({})
    .then(() => Activity.insertMany(seedData))
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit()); 