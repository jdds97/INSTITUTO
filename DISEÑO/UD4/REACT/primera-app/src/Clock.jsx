import { useState } from "react";
function Clock() {
  const [time, setTime] = useState(new Date());
  function tiempo() {
    setTime(time.toLocaleTimeString);
  }
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {tiempo()}</h2>
    </div>
  );
}
export default Clock;
