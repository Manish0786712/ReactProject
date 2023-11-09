import React, { useState } from 'react'

function BgChange() {
    let[bgClr,setBgClr]=useState("")
    let[textClr,setTxtClr]=useState("")
    let[flag,setFlag]=useState(false)
    const changeColor=()=>{
       setFlag(true)
    }
  return (
  <>
    <div align="center" style={{backgroundColor:bgClr,height:"100vh"}}>
    <input type="text"
    onChange={(event)=>setBgClr(event.target.value)}>
    </input>
    
    <div>
        <h1 style={flag?{color:textClr}:{color:"black"}}>THE BEST REACT JS TUTORIAL</h1>
        <input type="text"
        onChange={(e)=>{setTxtClr(e.target.value)
                       setFlag(false)
        }}></input>
        <button onClick={changeColor}>CHANGE THE COLOR</button>
    </div>
    </div>
  </>
  )
}

export default BgChange