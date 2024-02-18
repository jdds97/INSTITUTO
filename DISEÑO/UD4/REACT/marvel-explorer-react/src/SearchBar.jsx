import { useState } from "react";

function SearchBar() {
    const [nombrePersonaje, setNombrePersonaje] = useState("");

    const tituloPersonaje = (titulo) => {
        const url = `https://gateway.marvel.com/v1/public/characters/name=${titulo}?ts=1&apikey
        =6c6852c85207adba9e725a4d7e5de26e&hash=c9cc816ada6d0dc3e7ac6b58a167e2e6`;
        

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const personaje = data.data.results[0];
                console.log(personaje);  // Imprime el nombre del personaje
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <input
                type="text"
                value={nombrePersonaje}
                onChange={(event) => setNombrePersonaje(event.target.value)}
            />
            <button onClick={tituloPersonaje}>Buscar</button>
        </div>
    );
}

export default SearchBar;