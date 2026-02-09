import ReactDOM from "react-dom/client";
import React, { useState } from "react";
const Charater = () => {
  const [text, setText] = useState("");
  const [maxValue, setMaxValue] = useState(50);

  return (
    <>
      <div className="container">
        <h1>Character Count</h1>
        <p>Track your input length with live character warnings.</p>
        <h4>
          max length{" "}
          <input
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
          />
        </h4>
        <textarea
          value={text}
          disabled={text.length >= maxValue}
          style={{ color: text.length >= { maxValue } ? "red" : "black" }}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <p>
          {text.length}/ {maxValue}
        </p>
        {text.length >= maxValue && (
          <p style={{ color: "red" }}>limit is excessed </p>
        )}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Charater />);
