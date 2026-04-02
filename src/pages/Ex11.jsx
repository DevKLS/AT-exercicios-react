import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";

export default function Ex11() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="page">
      <h1 className="title">Exercício 11</h1>
      <p className="subtitle">Lista de Tarefas (TODOs)</p>
      <div className="list">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}