import React, { useEffect, useState } from "react";
import axios from "axios";

//! https://beta.reactjs.org/apis/react/useEffect

// ? You need to pass two arguments to useEffect:
// ? A setup function with setup code that connects to that system.
// ? It should return a cleanup function with cleanup code that disconnects from that system.
// ? A list of dependencies including every value from your component used inside of those functions.

// ? React calls your setup and cleanup functions whenever it’s necessary, which may happen multiple times:
// ? Your setup code runs when your component is added to the page (mounts).
// ? After every re-render of your component where the dependencies have changed:
// ? First, your cleanup code runs with the old props and state.
// ? Then, your setup code runs with the new props and state.
// ? Your cleanup code runs one final time after your component is removed from the page (unmounts).

const EffectComponent = () => {
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get("https://www.swapi.tech/api/people/2")
      .then((res) => {
        setData(res.data.result.properties);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="card">
      <a href="https://beta.reactjs.org/apis/react/useEffect" target="_blank">
        <h2>useEffect()</h2>
      </a>
      <h4>
        Useful for things like: Connecting to a chat server, listening to a
        global browser event, triggering an animation, controlling a modal
        dialogue, or tracking element visibility.
      </h4>
      <h3>Name: "{data.name}" pulled from SWAPI via axios</h3>
      <p>You need to pass two arguments to useEffect: </p>
      <p>
        1. A setup function with setup code that connects to that system. It
        should return a cleanup function with cleanup code that disconnects from
        that system.
      </p>
      <p>
        2. A list of dependencies including every value from your component used
        inside of those functions.
      </p>
    </div>
  );
};

export default EffectComponent;
