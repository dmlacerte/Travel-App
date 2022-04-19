const mongoose = require('mongoose');

const mongoURI = 
    process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : "mongodb://0.0.0.0:27017/travel-app";

mongoose.connect(mongoURI)
    .then(instance => console.log(`Connected to ${instance.connections[0].name}`))
    .catch(console.error);

module.exports = mongoose;