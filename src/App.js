import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div style={{ margin: "100px" }}>
      <Counter/>
      <Todo />
    </div>
  );
}

export default App;
