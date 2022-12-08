import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";

const ContextComponent = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div className="card">
      <h2>
        <a
          href="https://beta.reactjs.org/apis/react/useContext"
          target="_blank"
        >
          useContext
        </a>{" "}
        +{" "}
        <a
          href="https://beta.reactjs.org/apis/react/useReducer"
          target="_blank"
        >
          useReducer
        </a>
      </h2>
      <p>
        Call useContext at the top level of your component to read and subscribe
        to context.
      </p>
      <p>
        To update context, you need to combine it with state. Declare a state
        variable in the parent component, and pass the current state down as the
        context value to the provider.
      </p>
      <p>-------------------------------------------</p>
      <p>
        Call useReducer at the top level of your component to manage state with
        a reducer.
      </p>
      <p>
        useReducer returns an array with exactly two items: The current state of
        this state variable, initially set to the initial state you provided.
        The dispatch function that lets you change it in response to
        interaction. To update what’s on the screen, call dispatch with an
        object representing what the user did, called an action:
      </p>
      <p>
        React will pass the current state and the action to your reducer
        function. Your reducer will calculate and return the next state. React
        will store that next state, render your component with it, and update
        the UI.
      </p>
      <p>-------------------------------------------</p>
      <h4>Name: {state.name}</h4>
      <h4>Count: {state.count}</h4>
      <h4>List: </h4>
      <ul>
        {state.list.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  );
};

export default ContextComponent;
