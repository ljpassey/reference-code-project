import React, { useState } from "react";

const StateComponent = () => {
  const [userInput, setUserInput] = useState("");
  // ?useState returns an array with exactly two items:
  // ?The current state of this state variable, initially set to the initial state you provided.
  // ?The set function that lets you change it to any other value in response to interaction.

  const handleUpdateState = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <div className="card">
      <a href="https://beta.reactjs.org/apis/react/useState" target="_blank">
        <h2>useState()</h2>
      </a>
      <h3>State: {userInput}</h3>
      <input
        type="text"
        placeholder="Enter state"
        onChange={handleUpdateState}
      />
      <h2>const [userInput, setUserInput] = useState("")</h2>
      <p>
        useState is a React Hook that lets you add a state variable to your
        component.
      </p>
      <p>
        The convention is to name state variables like [something, setSomething]
        using array destructuring.
      </p>
      <p>
        useState returns an array with exactly two items: The current state of
        this state variable, initially set to the initial state you provided.
        The set function that lets you change it to any other value in response
        to interaction. To update whats on the screen, call the set function
        with some next state:
      </p>
    </div>
  );
};

export default StateComponent;
