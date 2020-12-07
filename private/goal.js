'use strict';

const events = require('events');

let goal = {
    'socketName': 'goal',
    'EventEmitterName': 'goal',
    'topicName': '/goal',
    'parmaType': 'std_msgs/Int8',

    'EventEmitter': new events.EventEmitter(),

    'advertise': (rosNode) => {
        return rosNode.advertise(goal.topicName, goal.parmaType);
    }
};
module.exports = goal;