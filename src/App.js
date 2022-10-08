import { useState } from "react";
import "./App.css";
import Id from "./components/Id";

function App() {
  let createId = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return `${s4() + "-" + s4() + "-" + s4() + "-" + s4()}`;
  };

  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push(createId());
  }
  const [arr, setArr] = useState(data);
  return (
    <div>
      <div>
        {arr.map((a) => {
          return <Id key={a} aaa={a} arr={arr} setArr={setArr} />;
        })}
      </div>
    </div>
  );
}

export default App;
