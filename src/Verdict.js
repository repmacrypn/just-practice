import React from "react";

function Verdict({ temp }) {
    let state;
    if (+temp > 0 && +temp <= 100) state = 'liquid';
    if (+temp > 100) state = 'gaseous';
    if (+temp <= 0) state = 'solid';

    return <p>{state}</p>
}

export default Verdict;