import React, { useEffect, useState } from 'react'
import "./Chat.css"
import Message from './Message'

function Chat() {

    const [ text,setText]=useState("")
    const [data,setdata]=useState([])

    const handleSubmit =(e)=>{
         e.preventDefault()
         const time = new Date().toLocaleTimeString()
         setdata(prev=>[...prev,text,time])
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
    <Message data={data}/>
    </>
   
  )
}

export default Chat