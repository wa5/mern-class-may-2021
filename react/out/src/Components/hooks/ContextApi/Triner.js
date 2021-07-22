
import React,{createContext} from 'react'
import Blessy from './Blessy'


const SecrateMessage=createContext();
function Triner() {
    return (
        <>
<SecrateMessage.Provider  value="siddrth dance">

          <Blessy/>  
          </SecrateMessage.Provider>
        </>
    )
}

export default Triner;
export {SecrateMessage};
