const express = require('express');
const app = express();
const travelController = require('./backend/controllers/travel.js');
const methodOverride = require('method-override');
const ejs = require('ejs');

app.use( express.static( "frontend" ) );
app.use( express.static( "./backend/public" ) );
app.set('views', './backend/views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(methodOverride('_method'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html");
});

app.use("/", travelController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is connected to port ${port}`));