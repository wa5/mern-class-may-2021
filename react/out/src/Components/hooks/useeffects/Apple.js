import React,{useEffect,useState} from 'react'

function Apple() {

const [state,setState]=useState(0)

   useEffect(()=>{
       console.log("im working  as render")
   })

   useEffect(()=>{
    console.log("hi component did mount")
},[])

   useEffect(()=>{

    console.log("value have been updated component did update")
},[state])

    return (
        <>
        <h1>{state}</h1>
            <button onClick={()=>{
                setState(state+1)
            }}>click me</button>
        </>
    )
}

export default Apple
