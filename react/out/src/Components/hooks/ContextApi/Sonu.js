import React from 'react'
import Siddhrth from './Siddhrth'
import {SecrateMessage} from './Triner'

function Sonu() {
    return (
        <>
             <SecrateMessage.Consumer>

{(value)=>{
    return <h1>question {value}</h1>
}}
        </SecrateMessage.Consumer>
        </>
    )
}

export default Sonu;
