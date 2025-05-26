import React, { useRef, useState } from "react";

export default function App15() {
  const nameRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();
  const colorRef = useRef();

  const [sum, setSum] = useState(null);
  const [textColor, setTextColor] = useState("black"); // default is black

  const handleNameSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue";
  };

  const handleSumSubmit = () => {
    const n1 = parseFloat(num1Ref.current.value) || 0;
    const n2 = parseFloat(num2Ref.current.value) || 0;
    setSum(n1 + n2);
  };

  const handleColorSubmit = () => {
    const color = colorRef.current.value.toLowerCase();
    setTextColor(color);
  };

  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>

      {/* Name input */}
      <p>
        <input type="text" ref={nameRef} placeholder="Enter your name" />
      </p>
      <button onClick={handleNameSubmit}>Submit</button>

      <hr />

      {/* Two number inputs */}
      <div>
        <input type="text" ref={num1Ref} placeholder="Enter number 1" />
        <input type="text" ref={num2Ref} placeholder="Enter number 2" />
        <button onClick={handleSumSubmit}>Submit</button>
        <div>{sum !== null && <p>{sum}</p>}</div>
      </div>

      <hr />

      {/* Color input to change Hello world color */}
      <div>
        <input type="text" ref={colorRef} placeholder="Enter a color" />
        <button onClick={handleColorSubmit}>Submit</button>
        <h2 style={{ color: textColor }}>Hello world</h2>
      </div>
    </div>
  );
}