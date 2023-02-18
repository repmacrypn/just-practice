import React from "react";

function User({ name, cost }) {
    return <p>
        name: <span>{name} </span>
        cost: <span>{cost}</span>
    </p>;
}

export default User;