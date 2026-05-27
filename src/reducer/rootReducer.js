import {userReducer} from "./userReducer.js";
import {statsReducer} from "./statsReducer.js";

/*
type State = {
    user: {
        avatar: string,
        name: string
    },
    stats: {
        followers: number,
        following: number
    }
}
 */

export const rootReducer = (state, action) => {
    return {
        user: userReducer(state.user, action),
        stats: statsReducer(state.stats, action)
    }
}