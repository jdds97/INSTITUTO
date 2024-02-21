import React, { useState } from "react";
import { TextField, Button, FormControl } from "@mui/material";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <FormControl onSubmit={handleSubmit}>
      <TextField
        label="Search Pokemon"
        variant="outlined"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Button variant="contained" type="submit">
        Buscar
      </Button>
    </FormControl>
  );
}
