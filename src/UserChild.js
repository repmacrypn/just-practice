import React from "react";
import UserField from "./UserField";

function UserChild({ id, name, surname, age, isEdited, editProp, changeState }) {
    return <p>
        name: <span>{name}, </span>

        surname: <UserField
            type='sur'
            text={surname}
            id={id}
            editProp={editProp}
            isEdited={isEdited}>
        </UserField>,

        age: <UserField
            type='age'
            text={age}
            id={id}
            editProp={editProp}
            isEdited={isEdited}>
        </UserField>

        / <button onClick={() => changeState(id)}>{isEdited ? 'save' : 'edit'}</button>
    </p>;
}

export default UserChild;