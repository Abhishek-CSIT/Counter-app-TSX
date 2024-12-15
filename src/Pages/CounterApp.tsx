import Message from "../Components/Message"
import Button from "../Components/Button"
import { useState } from "react";

const CounterApp = () => {

    const [counter,setCounter] = useState<number>(0);
  
    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement = () =>{
        if(counter>0)
        setCounter(counter - 1);
    }
  return (
    <div>
        <Message msg="Counter App made using TSX"/>
        <Message msg = "Count is" val={counter}/>
        <Button fn={increment} label="+"/> &nbsp;
        <Button fn={decrement} label="-"/>
    </div>
  )
}

export default CounterApp;