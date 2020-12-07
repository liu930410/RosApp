'use strict';

const events = require('events');
const subscribe = require('../ultis/createSubscribe');


let battery = {
    'socketName': 'battery',
    'EventEmitterName': 'battery',
    'topicName': '/battery',
    'parmaType': 'riki_msgs/Battery',

    'EventEmitter': new events.EventEmitter(),

    'subscribe': subscribe
};

module.exports = battery;