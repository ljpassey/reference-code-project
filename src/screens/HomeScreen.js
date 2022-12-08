import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const userInputRef = useRef();

  const handleClick = () => {
    let checkInput = +userInputRef.current.value;
    console.log(typeof checkInput);
    if (Number.isFinite(checkInput) && checkInput > 0) {
      console.log("number");
      navigate(`/details/${checkInput}`);
    } else {
      alert("Must enter a valid number");
    }
  };
  return (
    <div className="col-container card">
      <h1>Generate a Pokemon by typing a number</h1>
      <input type="text" ref={userInputRef} />
      <button onClick={handleClick}>Leave</button>
    </div>
  );
};

export default HomeScreen;
