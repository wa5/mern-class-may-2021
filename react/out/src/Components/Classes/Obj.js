import React from 'react'


var cities=["bangalore","new  delhi","nsw","cardb","niki"]




function Obj() {
    return (
        <div>
            {/* {cities[0]}
            <br/>
            {cities[2]}
            <br/>
            {cities[4]} */}

{
    cities.map((city)=>{
     return   (<div>
            <p>{city}</p>
        </div>)
    })
}

        </div>
    )
}

export default Obj
