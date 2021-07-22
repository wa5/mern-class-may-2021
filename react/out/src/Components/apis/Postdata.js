import React,{useState} from 'react'

function Postdata() {
const  [name,setName]=useState("");
const [classs,setClasss]=useState("");
const [subject,setSubject]=useState("");


function saveStudent(){

let data={name,classs,subject}
fetch('http://localhost:3000/students',{
  method:'post' ,
  headers:{
      'Accept':'application/json',
      'Content-type':'application/json'
  },
  body:JSON.stringify(data) 
}).then((result)=>{
    console.log(result)
    result.json().then((resp)=>{
        console.log(resp)
    })
})

}




    return (
        <>
            <div style={{backgroundColor:"red"}}>
<h1>Home Page</h1>

<input  type="text" value={name}   name="name"
onChange={(e)=>{setName(e.target.value)}}
/>
<input  type="text" value={classs}   name="classs"
onChange={(e)=>{setClasss(e.target.value)}}
/>
<input  type="text" value={subject}   name="subject"
onChange={(e)=>{setSubject(e.target.value)}}
/>
<button  onClick={saveStudent}>submit</button>

            </div>
        </>
    )
}

export default Postdata
