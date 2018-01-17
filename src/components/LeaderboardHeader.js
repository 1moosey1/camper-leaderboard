import React from 'react';

const LeaderboardHeader = props => {

    return(
        <thead>
            <tr>
                <th> # </th>
                <th> Username </th>
                <th onClick={props.displayRecent}> Recent </th>
                <th onClick={props.displayAlltime}> All Time </th>
            </tr>
        </thead>
    );
};

export default LeaderboardHeader;