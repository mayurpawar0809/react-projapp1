import logo from "./logo.svg";
import "./App.css";

function App() {
  //data menber
  let title = "event demo";

  let myfun = () => {
    alert("i am handler");
  };
  return (
    <div>
      <h1>{title} </h1>
      <input type="button" value="click me" onClick={myfun} />
    </div>
  );
}


export default App;
