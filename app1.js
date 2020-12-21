var app = require('express')()//链式语法
var http = require('http').Server(app)
var io = require('socket.io')(http);
const path = require('path');
const express = require('express');
//2。express 路由

app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views/sokect.html'));
});
// app.get('/list',(req, res)=>{
// res.send('<h1>hello world list !</h1>')
// })

io.on('connection', function(socket){
    console.log('a user connected');
    //socket = client
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    io.emit('position', '123');
    //绑定了一个chat message事件 ,在前端触发
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log(msg);
    });


});

//1.创建一个监听端口,开启服务器

http.listen(3000, ()=>{
console.log('listening 3000')
})