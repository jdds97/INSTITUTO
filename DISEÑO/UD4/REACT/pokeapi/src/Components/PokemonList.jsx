import React from "react";
import { List, ListItem, ListItemText, Divider, Button } from "@mui/material";

import PropTypes from "prop-types";

export default function PokemonList({ history, onClearHistory }) {
  return (
    <>
      <Divider />
      <List>
        {history
          .filter((pokemon) => pokemon.id)
          .map((pokemon, index) => (
            <React.Fragment key={pokemon.id}>
              {index > 0 && <Divider />}
              <ListItem>
                <ListItemText
                  primary={pokemon.name}
                  secondary={`#${pokemon.id}`}
                />
              </ListItem>
            </React.Fragment>
          ))}
      </List>
      {history.length > 1 && (
        <Button onClick={onClearHistory} variant="contained" color="secondary">
          Clear History
        </Button>
      )}
    </>
  );
}
PokemonList.propTypes = {
  history: PropTypes.array.isRequired,
  onClearHistory: PropTypes.func.isRequired,
};
