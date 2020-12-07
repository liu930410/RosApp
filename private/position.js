'use strict';

const events = require('events');
const subscribe = require('../ultis/createSubscribe');
let position = {
    'socketName': 'position',
    'EventEmitterName': 'position',
    'topicName': '/position',
    'parmaType': 'clbrobot/pose',

    'EventEmitter': new events.EventEmitter(),

    'subscribe': subscribe

};


module.exports = position;