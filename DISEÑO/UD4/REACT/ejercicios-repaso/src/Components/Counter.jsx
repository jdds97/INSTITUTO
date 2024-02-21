// import React from "react";
//SINTAXIS ANTIGUA
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   handleDecrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
// <div>
//   <button onClick={this.handleIncrement}>Pulsa aquí para sumar 1</button>
//   <button onClick={this.handleDecrement}>Pulsa aquí para restar 1</button>
//   <p>Has pulsado {this.state.count} veces</p>
//   {this.state.count < 0 ? <p>El contador no puede ser negativo</p> : null}
//   {this.state.count % 2 == 0 ? <p>El contador es par</p> : null}
//   {this.state.count % 2 != 0 ? <p>El contador es impar</p> : null}
// </div>
//     );
//   }
// }
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <button onClick={handleIncrement}>Pulsa aquí para sumar 1</button>
        <button onClick={handleDecrement}>Pulsa aquí para restar 1</button>
        <p>Has pulsado {count} veces</p>
        {count < 0 ? <p>El contador no puede ser negativo</p> : null}
        {count % 2 == 0 ? <p>El contador es par</p> : null}
        {count % 2 != 0 ? <p>El contador es impar</p> : null}
      </div>
    </>
  );
}
export default Counter;
