import logo from "./logo.svg";
import "./App.css";

 function App() {
  let list =["hello","hello"];

  const addNewHello = () => {
    list.push("hello");
    console.log(list);
  };



  //view
  return (
    <div>
      <h1>workin with event </h1>
      <input type="button" value="say hello" onClick={addNewHello} />
      {list.map((item) => {
        return <h3>{item} </h3>;
      })}
    </div>
  );
}

export default App;
