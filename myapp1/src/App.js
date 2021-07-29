import logo from "./logo.svg";
import "./App.css";

function App() {
  let title = "hello react;";
  let list = ["delhi", "calcutta", "mumbai", "pune"];

  return (
    <div>
      <h1>{title} </h1>
      <ul>
        {list.map((item) => {
          return <li>{item} </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
