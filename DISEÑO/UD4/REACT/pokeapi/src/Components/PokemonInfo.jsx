import { Typography, Divider, Grid, Card, CardMedia } from "@mui/material";

import PropTypes from "prop-types";

export default function PokemonInfo({ pokemon }) {
  const { name, id, types, height, front_default, back_default } = pokemon;

  return (
    <>
      <Typography variant="h4">{name}</Typography>
      <Typography>ID: {id}</Typography>
      <Typography>Types: {types.join(", ")}</Typography>
      <Typography>Height: {height} dm</Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia component="img" image={front_default} />
          </Card>
          <Typography align="center">Front</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia component="img" image={back_default} />
          </Card>
          <Typography align="center">Back</Typography>
        </Grid>
      </Grid>
    </>
  );
}

PokemonInfo.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
