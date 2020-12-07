"use strict";

const events = require('events');

let goal={
    socketName = 'goal',
    EventEmitterName='goal',
    topicName = '/goal',
    parmaType = 'std_msgs/String',

    EventEmitter = new events.EventEmitter(),

    advertise = (rosNode)=>{
        rosNode.advertise(topicName, parmaType)
    }
}
module.exports = goal;