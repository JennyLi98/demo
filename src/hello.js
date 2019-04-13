import React from "react";

const Hello = ({greeting, name}) => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{greeting}</p>
      <h1>{name}, pay attention</h1>
    </div>
  );
}

export default Hello;
