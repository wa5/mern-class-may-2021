import { Component } from "react";
import Blessy from "./Blessy";


class Lifecycle extends Component{
constructor(){
super();

this.state={
    io:true,
    count:0,
    name:"blessy"
}
    console.log("salama kakum--customer came")
}


componentDidMount(){
    console.log("customer has taken seat")
}

componentDidUpdate(preProps,preStates){
    console.log("customer has given orsder ",`privous orde:${preStates.count} :${this.state.count}`)
}
shouldComponentUpdate(){
    console.log(" give food");
    return true;
}

render(){
    console.log("im monitoring customers  moves");
    return (
<div>
<h1>{this.state.name}</h1>
<h2>orders of custpomer :{this.state.count}</h2>
<button   onClick={()=>{this.setState({count:this.state.count+1})}}>click me</button>


<h2>
<h1>
    im 
</h1>
{this.state.io==true ?<Blessy/>:<h1>out restrunt</h1>}
</h2>

 <button  onClick={()=>{this.setState({io:!this.state.io})}}>hide and show</button> 

</div>

    )
}

}
export default Lifecycle;