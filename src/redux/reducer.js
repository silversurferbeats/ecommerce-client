import  {
    GET_ALL_PRODUCT
}  from "./action";

const inicialState = {
    allProduct: []
}


// REDUCER
const rootReducer = (state = inicialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload,
            }
        default: 
            return state;
    }
};

export default rootReducer;

