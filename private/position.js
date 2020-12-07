"use strict";

const events = require('events');



let position={
    socketName = 'position',
    EventEmitterName='position',
    topicName = '/position',
    parmaType = 'clbrobot/pose',

    EventEmitter = new events.EventEmitter(),

    subscribe = (rosNode)=>{
        rosNode.subscribe(topicName, parmaType, (msgs) => {
            EventEmitter.emit(EventEmitterName, socketName, msgs);
        });
    }
}


module.exports = position;