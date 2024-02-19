import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import "./Card.css";

const ActionAreaCard = React.forwardRef(function ActionAreaCard(
  { id, nombre, imagen, descripcion, creadores, fechaLanzamiento },
  ref
) {
  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }} ref={ref}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="345"
            image={imagen}
            alt="Superhéroe/Cómic de Marvel"
          />

          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {nombre}
            </Typography>

            {id && (
              <Typography variant="h5" color="text.secondary">
                Id {id}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
          {/*el código dentro de los paréntesis (...) solo se renderizará si fechaLanzamiento es verdadero (o "truthy").*/}
          {fechaLanzamiento && (
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fecha de lanzamiento
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {fechaLanzamiento}
              </Typography>
            </CardContent>
          )}
          {creadores && (
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Creado por
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {creadores.join(", ")}
              </Typography>
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </div>
  );
});

ActionAreaCard.propTypes = {
  fechaLanzamiento: PropTypes.string,
  creadores: PropTypes.array,
  descripcion: PropTypes.string,
  imagen: PropTypes.string,
  nombre: PropTypes.string,
  id: PropTypes.number,
};

export default ActionAreaCard;
