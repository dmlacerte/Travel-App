const express = require('express');
const router = express.Router();
const Activity = require('../models/activities-model.js');

//Homepage of all states
//Will need to send visited / not visited states
// router.get('/', (req, res, next) => {
//     res.send('<h1>Hello Express!</h1>');
//     // Activity.find({})   
//     //     .then(activities => res.json(activities))
//     //     .catch(next);
// });

//READ a state page with sample saved activities
router.get('/:state', (req, res, next) => {
    // res.send('Entered state route')
    Activity.find({ state: req.params.state })
        // .then(activities => res.json(activities))
        .then(activities => {
            console.log(activities)
            res.render('state', { activities })
        })
        .catch(next);
});

//READ all saved activities (of a specific type) for selected state
router.get('/:state/:activities', (req, res, next) => {
    Activity.find( { state: req.params.state, type: req.params.activities} )
        // .then(activities => res.json(activities))
        .then(activities => res.render('show', { activities }))
        .catch(next);
});

//CREATE a new activity
router.post('/:state/:activities', (req, res, next) => {
    Activity.create(req.body)
        // .then(activity => res.json(activity))
        .catch(next);
});

//UPDATE an existing activity
router.put('/:state/:activities/:activityID', (req, res, next) => {
    Activity.findByIdAndUpdate(req.params.activityID, req.body, { new: true })
        // .then(activity => res.json(activity))
        .catch(next);
});

//REMOVE an existing activity
router.delete('/:state/:activities/:activityID', (req, res, next) => {
    Activity.findByIdAndRemove(req.params.activityID)
        // .then(activity => res.json(activity))
        .catch(next);
});

module.exports = router;