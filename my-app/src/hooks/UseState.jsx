
import { useState } from "react";


function Counter() {
    const [count, setCounter] = useState(0);
    function increment() {
        setCounter(count + 1);
    }
    return <div>
        <p>
            {count}
        </p>
        <button onClick={increment}>
            click me
        </button>
    </div>
}

export default Counter;