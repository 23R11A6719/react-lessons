import React from "react";
import Fruit from "./Fruit";

export default function App6() {
  return (
    <div>
      <h1>App6</h1>
      <h2>Assignment</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Fruit name="Apple" emoji="🍎" />
        <Fruit name="Orange" emoji="🍊" />
        <Fruit name="Mango" emoji="🥭" />
        <Fruit name="Banana" emoji="🍌" />
      </div>
    </div>
  );
}