import React from "react";

const Result = ({ term, secretNum }) => {
  let result;
  if (term) {
    if (secretNum > term) {
      result = "Lower";
    } else if (secretNum < term) {
      result = "Higher";
    } else if (secretNum == term) {
      result = "Yippee, correct!";
    } else {
      result = "Enter Valid Input";
    }
  }
  return <h3>You Guessed: {result}</h3>;
};

export default Result;
