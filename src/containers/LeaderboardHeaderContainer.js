import {connect} from 'react-redux';
import LeaderBoardHeader from '../components/LeaderboardHeader';

import {displayRecentAction, displayAlltimeAction} from "../actions/actions";

const mapDispatchToProps = dispatch => {

    return {

        displayRecent:  () => dispatch(displayRecentAction()),
        displayAlltime: () => dispatch(displayAlltimeAction())
    };
};

export default connect(null, mapDispatchToProps)(LeaderBoardHeader);