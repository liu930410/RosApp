/* eslint-disable no-undef */
/* eslint-disable new-cap */
/**
 *  非ros下测试用server
 */
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const express = require('express');
const path = require('path');
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
    
    //绑定了一个chat message事件 ,在前端触发
    socket.on('goal', function(msg){
        console.log(msg);
    });




    socket.emit('position', '1');
    socket.emit('velocity', '2');
    socket.emit('battery', '3');

});

//1.创建一个监听端口,开启服务器

server.listen(3000, ()=>{
    console.log('listening 3000');
});