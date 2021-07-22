import React from 'react'
import {Firtsname} from './A'
function C() {
    return (
        <>
            <Firtsname.Consumer>
{
    (h)=>{return <h1>{h}</h1>}
}

            </Firtsname.Consumer>
        </>
    )
}

export default C
