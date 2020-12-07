    
    const subscribe = (rosNode)=>{
        rosNode.subscribe(topicName, parmaType, (msgs) => {
            EventEmitter.emit(EventEmitterName, socketName, msgs);
        });
    }
module.exports = subscribe;