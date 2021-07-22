import React from 'react'

function RefFun() {

let textInpup=React.createRef();

function handleClick(){
    textInpup.current.value=6666;
    
}

    return (
        <>
            <input
             type="text"
             ref={textInpup}/>

              <input
             type="button"
             value="focus the text input"
             onClick={handleClick}/>

        </>
    )
}

export default RefFun
