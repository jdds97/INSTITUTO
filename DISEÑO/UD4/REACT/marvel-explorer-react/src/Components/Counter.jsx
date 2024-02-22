import { Typography } from "@mui/material";
import PropTypes from "prop-types";
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  mensaje: PropTypes.string.isRequired,
};
export default function Counter({ mensaje, count }) {
  return (
    <Typography variant="h4">
      {mensaje}: 
      {count}
    </Typography>
  );
}
