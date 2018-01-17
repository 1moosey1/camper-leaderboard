import React, { Component } from 'react';
import LeaderboardContainer from './containers/LeaderboardContainer';

const App = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">

                    <h2 className="header"> Camper Leaderboard </h2>
                    <LeaderboardContainer/>

                    <footer>
                        Design & Code by Juan Gonzalez
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default App;
