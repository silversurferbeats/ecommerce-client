import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $: {props.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            rated: {props.rated}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            size: {props.size}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            status: {props.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            color: {props.color}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            description: {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}