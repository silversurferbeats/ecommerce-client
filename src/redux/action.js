import axios from 'axios';

//export type ->
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';

// MOCK PRODUCT:
const product = [
    {
    "id": 1,
    "name": "manzanas",
    "image":"./image1.png",
    "shopId": 30.31
    },
    {
    "id": 2,
    "name": "peras",
    "image":"./image1.png",
    "shopId": 20.00
    },
    {
    "id": 3,
    "name": "escoba",
    "shopId": 29.34
    },
    {
    "id": 4,
    "name": "detergente",
    "image":"./image1.png",
    "shopId": 23.23
    },
    {
    "id": 3,
    "name": "pala",
    "shopId": 10.34
    },
    {
    "id": 4,
    "name": "labarropas",
    "image":"./image1.png",
    "shopId": 56.23
    }
]

// GET ALL PRODUCT
// export function getAllProduct(){
//     if(process.env.REACT_APP_API_EXTERNA === "false"){
//         return async function(dispatch){
//             let json = await product;
//             return dispatch({
//                 type: 'GET_ALL_PRODUCT',
//                 payload: json
//             })
//         } 
//     } else {
//         return async function(dispatch){
//             let json = await axios.get(process.env.REACT_APP_API_URL);
//             return dispatch({
//                 type: 'GET_ALL_PRODUCT',
//                 payload: json.data
//             })
//         }
//     }
// }


export function getAllProduct(){
    return async function(dispatch){
        let json = await product;
        return dispatch({
            type: 'GET_ALL_PRODUCT',
            payload: json
        })
    } 
}

