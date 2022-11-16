import React from 'react';
import { Paper, Button } from '@mui/material';
// import img from '../assets/image1.png'

function Item(props){
    console.log('imagenes en items -->', props.item.image);
    return (
        <Paper>
            <h2>{props.item.title}</h2>
            <img src={props.item.image} alt='image' />

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Item;