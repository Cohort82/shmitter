import {CHANGE_STATS} from "../actions/statsActions.js";

/*
type State = {
        followers: number,
        following: string,
    }
 */

export const statsReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_STATS: {
            const res = state[action.payload.statsType] + action.payload.sum;
            return {...state, [action.payload.statsType]: res < 0 ? 0 : res};
        }
        default:
            return state;
    }
}