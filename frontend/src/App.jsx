import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";

function App() {
  // var axios = require('axios')
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  // .then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos);
  // })

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then(async function (res) {
        console.log(res);
        setTodos(res.data.todos);
      })
      .catch((error) => console.log(error));
  }, [setTodos]);
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
