import "./App.css";
import useGenerateId from "./hooks/useId";

function App() {
  const b = useGenerateId();
  return <div>{b}</div>;
}

export default App;
