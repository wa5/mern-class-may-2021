import { Component } from "react";
//var data="hello";

class CompClass extends Component{
constructor(){
    super();
  this.state={
data:1

  }
}

apple(){
console.log("hello")
    this.setState({data:this.state.data+1})
}
    
//it is a life cyles
render(){
    console.log("im render")
    return (

<div>


<h1>{this.state.data}</h1>
<button onClick={()=>{this.apple()}}>click me</button>
</div>

    )
}


}
export default CompClass;