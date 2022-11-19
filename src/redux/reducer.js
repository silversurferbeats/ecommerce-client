import  {
    GET_ALL_PRODUCT,
    DETAIL_PRODUCT
}  from "./action";

const inicialState = {
    allProduct: [],
    detailProduct: []
}


// REDUCER
const rootReducer = (state = inicialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload,
            }
        case DETAIL_PRODUCT:
            console.log('debug reducer idProduct->', action.payload);
            return{
                ...state,
                detailProduct: action.payload
            }
        default: 
            return state;
    }
};

export default rootReducer;

