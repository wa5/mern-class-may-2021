import React, { Component } from 'react'


 class ReffClass extends Component {
    constructor(){
        super();
        this.userRef=React.createRef();
    }
    jumpfocus(){
        console.log(this.userRef)
        this.userRef.current.focus();
        //this.userRef.current.value=1000;
    }



    render() {
        return (
            <>
                <h1>hello im using ref</h1>
                <center>
<input  ref={this.userRef} type="text" name="user"/>

<button onClick={()=>{this.jumpfocus()}}>click me</button>
                </center>
            </>
        )
    }
}

export default ReffClass
