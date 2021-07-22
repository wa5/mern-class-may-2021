import React,{useEffect,useState} from 'react'

function Deliteapi() {

    const [data,setData]=useState([])
    const [deliteData,setDeliteData]=useState()

    useEffect(()=>{
        fetch('http://localhost:3000/students').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setData(resp)
            })
        })
    },[])

function SelectStudent(id){

}

function delite(id){
    console.log(id)
    fetch(`http://localhost:3000/students/${id}`,{
        method:'DELETE'
    }).then((result)=>{
        result.json().then((resp)=>{
            setDeliteData(resp);
            console.log(resp)
        })
    })

}





    return (
        <>
            <h1>get api fetch</h1>
<table border="1">
    <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>CLASS</td>
        <td>SUBJECT</td>

    </tr>
{
    data.map((peoples)=><tr>
<td>{peoples.id}</td>
<td>{peoples.name}</td>
<td>{peoples.class}</td>
<td>{peoples.subject}</td>
<td><button onClick={()=>{delite(peoples.id)}}>Delite</button></td>
<td><button   onClick={()=>{SelectStudent(peoples.id)}}>Edit</button></td>
    </tr>)
}


</table>

        </>
    )
}

export default Deliteapi
