import {ActionTypes} from "../actions/actions";

const BoardCategories = {

    RECENT: 'recent',
    ALLTIME: 'alltime'
};

const initialState = {

    current: BoardCategories.RECENT,
    [BoardCategories.RECENT]: [],
    [BoardCategories.ALLTIME]: []
};

export default (state = initialState, action) => {

    switch(action.type) {

        case ActionTypes.DISPLAY_RECENT:
            return displayRecent(state);

        case ActionTypes.DISPLAY_ALLTIME:
            return displayAlltime(state);

        case ActionTypes.SET_RECENT:
            return setRecent(state, action);

        case ActionTypes.SET_ALLTIME:
            return setAlltime(state, action);

        default:
            return state;
    }
}

function displayRecent(state) {

    if(state.current === BoardCategories.RECENT)
        return state;

    return Object.assign({}, state, {

        current: BoardCategories.RECENT
    });
}

function displayAlltime(state) {

    if(state.current === BoardCategories.ALLTIME)
        return state;

    return Object.assign({}, state, {

        current: BoardCategories.ALLTIME
    });
}

function setRecent(state, action) {

    return Object.assign({}, state, {

        [BoardCategories.RECENT]: action.list
    });
}

function setAlltime(state, action) {

    return Object.assign({}, state, {

        [BoardCategories.ALLTIME]: action.list
    });
}