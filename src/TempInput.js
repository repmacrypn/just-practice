import React from "react";

function TempInput({ temp, setTemp }) {
    return <>
        <input value={temp} onChange={event => setTemp(event.target.value)}></input>
    </>;
}

export default TempInput;