import React, { useState,useEffect, createContext } from "react";


function ContextManager() {
    const [count, Counter] = useState(0);
    useEffect(() => {
        console.log("Update has done");
    },[count]);
    return (
        <div>
            <p>
                {}
            </p>
            <button onClick={()=>Counter(count+1)}>
                click here
            </button>
        </div>
    );

}
export default ContextManager;