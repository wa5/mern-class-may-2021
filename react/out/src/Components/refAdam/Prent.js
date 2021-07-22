import React, { Component } from 'react'
import Child from './Child';


 class Prent extends Component {
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
        this.state={
            io:true
           
        }
    }

    handleclick(){
this.inputRef.current.focus();

    }

    render() {
        return (
            <div>

                { this.state.io==true ?<Child ref={this.inputRef}/> : <h1>hhhf</h1>}
                
                <button onClick={()=>{
                    this.handleclick()
                    this.setState({io:!this.state.io});
                    
                
                }}>click on me</button>
            </div>
        )
    }
}
export default  Prent;