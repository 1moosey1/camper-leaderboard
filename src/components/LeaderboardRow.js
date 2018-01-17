import React from 'react';

const LeaderboardRow = props => {

    return(
        <tr>
            <td> {props.id} </td>
            <td> {props.user.username} </td>
            <td> {props.user.recent} </td>
            <td> {props.user.alltime} </td>
        </tr>
    );
};

export default LeaderboardRow;