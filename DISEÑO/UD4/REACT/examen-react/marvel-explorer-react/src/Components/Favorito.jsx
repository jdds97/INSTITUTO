import PropTypes from "prop-types";
import { Button } from "@mui/material";

export default function Favorito({ onFavorito }) {
  return (
    <Button variant="contained" type="submit" onClick={onFavorito}>
      Añadir a favoritos
    </Button>
  );
}

Favorito.propTypes = {
  onFavorito: PropTypes.func.isRequired,
};
