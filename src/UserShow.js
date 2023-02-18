import React from "react";

function UserShow({ name, surname, age, id, banUser, isBanned }) {

    let elem;

    if (isBanned) {
        elem = <span>User is banned</span>;
    } else {
        elem = <>
            name: <span>{name} </span>
            surname: <span>{surname} </span>
            age: <span>{age}</span>
        </>;
    }
    return <p>
        {elem} / <button onClick={() => banUser(id)}>{isBanned ? 'unban' : 'ban'}</button>
    </p>;
}

export default UserShow;