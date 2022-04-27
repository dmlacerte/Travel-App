const express = require('express');
const router = express.Router();
const Activity = require('../models/activities-model.js');
const State = require('../models/state-model.js');

function statePageRefresh(req, res, next, stateData) {
    req.query.state = req.params.state;
    Activity.find( req.query )
        .then(activities => res.render('state', { activities, stateData, state: req.params.state, query: req.query }))
        .catch(next);
}

function activityPageRefresh(req, res, next) {
    req.query.state = req.params.state;
    req.query.type = req.params.activities;
    Activity.find( req.query )
        .then(activities => {res.render('show', { activities, state: req.params.state, type: req.params.activities, query: req.query })})
        .catch(next);
}

router.get('/api/updateStateData', (req, res, next) => {
    State.find({})
        .then((stateData) => res.json(stateData));
});

//READ a state page with sample saved activities
router.get('/:state', (req, res, next) => {
    State.findOne({ name: req.params.state })
        .then(stateData => statePageRefresh(req, res, next, stateData))
        .catch(next);
});

//UPDATE state data
router.put('/:state/updateData', (req, res, next) => {
    State.findOneAndUpdate(
            { name: req.params.state }, 
            { 
                haveVisited: req.body.haveVisited === 'on',
                wantToVisit: req.body.wantToVisit === 'on'
            },
            { new: true }
        )
        .then(stateData => statePageRefresh(req, res, next, stateData))
        .catch(next);
});

//READ all saved activities (of a specific type) for selected state
router.get('/:state/:activities', (req, res, next) => {
    activityPageRefresh(req, res, next);
});

//CREATE a new activity
router.post('/:state/:activities', (req, res, next) => {
    Activity.create(req.body)
        .then(() => activityPageRefresh(req, res, next))
        .catch(next);
});

//Call for data to update edit modal with selection
router.get("/api/activity/:id", (req, res) => {
    Activity.findById(req.params.id)
        .then((data) => res.json(data));
})

//UPDATE an existing activity
router.put('/:state/:activities/:activityID', (req, res, next) => {
    Activity.findByIdAndUpdate(req.params.activityID, req.body, { new: true })
        .then(() => activityPageRefresh(req, res, next))
        .catch(next);
});

//REMOVE an existing activity
router.delete('/:state/:activities/:activityID', (req, res, next) => {
    Activity.findByIdAndRemove(req.params.activityID)
        .then(() => activityPageRefresh(req, res, next))
        .catch(next);
});

module.exports = router;