import React, { useState } from "react";
import { socket } from '../socket';


function TextInput({handleButtonSubmit}) {


const [textInputData, setTextInputData] = useState('')

function handleTextInput (event) {

setTextInputData({...textInputData, [event.target.name]: event.target.value })
}

function handleButtonSubmit(e) {
    e.preventDefault();
    
    socket.emit('message', 'world')
    
    }

return (

    <>









    <form onSubmit={handleButtonSubmit}>

<label htmlFor="textInput"></label>

<input id= 'textInput' name = 'textInput' type="text" onChange={handleTextInput} value={textInputData.TextInput}></input>

    <button> <i className='bx bxs-send'></i></button>
    </form>



</>
)
}



export default TextInput