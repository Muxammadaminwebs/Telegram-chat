import express from "express";
import {
  createServer
} from "http";
import {
  Server
} from "socket.io";
import controller from "./public/controller.js";
import salom from "./public/dataFunction.js";
let {
  dataFunction
} = salom

const app = express();
const httpServer = createServer(app);
app.use(express.static(dataFunction('src')))
app.use(express.json())
app.use(express.text())
app.use(controller)
const io = new Server(httpServer, {});



io.on("connection", (socket) => {
  console.log("connected");
  socket.on("chatmessage", (data) => {
    console.log(data);
    io.emit("sbvsdb", data)
  })
  socket.on("disconnected", () => {
    console.log("disconnected");
  })
})



httpServer.listen(5000, console.log('Running..'));