const express = require("express");
const app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require('path');
const rosnodejs = require('rosnodejs');


const position  = require('./private/position');

const {battery, batteryEventEmitter} = require('./private/battery');
const {velocity, velocityEventEmitter} = require('./private/velocity');

const goal = require('./private/goal');

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/sokect.html'));
});



const sendSocket =(postionName,data)=>{
 
  io.emit(postionName,data)
  
}

rosnodejs.initNode("my_ros_node").then((rosNode) => {
  console.log("just init a ros node");
  
  position.subscribe(rosNode);
  velocity(rosNode);
  battery(rosNode);
  goal(rosNode);

 
});

position.EventEmitter.on(position.EventEmitterName, (socketName,data)=>sendSocket(socketName,data));



http.listen(4000, () => {
  console.log("Server now listening on port 4000");
});