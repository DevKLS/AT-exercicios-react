import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import { usuarios } from "../data/dados";

export default function Ex12() {
  const [usuarioId, setUsuarioId] = useState(1);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [usuarioId]);

  return (
    <div className="page">
      <h1 className="title">Exercício 12</h1>
      <p className="subtitle">Filtro de Tarefas por Usuário</p>

      <select className="select" value={usuarioId} onChange={(e) => setUsuarioId(Number(e.target.value))}>
        {usuarios.map((usuario) => (
          <option key={usuario.id} value={usuario.id}>{usuario.nome}</option>
        ))}
      </select>

      <div className="list">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}