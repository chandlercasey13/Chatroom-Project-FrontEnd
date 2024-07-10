import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'https://chatroom-server-8ccc9b8a99a8.herokuapp.com/';
console.log(process.env.NODE_ENV)

export const socket = io(URL);