const express = require("express");
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const rosnodejs = require('rosnodejs');


const position  = require('./private/position');
const battery = require('./private/battery');
const velocity= require('./private/velocity');
const goal = require('./private/goal');
const sendSocket = require('./ultis/sendSocket')
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/sokect.html'));
});





// (postionName,data)=>{
 
//   io.emit(postionName,data)
  
// }

rosnodejs.initNode("my_ros_node").then((rosNode) => {
  console.log("just init a ros node");
  
  position.subscribe(rosNode);
  velocity.subscribe(rosNode);
  battery.subscribe(rosNode);
  goal.advertise(rosNode);

 
});

position.EventEmitter.on(position.EventEmitterName, (socketName,data)=>sendSocket(socketName,data));
velocity.EventEmitter.on(velocity.EventEmitterName, (socketName,data)=>sendSocket(socketName,data));
battery.EventEmitter.on(battery.EventEmitterName, (socketName,data)=>sendSocket(socketName,data));

io.on(goal.socketName,function(data){
  console.log(data);
  goal.publish({data:data})
});

http.listen(4000, () => {
  console.log("Server now listening on port 4000");
});