import React, { useState } from "react";
import UserChild from "./UserChild";
import { nanoid } from 'nanoid';

function UserParent() {
    const [userArray, setUserArray] = useState(userData);

    const items = userArray.map(obj => {
        return <UserChild
            key={obj.id}
            id={obj.id}
            name={obj.name}
            surname={obj.sur}
            age={obj.age}
            isEdited={obj.isEdited}
            changeState={changeState}
            editProp={editProp}>
        </UserChild>
    });

    function changeState(id) {
        setUserArray(userArray.map(obj => {
            if (obj.id === id) {
                obj.isEdited = !obj.isEdited;
            }

            return obj;
        }));
    }

    function editProp(id, property, event) {
        setUserArray(userArray.map(obj => {
            if (obj.id === id) {
                obj[property] = event.target.value;
            }

            return obj;
        }));
    }

    return <div>
        {items}
    </div>;
}

const userData = [
    {
        id: nanoid(),
        name: 'Art1k',
        sur: 'qqq',
        age: 1488,
        isEdited: false,
    },
    {
        id: nanoid(),
        name: 'Kost1k',
        sur: 'kkk',
        age: 1337,
        isEdited: false,
    },
    {
        id: nanoid(),
        name: 'Mer1k',
        sur: 'fff',
        age: 228,
        isEdited: false,
    },
];

export default UserParent;