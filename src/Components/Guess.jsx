import React, { useState } from "react";
import Result from "./Result";
import "./Guess.css";

const Guess = ({ secret = Math.floor(Math.random() * 20) + 1 }) => {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess Number between 1 to 20</label>
      </div>
      <input
        id="term"
        type="text"
        name="term"
        value={term}
        onChange={handleChange}
      />
      <Result term={term} secretNum={secret} />
    </div>
  );
};

export default Guess;
