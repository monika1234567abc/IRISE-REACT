import { useEffect,useState } from "react";

function UseEffectTwo(){
    const [counter,setCounter]=useState(0);
    function IncrementCounter(){

        setCounter ((prevValue)=>prevValue+1);

    }
    useEffect(()=>{
    console.log ("Hi form type 2");
    
    },[]);

    return (
        <div>

            <h1>
                Counter:{counter}</h1>
                <button onClick={IncrementCounter}>+</button>
        </div>
    )
}

export default UseEffectTwo;