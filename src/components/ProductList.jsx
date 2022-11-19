import React, { useEffect } from "react";
import Card from './Card';
import { Link } from "react-router-dom";
import {Grid} from '@material-ui/core';
import bgGrid from '../assets/backgroundGrdCard.png';

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
            
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }}
                style={{ 
                    backgroundImage: `url(${bgGrid})`,
                    // backgroundColor: 'gray',
                    margin: '2rem' 
                }}
            >
                {
                allProduct.map((el) => (
                    <Grid item xs={12} sm={6} md={4} key={el.id}  >
                        <Link to={`/details/${el.id}`} style={{ textDecoration: 'none', color: 'gray' }}>
                            <Card 
                                key={el.id}
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