import React,{lazy,Suspense} from 'react'
import CompClass from '../Components/CompClass/CompClass'
import CompFun from '../Components/CompClass/CompFun'
import Lifecycle from '../Components/lifecycle/Lifecycle'
import Fragment from '../Components/fragments/Fragment'
import Bro from '../Components/fragments/Bro'
import Refss from '../Components/fragments/Refss'
import CustomTextInput from '../Components/fragments/CustomTextInput'
import FunctionalRefs from '../Components/fragments/FunctionalRefsproblem'
import FuntionalRefsSolutions from '../Components/fragments/FuntionalRefsSolutions'
import FirParent from '../Components/forwordingrefs/FirParent'
import StC from '../Components/styledComponets/StC'
import ReffClass from '../Components/refsClass/ReffClass'
import RefFun from '../Components/refFunction/RefFun'
import Prent from '../Components/refAdam/Prent'
import Triner from '../Components/hooks/ContextApi/Triner'
import A from '../Components/hooks/Abc/A'
import Apple from '../Components/hooks/useeffects/Apple'



import GetApi from '../Components/apis/GetApi'
import Homeinput from '../Components/apis/Homeinput'
import Postdata from '../Components/apis/Postdata'
import Deliteapi from '../Components/apis/Deliteapi'
import Animi from '../Components/animationfallback/Animi'
//import Animi from '../Components/animation-fallback/Animi'


//import Editapi from '../Components/apis/Editapi'
const add2='../Components/apis/Editapi'
const Editapi=React.lazy(() => import(`${add2}`).catch((err)=>{
     console.log("hello",err)
//var add='../Components/apis/Editapi'
   // return import(`${add}`);
 }));

function Home2() {
    return (
        <>


         <GetApi/>

        <Homeinput />


        <Postdata />

        <Deliteapi /> 
<Suspense  fallback={<Animi/>}>

        <Editapi />
        </Suspense>
       
        

{/* <Apple />

<Triner />

<A /> */}
{/* <Fragment/>
<Bro/>

<h1>hahah im in home</h1>


<StC />
<ReffClass />
<RefFun/>
<Prent/> */}
{/* <Lifecycle/> */}
{/* <Refss />
<CustomTextInput />
<FunctionalRefs/>
<FuntionalRefsSolutions/>
<h1>hdhdh</h1>
<FirParent/> */}
            {/* <CompClass  data="hahaha"/> */}
            {/* <CompClass  /> 
            <br/>
            <br/>
            <CompFun /> */}
          
        </>
    )
}

export default Home2
