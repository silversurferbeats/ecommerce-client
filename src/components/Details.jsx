import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from  'react-router-dom';
import { useParams } from 'react-router-dom';
import { detailProduct } from '../redux/action';

// +++++++++++++++++++
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





function Detail(){
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log('debug ->', id);

    const idProduct = useSelector((state) => state.detailDog);
    console.log('idProduct ->', idProduct);
    
    useEffect(() => {
        dispatch(detailProduct(id));
    }, [id, dispatch]);



    const mockProduct = {
          id: 1,
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
    
    console.log('mockProduct ->',mockProduct.id);

    return (
        <>
 
        {/* 
            {
                idProduct.map((el) => {
                    return (
                        <>
                        <Card sx={{ maxWidth: 500 }}>
                            <GlassCard>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={el.image}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography>
                                            <h2>{id}</h2>
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {el.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {
                                                el.temperament.map((e, i) => {
                                                    return (
                                                        <p key={i} className="temperamentCard">{e}</p>
                                                    )
                                                })
                                            }
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </GlassCard>
                        </Card> 
                        </>
                    )
                })
            }
            <Link to='../home' ><button className="botonSubmit">volver</button></Link>
         
        */}

        <Card sx={{ maxWidth: 500 }} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={mockProduct.photo}
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {mockProduct.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            $: {mockProduct.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            rated: {mockProduct.rated}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            size: {mockProduct.size}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            status: {mockProduct.status}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            color: {mockProduct.color}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            description: {mockProduct.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
        </Card> 


        </>
    )
}

export default Detail;
