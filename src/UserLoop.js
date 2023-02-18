import React from "react";

function UserLoop({ name, age, surname }) {
    return <table>
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{age}</td>
            </tr>
        </tbody>
    </table>;
}

export default UserLoop