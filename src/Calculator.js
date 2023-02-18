import React, { useState } from "react";
import TempInput from "./TempInput";
import Verdict from "./Verdict";

function Calculator() {
    const [temp, setTemp] = useState(0);

    return <div>
        <TempInput temp={temp} setTemp={setTemp}></TempInput>
        <Verdict temp={temp}></Verdict>
    </div>;
}

export default Calculator;