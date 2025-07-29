import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (key) => {
    if (key === "clear") {
      setInput("");
      setOutput("");
    } else if (key === "=") {
      try {
        const result = eval(input.replace("%", "/100"));
        setOutput(result);
      } catch {
        setOutput("Error");
      }
    } else if (key === "brackest") {
      setInput((prev) =>
        prev.includes("(") && !prev.includes(")") ? prev + ")" : prev + "("
      );
    } else {
      setInput(input + key);
    }
  };

  const keys = [
    { label: "C", key: "clear", className: "hapus" },
    { label: "()", key: "brackest", className: "op" },
    { label: "%", key: "%", className: "op" },
    { label: "/", key: "/", className: "op" },
    { label: "7", key: "7", className: "angka" },
    { label: "8", key: "8", className: "angka" },
    { label: "9", key: "9", className: "angka" },
    { label: "X", key: "*", className: "op" },
    { label: "4", key: "4", className: "angka" },
    { label: "5", key: "5", className: "angka" },
    { label: "6", key: "6", className: "angka" },
    { label: "-", key: "-", className: "op" },
    { label: "1", key: "1", className: "angka" },
    { label: "2", key: "2", className: "angka" },
    { label: "3", key: "3", className: "angka" },
    { label: "+", key: "+", className: "op" },
    { label: "00", key: "00", className: "angka" },
    { label: "0", key: "0", className: "angka" },
    { label: ".", key: ".", className: "angka" },
    { label: "=", key: "=", className: "op" },
  ];

  return (
    <div>
      <div className="layar">
        <div className="content">
          <div className="input">
            <span>{input}</span>
          </div>
          <div className="output">{output}</div>
        </div>
      </div>
      <div className="btn">
        {keys.map(({ label, key, className }) => (
          <Button
            key={key + label}
            label={label}
            onClick={() => handleClick(key)}
            className={className}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
