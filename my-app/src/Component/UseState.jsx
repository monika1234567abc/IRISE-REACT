import { useState } from "react";
function UseState (){

    const[counter,setcounter]=useState(0)


    console.log(counter,"counter")

    function Increment(){
        setcounter ((prevalue)=>prevalue+1)
    }
    function Decrement(){
        setcounter ((prevalue)=>prevalue-1)
    }
     return(
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>
    )
}
export default UseState;