import {
    CREATE_PET,
    RETRIEVE_PETS,
    UPDATE_PET,
    DELETE_PET,
} from "./actionTypes";

const initialState = [];
function petReducer(pets = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_PET:
            
            return [...pets, payload];
        case RETRIEVE_PETS:
            return payload;
        case UPDATE_PET:
            return pets.map((pet) => {
                if (pet.id === payload.id) {
                    return {
                        ...pet,
                        ...payload,
                    };
                } else {
                    return pet;
                }
            });
        case DELETE_PET:
            return pets.filter(({ id }) => id !== payload.id);
        default:
            return pets;
    }
}

export default petReducer;