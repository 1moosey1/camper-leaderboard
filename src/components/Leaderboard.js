import React from 'react';
import Axios from 'axios';
import LeaderboardHeaderContainer from '../containers/LeaderboardHeaderContainer';
import LeaderboardRow from './LeaderboardRow';

class Leaderboard extends React.Component  {

    componentDidMount() {

        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(this.props.setRecent);

        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(this.props.setAlltime);
    }

    render() {

        const rows = this.props.list.map((user, index) => {

            return <LeaderboardRow user={user} id={index + 1} key={user.username}/>;
        });

        return (
            <table className="table table-striped">

                <LeaderboardHeaderContainer/>
                <tbody>{rows}</tbody>

            </table>
        );
    }
}

export default Leaderboard;