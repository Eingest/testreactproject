import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Hello"/>
      <Todo text="This"/>
      <Todo text="Is"/>
    </div>
  );
}

export default App;
