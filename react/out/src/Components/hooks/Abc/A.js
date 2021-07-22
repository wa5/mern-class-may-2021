import React, { createContext } from 'react'
import B from './B'


const Firtsname=createContext()
function A() {
    return (
        <div>
            <Firtsname.Provider value="kk">

                <B />
            </Firtsname.Provider>
        </div>
    )
}

export default A
export {Firtsname}
