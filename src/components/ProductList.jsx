import React, { useEffect } from "react";
import Card from './Card';
import { Link } from "react-router-dom";
import {Grid} from '@material-ui/core'

// REDUX
import {getAllProduct} from '../redux/action';
import { useDispatch, useSelector } from "react-redux";
import Carousel from './Carrusel';



function ProductList(props) {
    const dispatch = useDispatch();
    const allProduct = useSelector((state) => state.allProduct);
    console.log('productos Selector --->', allProduct);
    
    useEffect(()=> {
        dispatch(getAllProduct());
    })
    

    return(
        <>
            <Carousel />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                allProduct.map((el, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Link to={`/details/${index}`}>
                            <Card 
                                key={index}
                                color={el.color}
                                description={el.description}
                                name={el.name}
                                photo={el.photo}
                                price={el.price}
                                rated={el.rated}
                                size={el.size}
                                status={el.status}
                            />
                        </Link>
                    </Grid>
                ))
                }
            </Grid>
		</>
    )
}

export default ProductList;