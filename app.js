const express = require("express");
const app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require('path');
const rosnodejs = require('rosnodejs');
const std_msgs = rosnodejs.require("std_msgs").msgs;

const position = require('./private/position');
const goal = require('./private/goal');
const battery = require('./private/battery');
const velocity = require('./private/velocity');
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // res.send("it's just a little message from ros_node");
  res.sendFile(path.join(__dirname, 'views/sokect.html'));
});

rosnodejs.initNode("my_ros_node").then((rosNode) => {
  // console.log("just init a ros node");
  // 
  //订阅postion
  var pos = position().then(
    
    function(){
      console.log(pos);
      io.emit('chat message', pos);
    },
      (pos)=>{
        console.log(pos+"pos1");
      }
  );

  
  


  // goal();
  // position();
  // velocity();
  io.on('connection', function(socket){
    console.log('a user connected');
    //socket = client
    socket.on('disconnect', function(){
    console.log('user disconnected');
    });

    // rosnodejs.nh.subscribe("turtle1/pose", "turtlesim/Pose", (msgs) => {
    //     // console.log(msgs);
    //     io.emit('chat message', msg);
    //   });

    //绑定了一个chat message事件 ,在前端触发

    //   function myfunc(){
    //     io.emit('chat message', 123);
    //    }
    //    var myInterval=setInterval(myfunc,1000);
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message', msg);
      });
    

    });


  http.listen(3000, () => {
    console.log("Server now listening on port 3000");
  });
});


