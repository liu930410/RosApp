const express = require('express');
const app     = express();
var path = require('path')
const server  = require('http').createServer(app);
const io      = require('socket.io')(server);

// 设置模板引擎
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录
app.engine('html', require('express-art-template'))
app.set('view engine', 'html');

// 设置静态文件托管目录
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.get('/', (request, response) => {
    response.render('sokect.html');
   
});


//监听客户端链接,回调函数会传递本次链接的socket
// io.on('connection', socket => {
//     // 监听客户端发送的信息
//     // socket.on("sentToServer", message => {
//     //     console.log(message);
//     //     // 给客户端返回信息
//     //     io.emit("sendToClient", {message});
//     // });


//     socket.on("disconnect", () => {
//       console.log("连接已断开...");
//   });
// });

  io.on('connection',function(socket){
    console.log('User connected');
    socket.emit('message',{text:'你上线了'});
    socket.on('chat message', function(msg){
        console.log(msg);
        io.emit('chat message', msg);
        });
        
    
    socket.on("sentToServer", message => {
        console.log(message);
    });
    socket.on('disconnect',function(){
      console.log('User disconnected');
    });
  });


// 监听连接断开事件


server.listen(3000,function () {
    console.log('running...')
  })