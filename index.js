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

app.get('/:state', (req, res, next) => {
    res.send('Entered state route')
    // Activity.find({ state: req.params.state })
    //     // .then(activities => res.json(activities))
    //     .then(activities => {
    //         console.log(activities)
    //         res.render('state', { activities })
    //     })
    //     .catch(next);
});

// app.use("https://dml-mytravelapp.herokuapp.com", travelController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is connected to port ${port}`));