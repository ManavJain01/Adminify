// Importing Packages
const socket = require('socket.io');
const Server = socket.Server;
const http = require('http');
const express = require('express');
const app = express();

// Importing env file
require("dotenv").config();

// Importing services
const { loginReports } = require('../services/ReportService');

const server = http.createServer(app);
const io = new Server(server,{
  cors:{
    origin: [process.env.ClientLocation],
    methods: ["POST", "GET"],
  }
});

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;
  
  if (userId !== "undefined") {
    userSocketMap[userId] = socket.id;
    loginReports(userId, userSocketMap[userId], socket.id, "connected");
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("typing", (data) => {    
    socket.broadcast.emit("typing", data);
  });

  socket.on("stopTyping", (data) => {
    socket.broadcast.emit("stopTyping", data);
  });

  socket.on("disconnect", () => {
    loginReports(userId, userSocketMap[userId], socket.id, "disconnected");
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = {app, io, server, getReceiverSocketId};