const express = require('express');
const router = express.Router();
const Activity = require('../models/activities-model.js');

function pageRefresh(req, res, next) {
    Activity.find( { state: req.params.state, type: req.params.activities } )
        .then(activities => {res.render('show', { activities, state: req.params.state, type: req.params.activities })})
        .catch(next);
}

//READ a state page with sample saved activities
router.get('/:state', (req, res, next) => {
    Activity.find({ state: req.params.state })
        .then(activities => res.render('state', { activities, state: req.params.state }))
        .catch(next);
});

//READ all saved activities (of a specific type) for selected state
router.get('/:state/:activities', (req, res, next) => {
    pageRefresh(req, res, next);
});

//CREATE a new activity
router.post('/:state/:activities', (req, res, next) => {
    Activity.create(req.body)
        .then(() => pageRefresh(req, res, next))
        .catch(next);
});

//UPDATE an existing activity
router.put('/:state/:activities/:activityID', (req, res, next) => {
    Activity.findByIdAndUpdate(req.params.activityID, req.body, { new: true })
        .then(() => pageRefresh(req, res, next))
        .catch(next);
});

//REMOVE an existing activity
router.delete('/:state/:activities/:activityID', (req, res, next) => {
    Activity.findByIdAndRemove(req.params.activityID)
        .then(() => pageRefresh(req, res, next))
        .catch(next);
});

module.exports = router;