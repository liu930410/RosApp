'use strict';

const events = require('events');
const subscribe = require('../ultis/createSubscribe');


let velocity = {
    'socketName': 'velocity',
    'EventEmitterName': 'velocity',
    'topicName': '/velocity',
    'parmaType': 'clbrobot/vel',

    'EventEmitter': new events.EventEmitter(),

    'subscribe': subscribe
};


module.exports = velocity;