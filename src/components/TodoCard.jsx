export default function TodoCard({ todo }) {
  return (
    <div className={`todo-card ${todo.completed ? "done" : ""}`}>
      <h3>{todo.title}</h3>
      <p><strong>Status:</strong> {todo.completed ? "Concluída" : "Pendente"}</p>
      <span className="badge">Usuário {todo.userId}</span>
    </div>
  );
}