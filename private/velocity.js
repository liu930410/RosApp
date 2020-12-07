"use strict";

const events = require('events');



let velocity={
    socketName = 'velocity',
    EventEmitterName='velocity',
    topicName = '/velocity',
    parmaType = 'clbrobot/vel',

    EventEmitter = new events.EventEmitter(),

    subscribe = (rosNode)=>{
        rosNode.subscribe(topicName, parmaType, (msgs) => {
            EventEmitter.emit(EventEmitterName, socketName, msgs);
        });
    }
}


module.exports = velocity;