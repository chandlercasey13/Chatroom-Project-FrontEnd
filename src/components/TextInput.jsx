import React, { useState } from "react";
import { socket } from '../socket';


function TextInput() {


const [textInputData, setTextInputData] = useState({textInput: ''})
const [messageLog, setMessageLog] = useState([])



function handleTextInput (event) {

setTextInputData({...textInputData, [event.target.name]: event.target.value })

}

function handleButtonSubmit(e) {
    e.preventDefault();
    
    socket.emit('message', textInputData.textInput)
    setMessageLog([...messageLog, textInputData.textInput])
    setTextInputData({textInput: ''})
    
    }

    console.log(messageLog)
return (

    <>

<ul>
{messageLog.map((message,index) => (

<li>
    {message}
</li>


))}
</ul>    







    <form onSubmit={handleButtonSubmit}>

<label htmlFor="textInput"></label>

<input id= 'textInput' name = 'textInput' type="text" value={textInputData.textInput} onChange={handleTextInput} required ></input>

    <button> <i className='bx bxs-send'></i></button>
    </form>



</>
)
}



export default TextInput