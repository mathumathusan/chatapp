import React, { useEffect, useState } from 'react'
import "./Chat.css"
import Message from './Message'
import axios from 'axios'

function Chat() {

    const [ text,setText]=useState("")
    const [result,setRes]=useState([])

    const handleSubmit =async (e)=>{
         e.preventDefault()
         const time = new Date().toLocaleTimeString()
         try {

          const res =  await  axios.post("http://localhost:8080/createChat",{name:text})
          // console.log(res.data)
           setRes(res.data)
          
         } catch (error) {
           console.error(error)
         }
       
    }

  return (
    <>
     <div className='container'>
        <h1>Discussion</h1>
        <div className="inputitems">
            <img className="inputImage"  src="https://i.pinimg.com/736x/e4/ac/ff/e4acffae14795389e4dd1fe9614fa3f8.jpg" alt="" />
            <input className='input' type="text" placeholder='What are your thoughts?'  onChange={e=>setText(e.target.value)}/>
            {/* <div>{text}</div> */}
            <button className='inputButton' onClick={handleSubmit}>comment</button>
        </div>
        <hr className='bottomline' />
    </div>
    <Message result={result}/>
    </>
   
  )
}

export default Chat