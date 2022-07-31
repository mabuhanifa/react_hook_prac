import { useReducer, useState } from "react";

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "byValue":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(null);
  console.log(value);
  return (
    <div style={{ margin: "100px" }}>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <input type="number" onChange={(e) => setValue(Number(e.target.value))} />
      <button onClick={() => dispatch({ type: "byValue",payload:value })}>Add</button>
    </div>
  );
};

export default Counter;
