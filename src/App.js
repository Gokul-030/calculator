import React, { useState } from "react";
import "./App.css"; // Import CSS for styling
import { evaluate } from "mathjs"; // Import mathjs for correct BODMAS calculations

const App = () => {
  const [input, setInput] = useState("");

  // Function to handle button click and append value
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the display
  const handleClear = () => {
    setInput("");
  };

  // Delete the last character
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Evaluate the expression using BODMAS rule
  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString()); // Evaluates the correct mathematical order
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1 style={{ textAlign: "center", color: "#fff" }}>Calculator</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button className="operator" onClick={handleClear}>C</button>
        <button className="operator" onClick={handleDelete}>⌫</button>
        <button className="operator" onClick={() => handleClick("(")}>(</button>
        <button className="operator" onClick={() => handleClick(")")}>)</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="operator" onClick={() => handleClick("/")}>÷</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="operator" onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="operator" onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="operator" onClick={() => handleClick("%")}>%</button>
        <button className="operator" onClick={() => handleClick("+")}>+</button>

        <button className="equals" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default App;
