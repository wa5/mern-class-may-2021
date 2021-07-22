import React,{useState} from 'react'

function Homeinput() {
    const [data,setdata]=useState({
        name:"sidharth",
        lastname:"chudery"
    })
    return (
        <>
            <div style={{backgroundColor:"red"}}>
<h1>Home page</h1>
<input  type="text" value={data.name}   
onChange={(e)=>{setdata({name:e.target.value})}}
/>
<h1>{data.name}</h1>
            </div>
        </>
    )
}

export default Homeinput
