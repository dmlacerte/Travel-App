const express = require('express');
const app = express();
const travelController = require('./backend/controllers/travel.js');
const ejs = require('ejs');

app.use( express.static( "frontend" ) );
app.use( express.static( "./backend/public" ) );
app.set('views', './backend/views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html");
});

app.use('/states', travelController);

const port = 3000;
// process.env.PORT ||
app.listen(port, () => console.log(`App is connected to port ${port}`));