import React,{useEffect,useState} from 'react'

function GetApi() {

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/students').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setData(resp)
            })
        })
    },[])
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

    </tr>)
}


</table>

        </>
    )
}

export default GetApi
