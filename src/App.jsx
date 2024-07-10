import React, { useState, useEffect } from 'react';
import { socket } from './socket';

import './App.css'

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  


  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  
  console.log(isConnected)

function handleButtonSubmit() {


socket.emit('hello', 'world')

}



  return (
    
    <>
    <h1>
      <button  onClick={handleButtonSubmit}></button>
    </h1>
    </>
  )
}

export default App
