import { useEffect,useState } from "react";
function UseEffectThree(){
    const[counter,setCounter]=useState (0);
    const [counter2,setCounter2]=useState(10);
    function IncrementCounter(){
        setCounter((prevValue)=>prevValue+1)
    }
    function IncrementCounter2(){
         setCounter2((prevValue)=>prevValue+1)
    }

    useEffect(()=>{
        console.log ("effect for counter")
    },[counter])
    useEffect(()=>{
        console.log("effect for counter2")
    },[counter2])
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={IncrementCounter}>+</button>
            <h1>Counter2:{counter2}</h1>
            <button onClick={IncrementCounter2}>+</button>
        </div>
    )
}
export default UseEffectThree;