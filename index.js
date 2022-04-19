const express = require('express');
const app = express();
const travelController = require('./backend/controllers/travel.js');
const ejs = require('ejs');

app.use( express.static( "public" ) );
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use('/', travelController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is connected to port ${port}`));