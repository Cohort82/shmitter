import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "../reducer/rootReducer.js";

const initialState = {
    user: {
        avatar: 'https://gravatar.com/avatar/000?d=mp',
        name: 'Monster'
    },
    stats: {
        followers: 0,
        following: 0
    }
}

export const store = createStore(rootReducer, initialState);