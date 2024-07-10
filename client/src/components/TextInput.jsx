import React, { useState } from "react";
import { socket } from '../socket';


function TextInput() {


const [textInputData, setTextInputData] = useState({textInput: ''})
const [messageLog, setMessageLog] = useState([])



function handleTextInput (event) {

setTextInputData({...textInputData, [event.target.name]: event.target.value })
console.log(textInputData)
}

function handleButtonSubmit(e) {
    e.preventDefault();
    
    socket.emit('message', textInputData.textInput)
    setTextInputData({textInput: ''})
    
    }

    console.log(textInputData.textInput)
return (

    <>









    <form onSubmit={handleButtonSubmit}>

<label htmlFor="textInput"></label>

<input id= 'textInput' name = 'textInput' type="text" value={textInputData.textInput} onChange={handleTextInput} ></input>

    <button> <i className='bx bxs-send'></i></button>
    </form>



</>
)
}



export default TextInput