import React, { useState, useEffect } from 'react';
import { socket } from './socket';

import TextInput from './components/TextInput';

import './App.css'

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  


  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log('connected')
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

  
 

function handleButtonSubmit() {


socket.emit('message', 'world')

}



  return (
    
    <>





    
  <TextInput handleButtonSubmit= {handleButtonSubmit}/>
    </>
  )
}

export default App
