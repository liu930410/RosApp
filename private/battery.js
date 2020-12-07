"use strict";

const events = require('events');
const subscribe = require('../ultis/createSubscribe')


let battery={
    socketName = 'battery',
    EventEmitterName='battery',
    topicName = '/battery',
    parmaType = 'riki_msgs/Battery',

    EventEmitter = new events.EventEmitter(),
    
    subscribe,
    // (rosNode)=>{
    //     rosNode.subscribe(topicName, parmaType, (msgs) => {
    //         EventEmitter.emit(EventEmitterName, socketName, msgs);
    //     });
    // }
}
module.exports = battery;