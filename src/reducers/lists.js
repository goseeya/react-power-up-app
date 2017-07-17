import {LISTS_RENAME, FETCH_LIST, UPDATE_LIST} from "../actions/lists";
import axios from 'axios';

export default function ListsReducer(state = [], action) {
    switch (action.type) {
        case LISTS_RENAME:
            return state.map(list => {
                if (list.id === action.payload.id) {
                    return {...list, title: action.payload.title};
                } else {
                    return list;
                }
            });
            case FETCH_LIST:
              return action.payload
            case UPDATE_LIST:
              return action.payload
        default:
            return state;
    }
}
