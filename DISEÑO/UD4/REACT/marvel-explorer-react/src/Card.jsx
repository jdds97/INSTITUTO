// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({id,nombre,imagen,descripcion}) {
 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="345"
          image={imagen}
          alt="Superhéroe"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
            
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Id {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}