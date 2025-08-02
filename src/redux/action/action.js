import { Form, message } from "antd";
import { ADD_DATA_ITEM, DATA_FETCH_ERROR, DATA_FETCH_START, DATA_FETCH_SUCCESS, DELETE_DATA_ITEM } from "../actionTypes/actionTypes"
import { onValue, push, ref, remove } from "firebase/database";
import database from "../../firebase/firebase.init";

export const add_data_item = (item) => {
    return {
        type: ADD_DATA_ITEM,
        payload: item
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

export const delete_data = (id) =>{
    return {
        type: DELETE_DATA_ITEM,
        payload: id
    };
}

export const data_fetch_error = (error) => {
    return {
        type: DATA_FETCH_ERROR,
        payload: error
    };
}


export const start_add_animal_data = (format_data) =>{
    return async (dispatch) =>{
      try {
        const newRef = await push(ref(database, 'animal_record'), format_data);
        dispatch(add_data_item({id:newRef.key, ...format_data}));
        message.success("Data successfully added");
        
      } catch (error) {
        dispatch(data_fetch_error(error.message));
        message.error("Error occur while storing data in firebase");
      }
    }
  }


// read data from firebase database
export const fetch_animal_data = () =>{
    return async(dispatch) =>{
        dispatch(data_fetch_start());

        try {    
            const dbRef = ref(database, 'animal_record');
            const unsubscribe = onValue(dbRef, snapshot =>{
                const data = snapshot.val();
                if(data){
                    const animal_array = Object.entries(data).map(([id, value]) =>({
                        id,
                        ...value
                    }));
                    dispatch(data_fetch_success(animal_array));
                }
            });

        return unsubscribe;
        } catch (error) {
           dispatch(data_fetch_error(error.message));
        };

    }
}

// delete an item from firebase database
export const delete_animal_data = (id) =>{
    return async (dispatch) =>{
        try {
            await remove(ref(database, `animals_record/${id}`));
            dispatch(delete_data(id));  
            message.success('Successfully deleted data');

        } catch (error) {
            message.error("Error found! Check console please...");
            console.log('error.message :>> ', error.message);
        }
    }
}