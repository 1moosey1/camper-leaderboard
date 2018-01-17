import {connect} from 'react-redux';
import Leaderboard from '../components/Leaderboard';

import {setRecentAction, setAlltimeAction} from "../actions/actions";

const mapStateToProps = state => {

    return {

        list: state[state.current]
    };
};

const mapDispatchToProps = dispatch => {

    return {

        setRecent: recentList => {
            dispatch(setRecentAction(recentList.data));
        },

        setAlltime: alltimeList => {
            dispatch(setAlltimeAction(alltimeList.data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);