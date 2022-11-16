import React, { useEffect } from "react";
import Card from './Card';
//import {  IconButton, GridListTileBar, GridListTile, GridList  } from "@material-ui/core"
//import { Link } from "react-router-dom";
import {Grid} from '@material-ui/core'

// REDUX
import {getAllProduct} from '../redux/action';
import { useDispatch, useSelector } from "react-redux";



function ProductList(props) {
    const dispatch = useDispatch();
    const allProduct = useSelector((state) => state.allProduct);
    console.log('productos Selector --->', allProduct);
    
    useEffect(()=> {
        dispatch(getAllProduct());
    })
    

    return(
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                allProduct.map((el, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card 
                            key={el.id}
                            image={el.image}
                            title={el.name}
                            price={el.shopId}
                        />
                    </Grid>
                ))
                }
            </Grid>
		</>
    )
}

export default ProductList;