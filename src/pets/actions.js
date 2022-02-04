import {
    CREATE_PET,
    RETRIEVE_PETS,
    UPDATE_PET,
    DELETE_PET,
} from "./actionTypes";
import PetsService from "./petsService";

export const createPet =
    (name, animal, breed, location, age, sex) => async (dispatch) => {
        try {
            const res = await PetsService.create({
                name,
                animal,
                breed,
                location,
                age,
                sex,
            });
            
            dispatch({
                type: CREATE_PET,
                payload: res.data.data,                
            });
            return Promise.resolve(res.data.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const retrievePets = () => async (dispatch) => {
    try {
        const res = await PetsService.getAll();        
        dispatch({
            type: RETRIEVE_PETS,
            payload: res.data.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updatePet = (id, data) => async (dispatch) => {
    try {
        const res = await PetsService.update(id, data);
        dispatch({
            type: UPDATE_PET,
            payload: data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deletePet = (id) => async (dispatch) => {
    try {
        await PetsService.delete(id);
        dispatch({
            type: DELETE_PET,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};