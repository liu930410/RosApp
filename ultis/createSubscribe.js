

const subscribe = function (rosNode) {
    // eslint-disable-next-line no-invalid-this
    rosNode.subscribe(this.topicName, this.parmaType, (msgs) => {
        // eslint-disable-next-line no-invalid-this
        this.EventEmitter.emit(this.EventEmitterName, this.socketName, msgs);
    });
};
module.exports = subscribe;