
import {useState} from 'react'

function Counter(){

    const [contador,setContador]= useState(0);
    function contadorMas(){
        setContador(contador+1);
    }
    render(<>
    
        <button onclick={contadorMas}></button>
    </>);
}
export default Counter;
