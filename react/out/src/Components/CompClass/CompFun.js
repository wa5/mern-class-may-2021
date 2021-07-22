import React, { useState } from 'react'

function CompFun() {
    
const [data,setdata]=useState("blessy")

function update(){
  
    console.log("im being called")
    setdata("bleesy methow")
}



    return (
        <div>
            <h1>{data}</h1>
            <button onClick={update}>click me</button>
        </div>
    )
}

export default CompFun
