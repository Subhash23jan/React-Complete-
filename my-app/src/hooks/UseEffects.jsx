import { useEffect, useState } from "react";


function Update() {
    const [count, Counter] = useState(0);
    useEffect(() => {
        console.log("Update has done");
    },[count]);
    return (
        <div>
            <p>
                {count}
            </p>
            <button onClick={()=>Counter(count+1)}>
                click here
            </button>
        </div>
    );

}

export default Update;