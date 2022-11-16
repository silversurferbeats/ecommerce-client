import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';
//import Item from './Item';
// import items from '../assets/Items.json';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';

// console.log('imagenes del carrusel -->', items);

const useStyle = makeStyles({
    carrusel: {
        width: "100%",
        height: "90vh",
    }
})

function Carrusel(props){

    const classes = useStyle();
   
    return (
        <Carousel className={classes.carrusel}>
            {/* {
                items.map( (item, i) => <Item key={i} item={item} /> )
            } */}
            <img src={img1} alt='img' />
            <img src={img2} alt='img' />
            <img src={img3} alt='img' />
        </Carousel>
    )
}
export default Carrusel;

