import React, { useEffect, useState } from "react"
import {FaLink } from 'react-icons/fa';
import {BsCalendarDate } from 'react-icons/bs';
import {GoCheck } from 'react-icons/go';
import validator from 'validator';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import History from "./History";

const getData=()=>{
    const data = localStorage.getItem('history');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }

function MainContent()
{
    
    const [history, setHistory] = useState([getData()]);
    const [input, setInput] = useState("");
    const[date, setDate] = useState("");
    const[copy, setCopy] = useState(false);
    const[fresult, setResult] = useState({input});
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    function validateData()
    {
        if(validator.isURL(input))
        {
            if(date == "")
            {
                document.getElementById("errordate").innerHTML = "Please Select Expiry Date";
                document.getElementById("error").innerHTML = "";
            }
            else
            {
                for( let i = 0; i < 5; i++ ) 
                {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                const finalResult = "ahju/"+result;
                setResult(finalResult)
                // document.getElementById("error").style.color = "black";
                // document.getElementById("error").style.border = "thin solid #081e30";
                document.getElementById("errordate").innerHTML = "";
                document.getElementById("error").innerHTML = finalResult;
                document.getElementById("error").setAttribute(
                    "style", "color: black; border: solid 1px;");
                document.getElementById("copied").style.display='inline'
                let allHistory={
                    input,
                    finalResult,
                    date
                }
                setHistory([...history,allHistory]);
               
            }
        }
        else
        {
            document.getElementById("error").innerHTML = "Please Enter a Valid Url";
        }
    }
    useEffect(()=>{
        localStorage.setItem('history', JSON.stringify(history))
    },[history])
   
    return(
        
    <div className="main-content">
        
        <div className="url-shortner">
            <div className="main-form">
                <FaLink className="icon"/><p>Enter a long URL to make a URL Short</p>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/><br/>
                <span id="error"></span>
                <CopyToClipboard
                text={fresult}
                onCopy={()=>setCopy(true)}
                >
                    <button id="copied" style={{display:"none" }} className={ copy ? "copy" : ""}>Copy</button>
                    </CopyToClipboard><br/>
                    <BsCalendarDate className="icon"/><p>Select expiry date</p>
                    <input className="dateinput" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <span id="errordate"></span><br/>
                    <button className="button" onClick={validateData}>Make Url Shortner </button>
            </div>
        </div>
        <div className="about-shortner">
            <div className="center-content">
                <p>Welcome to</p><h1>Url Shortener</h1>
                <GoCheck className="about-icon"/><span>Easy Link Shortening</span><br/>
                <GoCheck className="about-icon"/><span>Full Link History</span><br/>
                <GoCheck className="about-icon"/><span>Expiry date option</span>
                  
            </div>
        </div>
         
    </div>
    )
}
export default MainContent