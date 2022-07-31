import { useReducer, useState } from "react";

const initialState = {
  count: 0,
  users: [
    {
      id: Date.now(),
      name: "John",
      email: "john@example.com",
    },
  ],
};
//   count: 0,
//   users:

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
    case "add":
      return { ...state, users: [...state.users, action.payload] };

    case "delete":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const submitForm = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    dispatch({ type: "add", payload: contact });
  };
  const byValue = () => {
        
    if (typeof value !== "number") {
      alert("Please enter a number");
    } else {
      dispatch({ type: "byValue", payload: value });
    }
  };
  return (
    <div style={{ margin: "100px" }}>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <input type="number" onChange={(e) => setValue(Number(e.target.value))} />
      <button onClick={byValue}>Add</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          gap: "10px",
        }}
      >
        <div>
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
          }}
        >
          {state.users.map((user) => {
            return (
              <ul
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
                key={user.id}
              >
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.id}</li>
                <button
                  onClick={() =>
                    dispatch({ type: "delete", payload: { id: user.id } })
                  }
                >
                  Delete
                </button>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counter;
