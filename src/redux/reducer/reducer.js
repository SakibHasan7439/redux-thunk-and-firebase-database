import { 
    ADD_DATA_ITEM, 
    DATA_FETCH_ERROR, 
    DATA_FETCH_START, 
    DATA_FETCH_SUCCESS 
} from "../actionTypes/actionTypes";

const initial_state = {
    loading: false,
    animals: [],
    error: ''
};

export const reducer = (state = initial_state, action) => {
    switch(action.type){
        case DATA_FETCH_START :
            return {
                ...state,
                loading: true,
            };

        case DATA_FETCH_SUCCESS :
            return {
                ...state,
                loading: false,
                animals: action.payload,
            };

        case DATA_FETCH_ERROR :
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case ADD_DATA_ITEM :
            return {
                ...state,
                animals: [...state.animals, action.payload]
            };

        default : return state;
    }
}