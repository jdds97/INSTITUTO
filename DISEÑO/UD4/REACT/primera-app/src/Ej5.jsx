import Bentley from "./assets/gratis-png-bentley.png";
function Ej5() {
  let url = "DISEÑO/UD4/REACT/primera-app/src/assets/gratis-png-bentley.png";
  function multiplicar(a, b) {
    return a * b;
  }

  let element1 = (
    <div>
      <h1>{2 + 2}</h1>
      <h2>{url}</h2>
      <img src={Bentley}gestor
       alt="" />
      <div>{multiplicar(2, 3)}</div>
    </div>
  );
  let element2 = <h2>{multiplicar(2, 3)}</h2>;
  return (
    <>
      {element1}
      {element2}
    </>
  );
}
export default Ej5;
