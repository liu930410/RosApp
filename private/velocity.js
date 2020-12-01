const rosnodejs = require("rosnodejs");
const std_msgs = rosnodejs.require("std_msgs").msgs;



module.exports = function(){

    rosnodejs.nh.subscribe('/velocity', 'vel', (msgs) => {
          
          console.log(msgs);
        // });
    });
}