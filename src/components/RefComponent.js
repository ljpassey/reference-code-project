import React, { useRef } from "react";

const RefComponent = () => {
  const inputRef = useRef();

  const checkRef = () => {
    alert(`Your input has the string: ${inputRef.current.value}`);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="card">
      <a href="https://beta.reactjs.org/apis/react/useRef" target="_blank">
        <h2>useRef</h2>
      </a>
      <input type="text" ref={inputRef} />
      <button onClick={checkRef}>What's my ref?</button>
      <p>
        Call useRef at the top level of your component to declare one or more
        refs.
      </p>
      <p>
        On the next renders, useRef will return the same object. You can change
        its current property to store information and read it later. This might
        remind you of state, but there is an important difference.
      </p>
      <p>
        Changing a ref does not trigger a re-render. This means refs are perfect
        for storing information that doesn’t affect the visual output of your
        component. For example, if you need to store an interval ID and retrieve
        it later, you can put it in a ref. To update the value inside the ref,
        you need to manually change its current property:
      </p>
      <p>
        By using a ref, you ensure that: You can store information between
        re-renders (unlike regular variables, which reset on every render).
        Changing it does not trigger a re-render (unlike state variables, which
        trigger a re-render). The information is local to each copy of your
        component (unlike the variables outside, which are shared).
      </p>
    </div>
  );
};

export default RefComponent;
