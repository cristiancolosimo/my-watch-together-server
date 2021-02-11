const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }}
);


app.use(express.static('static'));

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
io.on('connection', (socket) => {
	  socket.on('disconnecting', (reason) => {
    io.emit("nome", {id:socket.id, type:"delete"});
	console.log("user disconnesso");
  });


    socket.on('video', (msg) => {
      io.emit('video', msg);
      
    });
    socket.on("nome",(msg)=>{
        io.emit("nome",msg);
    })
socket.on("messaggi",(msg)=>{
        io.emit("messaggi",msg);
    })
	socket.on("requestnomi",(msg)=>{
        io.emit("requestnomi",msg);
    })
});
  
