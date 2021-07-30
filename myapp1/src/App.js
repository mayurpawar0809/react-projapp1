import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

 export default function App() {
  //let list =["hello","hello"];


  //declaring variable usin react::hooks
  //array destructuring

  const [list,setList]= useState([""]);


//arrow function
  const addNewHello = () => {
   // list.push("hello");
   const newList=[...list,"hello"];
   setList(newList);

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

//export default App;
