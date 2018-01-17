import React, { Component } from 'react';
import LeaderboardContainer from './containers/LeaderboardContainer';

class App extends Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">

                        <h2 className="header"> Camper Leaderboard </h2>
                        <LeaderboardContainer/>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
