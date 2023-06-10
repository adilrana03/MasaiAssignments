// Write Code here
// do a default export

import React, { useState } from 'react';

function PlayPause() {
    const [state,setState] = useState(false);

    const handleClick = ()=>{
       setState(!state);
       console.log("working")
    }

    return (
        <div>
            <h1>The State is {state ? "Playing" : "Paused"}</h1>
            <button onClick={handleClick} style={{width:"180px", fontSize:"18px",padding:"15px",backgroundColor:"green",color:"white",textAlign:"center"}}>{state ? "Playing" : "Paused"}</button>
        </div>
    );
}

export default PlayPause;