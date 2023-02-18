import React, { useState } from "react";
import UserShow from "./UserShow";
import { nanoid } from 'nanoid';

function UserState() {                                                       //бан юзера через кнопку и родительские компоненты
    const [userState, setUserState] = useState(userData);

    const items = userState.map(obj => {
        return <UserShow
            key={obj.id}
            id={obj.id}
            name={obj.name}
            surname={obj.surname}
            age={obj.age}
            isBanned={obj.isBanned}
            banUser={banUser}>
        </UserShow>;
    });

    function banUser(id) {
        setUserState(userState.map(obj => {
            if (obj.id === id) {
                obj.isBanned = !obj.isBanned;
            }

            return obj;
        }));
    }

    return <>
        {items}
    </>;
}

const userData = [
    {
        id: nanoid(),
        name: 'aaaaaaaaaaaa',
        sur: 'qqq',
        age: 1488,
        isBanned: false,
    },
    {
        id: nanoid(),
        name: 'bbbbbbbbbbbbb',
        sur: 'kkk',
        age: 1337,
        isBanned: false,
    },
    {
        id: nanoid(),
        name: 'ccccccccccccc',
        sur: 'fff',
        age: 22833333333,
        isBanned: false,
    },
];



export default UserState;