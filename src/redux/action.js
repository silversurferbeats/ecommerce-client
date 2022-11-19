import Item1 from '../assets/image1.png';
import Item2 from '../assets/image2.png'
import Item3 from '../assets/image3.png'
import Item4 from '../assets/image4.png'
import Item5 from '../assets/image5.png'
import Item6 from '../assets/image6.png'




//import axios from "axios";

//export type ->
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';

// MOCK PRODUCT:
// const product = [
//     {
//     "id": 1,
//     "name": "manzanas",
//     "image":"./image1.png",
//     "shopId": 30.31
//     },
//     {
//     "id": 2,
//     "name": "peras",
//     "image":"./image1.png",
//     "shopId": 20.00
//     },
//     {
//     "id": 3,
//     "name": "escoba",
//     "shopId": 29.34
//     },
//     {
//     "id": 4,
//     "name": "detergente",
//     "image":"./image1.png",
//     "shopId": 23.23
//     },
//     {
//     "id": 3,
//     "name": "pala",
//     "shopId": 10.34
//     },
//     {
//     "id": 4,
//     "name": "labarropas",
//     "image":"./image1.png",
//     "shopId": 56.23
//     }
// ]

const product2 = [
  {
    id: 1,
    name: "Remera Azul Tigre",
    description: "lo que vos quieras",
    photo: [
      Item6
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    id: 2,
    name: "Remera Roja Multicolor",
    description: "lo que vos quieras",
    photo: [
      Item1
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    id: 3,
    name: "Remera Negra Tigre",
    description: "lo que vos quieras",
    photo: [
      Item5
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    id: 4,
    name: "Remera Azul Multicolor",
    description: "lo que vos quieras",
    photo: [
      Item2
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    id: 5,
    name: "Remera Roja Multicolor",
    description: "lo que vos quieras",
    photo: [
      Item4
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    id: 6,
    name: "Remera Azul Tigre",
    description: "lo que vos quieras",
    photo: [
      Item3
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  }
];

// {
//     "name":"Remera Azul Tigre",
//     "description":"lo que vos quieras",
//     "photo":["https://sarkanyar.vtexassets.com/arquivos/ids/158438/IMG_3971rew.jpg?v=637977456016070000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158436/IMG_3970rew.jpg?v=637977455801200000%22,%22https://www.rickysarkany.com/sfreevd/p%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158445/FOTO-PRODUCTO--Sum--20200220rew.jpg?v=637977460393570000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158447/FOTO-PRODUCTO--Sum--20200221rew.jpg?v=637977460615500000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158941/FREE-NG.jpg?v=637987777636170000"],
//     "size":[36,37,38],
//     "color":["green","black"],
//     "rated": "5",
//     "price":34000.99,
//    "status": true
//   }

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
        let json = await product2;
        return dispatch({
            type: 'GET_ALL_PRODUCT',
            payload: json
        })
    } 
}


export function detailProduct(id){
  return async function(dispatch){
    let producJson = await product2; // axios(`http://localhost:3000/details/${id}`)
    console.log('debug accion ->',producJson);

    return dispatch({
      type: 'DETAIL_PRODUCT',
      payload: producJson
    })
  }
}
