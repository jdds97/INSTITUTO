import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

/**
 * Componente de tarjeta con área de acción.
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.id - El ID del personaje o cómic.
 * @param {string} props.nombre - El nombre del personaje o cómic.
 * @param {string} props.imagen - La URL de la imagen del personaje o cómic.
 * @param {string} props.descripcion - La descripción del personaje o cómic.
 * @param {string[]} props.creadores - Los creadores del cómic.
 * @param {string} props.fechaLanzamiento - La fecha de lanzamiento del cómic.
 * @returns {JSX.Element} Elemento JSX que representa la tarjeta con área de acción.
 *
 */
const ActionAreaCard = React.forwardRef(function ActionAreaCard( //forwardRef es una función que nos permite pasar
  // una referencia a un elemento del DOM a un componente hijo.Esto lo hacemos para el useRef que se encuentra en App.jsx
  { id, nombre, imagen, descripcion, creadores, fechaLanzamiento },
  ref
) {
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto", marginTop: "20px" }} ref={ref}>
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
          {/* Si el id existe, se renderiza el id del personaje o cómic en un
            elemento Typography. */}
          {id && (
            <Typography variant="h5" color="text.secondary">
              Id {id}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
        {/* Si fechaLanzamiento existe, se renderiza la fecha de lanzamiento del
          cómic en un elemento Typography. */}
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
        {/* Si creadores existe, se renderiza los creadores del cómic en un
          elemento Typography. */}
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
  );
});
//PropTypes es una librería que nos permite validar las propiedades que recibe un componente.
ActionAreaCard.propTypes = {
  fechaLanzamiento: PropTypes.string,
  creadores: PropTypes.array,
  descripcion: PropTypes.string,
  imagen: PropTypes.string,
  nombre: PropTypes.string,
  id: PropTypes.number,
};
export default ActionAreaCard;
