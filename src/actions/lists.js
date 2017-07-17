import axios from 'axios';
export const LISTS_RENAME = 'LIST_RENAME';
export const LISTS_UPDATE = 'LIST_UPDATE';
export const LISTS_REMOVE = 'LIST_REMOVE';
export const LISTS_CREATE = 'LIST_CREATE';
export const FETCH_LIST = 'FETCH_LIST';
export const UPDATE_LIST = 'LIST_UPDATE';


export function renameList(listId, title) {
    return {
        type: LISTS_RENAME,
        payload: {
            id: listId,
            title
        }
    };
}

export function fetchList () {
  return function(dispatch) {
    axios.get(`http://localhost:3001/api/lists`)
    .then((response) =>
      dispatch({ type: 'FETCH_LIST', payload: response.data})
    );
  }
}

export function updateList () {
  return function(dispatch) {
    axios.get(`http://localhost:3001/api/lists`)
    .then((response) =>
      dispatch({ type: 'UPDATE_LIST', payload: response.data})
    );
  }
}
