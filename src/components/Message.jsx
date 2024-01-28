import React, { useEffect, useState } from "react";
import "./Message.css";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import axios from "axios";

function Message({ result }) {

const [data,setdata]=useState([])

  useEffect(  () => {
     async function fetchdata(){
      const res = await axios.get("http://localhost:8080/")
      console.log(res.data)
      setdata(res.data)
     }
     fetchdata()
  });

  const [click,setClick]=useState(false)

  const toggle=()=>{
    setClick(!click)
  }



  

  return (
    <div>
          <div className="messageContainer">
        <div className="messageTop">
          <img
            className="msgImg"
            src="https://w0.peakpx.com/wallpaper/853/969/HD-wallpaper-samantha-actress-films-samantha-ruth-prabhu-telugu-movie-samantha-akkineni-telugu-actress-samanthaakkineni-bollywood-actress.jpg"
            alt=""
          />
          <span className="msgText">Samantha</span>
          <span className="msgTime">. yesterday</span>
        </div>
        <div className="messageCenter">
          Jeepers now that's a huge release with some big community earnings to
          back it - it must be so rewarding seeing creators quit their day jobs
          after monetizing (with real MRR) on the new platform.
        </div>
        <div className="messageBottom">
          <ArrowDropUpTwoToneIcon onClick={toggle} />
          <span className="upvote">Upvote</span>
          <span>Reply</span>
        </div>
        {click&&<>
            <div className="messageTops">
          <img
            className="msgImg"
            src="https://i.pinimg.com/736x/30/c9/c7/30c9c7fe467893196c1593c100528bc9.jpg"
            alt=""
          />
          <span className="msgText">tamannah</span>
          <span className="msgTime">. yesterday</span>
        </div>
        <div className="messageCenter">
          Jeepers now that's a huge release with some big community earnings to
          back it - it must be so rewarding seeing creators quit their day jobs
          after monetizing (with real MRR) on the new platform.
        </div>
        <div className="messageBottom">
          <ArrowDropUpTwoToneIcon  />
          <span className="upvote">Upvote</span>
          <span>Reply</span>
        </div>
        </>}
      </div>
    
      {data.map((item,index)=>{

  return(
    <div className="messageContainer" key={index}>
    <div className="messageTop">
      <img
        className="msgImg"
        src="https://i.pinimg.com/736x/e4/ac/ff/e4acffae14795389e4dd1fe9614fa3f8.jpg"
        alt=""
      />
      <span className="msgText">vijay</span>
      <span className="msgTime">. {item.timestamp}</span>
    </div>
    <div className="messageCenter">
    {item.name}
    </div>
    <div className="messageBottom">
      <ArrowDropUpTwoToneIcon onClick={toggle} />
      <span className="upvote">Upvote</span>
      <span>Reply</span>
    </div>
    {click&&<>
        <div className="messageTops">
      <img
        className="msgImg"
        src="https://i.pinimg.com/736x/ef/37/25/ef3725216d5aee27168aa775207716ad.jpg"
        alt=""
      />
      <span className="msgText">tamannah</span>
      <span className="msgTime">. yesterday</span>
    </div>
    <div className="messageCenter">
      Jeepers now that's a huge release with some big community earnings to
      back it - it must be so rewarding seeing creators quit their day jobs
      after monetizing (with real MRR) on the new platform.
    </div>
    <div className="messageBottom">
      <ArrowDropUpTwoToneIcon  />
      <span className="upvote">Upvote</span>
      <span>Reply</span>
    </div>
    </>}
  </div>
  )
      })}

      

    </div>
  );
}

export default Message;
