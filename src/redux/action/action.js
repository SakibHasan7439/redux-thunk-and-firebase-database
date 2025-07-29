import { ADD_DATA_ITEM, DATA_FETCH_ERROR, DATA_FETCH_START, DATA_FETCH_SUCCESS } from "../actionTypes/actionTypes"

export const add_data_item = () => {
    return {
        type: ADD_DATA_ITEM,

    }
}

export const data_fetch_start = (item) => {
    return {
        type: DATA_FETCH_START,
        payload: item
    }
};

export const data_fetch_success = (animals) => {
    return {
        type: DATA_FETCH_SUCCESS,
        payload: animals
    };
}

export const data_fetch_error = (error) => {
    return {
        type: DATA_FETCH_ERROR,
        payload: error
    };
}