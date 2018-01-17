export const ActionTypes = {

    DISPLAY_RECENT: 'display_recent',
    DISPLAY_ALLTIME: 'display_alltime',
    SET_RECENT: 'set_recent',
    SET_ALLTIME: 'set_alltime'
};

export const displayRecentAction = () => {

    return {

        type: ActionTypes.DISPLAY_RECENT
    }
};

export const displayAlltimeAction = () => {

    return {

        type: ActionTypes.DISPLAY_ALLTIME
    }
};

export const setRecentAction = (recentList) => {

    return {

        type: ActionTypes.SET_RECENT,
        list: recentList
    }
};

export const setAlltimeAction = (alltimeList) => {

    return {

        type: ActionTypes.SET_ALLTIME,
        list: alltimeList
    }
};