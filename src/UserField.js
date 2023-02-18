import React from "react";

function UserField({ text, id, isEdited, editProp, type }) {
    return <>
        {
            isEdited ? <input value={text} onChange={event => editProp(id, type, event)}>
            </input> : <span>{text} </span>
        }
    </>;
}

export default UserField;