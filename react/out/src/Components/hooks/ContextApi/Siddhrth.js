import React from 'react'
import {SecrateMessage} from './Triner'
function Siddhrth() {
    return (
        <>
            <SecrateMessage.Consumer>

{(se)=>{
    return <h1>question {se}</h1>
}}
        </SecrateMessage.Consumer>
        </>
    )
}

export default Siddhrth
