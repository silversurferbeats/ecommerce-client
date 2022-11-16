//import axios from 'axios';

//export type ->
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';

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
    name: "Remera Azul Tigre",
    description: "lo que vos quieras",
    photo: [
      "https://sarkanyar.vtexassets.com/arquivos/ids/158438/IMG_3971rew.jpg?v=637977456016070000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158436/IMG_3970rew.jpg?v=637977455801200000%22,%22https://www.rickysarkany.com/sfreevd/p%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158445/FOTO-PRODUCTO--Sum--20200220rew.jpg?v=637977460393570000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158447/FOTO-PRODUCTO--Sum--20200221rew.jpg?v=637977460615500000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158941/FREE-NG.jpg?v=637987777636170000",
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    name: "Remera Roja Multicolor",
    description: "lo que vos quieras",
    photo: [
      "https://sarkanyar.vtexassets.com/arquivos/ids/158438/IMG_3971rew.jpg?v=637977456016070000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158436/IMG_3970rew.jpg?v=637977455801200000%22,%22https://www.rickysarkany.com/sfreevd/p%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158445/FOTO-PRODUCTO--Sum--20200220rew.jpg?v=637977460393570000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158447/FOTO-PRODUCTO--Sum--20200221rew.jpg?v=637977460615500000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158941/FREE-NG.jpg?v=637987777636170000",
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    name: "Remera Negra Tigre",
    description: "lo que vos quieras",
    photo: [
      "https://sarkanyar.vtexassets.com/arquivos/ids/158438/IMG_3971rew.jpg?v=637977456016070000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158436/IMG_3970rew.jpg?v=637977455801200000%22,%22https://www.rickysarkany.com/sfreevd/p%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158445/FOTO-PRODUCTO--Sum--20200220rew.jpg?v=637977460393570000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158447/FOTO-PRODUCTO--Sum--20200221rew.jpg?v=637977460615500000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158941/FREE-NG.jpg?v=637987777636170000",
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    name: "Remera Azul Multicolor",
    description: "lo que vos quieras",
    photo: [
      "https://sarkanyar.vtexassets.com/arquivos/ids/158438/IMG_3971rew.jpg?v=637977456016070000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158436/IMG_3970rew.jpg?v=637977455801200000%22,%22https://www.rickysarkany.com/sfreevd/p%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158445/FOTO-PRODUCTO--Sum--20200220rew.jpg?v=637977460393570000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158447/FOTO-PRODUCTO--Sum--20200221rew.jpg?v=637977460615500000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158941/FREE-NG.jpg?v=637987777636170000",
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    name: "Remera Roja Multicolor",
    description: "lo que vos quieras",
    photo: [
      "https://sarkanyar.vtexassets.com/arquivos/ids/158438/IMG_3971rew.jpg?v=637977456016070000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158436/IMG_3970rew.jpg?v=637977455801200000%22,%22https://www.rickysarkany.com/sfreevd/p%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158445/FOTO-PRODUCTO--Sum--20200220rew.jpg?v=637977460393570000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158447/FOTO-PRODUCTO--Sum--20200221rew.jpg?v=637977460615500000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158941/FREE-NG.jpg?v=637987777636170000",
    ],
    size: [36, 37, 38],
    color: ["green", "black"],
    rated: "5",
    price: 34000.99,
    status: true,
  },
  {
    name: "Remera Azul Tigre",
    description: "lo que vos quieras",
    photo: [
      "https://sarkanyar.vtexassets.com/arquivos/ids/158438/IMG_3971rew.jpg?v=637977456016070000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158436/IMG_3970rew.jpg?v=637977455801200000%22,%22https://www.rickysarkany.com/sfreevd/p%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158445/FOTO-PRODUCTO--Sum--20200220rew.jpg?v=637977460393570000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158447/FOTO-PRODUCTO--Sum--20200221rew.jpg?v=637977460615500000%22,%22https://sarkanyar.vtexassets.com/arquivos/ids/158941/FREE-NG.jpg?v=637987777636170000",
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

