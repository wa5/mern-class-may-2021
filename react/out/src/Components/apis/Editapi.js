
import React,{useState,useEffect} from 'react'

function Editapi() {

const [data,setData]=useState([]);
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [id,setId]=useState("");
const [address,setAddress]=useState("");

useEffect(()=>{
    fetch('http://localhost:3000/studentsdata').then((result)=>{
        result.json().then((resp)=>{
            console.log(resp)
            setData(resp)
        })
    })
},[])


function selectuser(id){
alert("im a id"+id);
setName(data[id-1].name)
setEmail(data[id-1].email)
setAddress(data[id-1].address)
setId(data[id-1].id)

}
 function updateuser(){
    let fields={name,id,email,address}
    fetch(`http://localhost:3000/studentsdata/${id}`,{
      method:'PUT' ,
      headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
      },
      body:JSON.stringify(fields) 
    }).then((result)=>{
        console.log(result)
        result.json().then((resp)=>{
            console.log(resp)
        })
    })
    

 }

 


    
    return (
        <>
            <h1>editable table</h1>
            <table border="1">
<tr>
<td>ID</td>
<td>NAME</td>
<td>EMAIL</td>
<td>ADDRESS</td>

</tr>

{
    data.map((peoples)=><tr>
<td>{peoples.id}</td>
<td>{peoples.name}</td>
<td>{peoples.email}</td>
<td>{peoples.address}</td>
<td><button >Delite</button></td>
<td><button   onClick={()=>{selectuser(peoples.id)}}>update</button></td>
    </tr>)
}



            </table>
<label>name</label>
            <input  type="text" value={name}   
onChange={(e)=>{setName(e.target.value)}}
/><br/>
<label>email</label>
<input  type="email" value={email}   
onChange={(e)=>{setEmail(e.target.value)}}
/><br/>
<label>address</label>
<input  type="text" value={address}   
onChange={(e)=>{setAddress(e.target.value)}}
/><br/>
<label>id</label>
<input  type="number" value={id}   
onChange={(e)=>{setId(e.target.value)}}
/><br/>
<input  type="submit"   
onClick={()=>{alert("kkkkk");updateuser()}}
/><br/>


        </>
    )
}

export default Editapi
