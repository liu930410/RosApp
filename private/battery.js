const rosnodejs = require("rosnodejs");




module.exports = function(){

    rosnodejs.nh.subscribe('/battery', 'riki_msgs/Battery', (msgs) => {
          
          console.log(msgs);
        // });
    });
}