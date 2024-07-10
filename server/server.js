import express from 'express'
const app = express();
import http from 'http'
const server = http.createServer(app);
import { Server } from 'socket.io'
import cors from 'cors'

const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173"
    }
  });

const port = process.env.PORT ? process.env.PORT : '3000';


app.use(cors())

//to setup event listeners, io.on must be wrapping socket.on methods
 io.on('connection', (socket) => {
    console.log('a user connected');

  socket.on('message', (arg) => {
    console.log(arg)
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});