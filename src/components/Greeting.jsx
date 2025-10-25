import react, { Fragment } from "react";
function Greeting(props) {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <h1>
        Helllo , {props.name} {props.surname}!
      </h1>
      <h2>this text react h2</h2>
    </div>
  );
}

export default Greeting;
