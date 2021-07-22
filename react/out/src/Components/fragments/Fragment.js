import React from 'react'
 import  style from './style.module.css'
// var data={backgroundColor: 'brown'}


function Fragment() {
    return (
        <>
            <h1   className={style.j}>im a  normal component with div</h1>
            <h1   id={style.k}>im a  normal component with div123</h1>
            <h2 style={{color:'yellow'}}>im a  normal component with div</h2>
        </>
    )
}

export default Fragment
