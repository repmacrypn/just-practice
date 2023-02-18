import React from "react";

function Employee({ surname, name, age }) {
    return <p>
        name: <span>{name} </span>
        surname: <span>{surname} </span>
        age: <span>{age}</span>
    </p>;
}

export default Employee;