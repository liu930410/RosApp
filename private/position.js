const rosnodejs = require("rosnodejs");
const std_msgs = rosnodejs.require("std_msgs").msgs;



module.exports = function(){

    rosnodejs.nh.subscribe('/position', 'pose', (msgs) => {
          
          console.log(msgs);
          return msgs;
        // });
    });
}