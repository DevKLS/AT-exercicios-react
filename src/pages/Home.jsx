import { Link } from "react-router-dom";

const exercicios = Array.from({ length: 16 }, (_, i) => ({
  numero: i + 1,
  rota: `/ex${String(i + 1).padStart(2, "0")}`
}));

export default function Home() {
  return (
    <div className="page">
      <h1 className="title">Lista de Exercícios ReactJS</h1>
      <p className="subtitle">Clique em um exercício para abrir a página correspondente.</p>

      <div className="grid">
        {exercicios.map((item) => (
          <Link key={item.numero} to={item.rota} className="menu-card">
            Exercício {String(item.numero).padStart(2, "0")}
          </Link>
        ))}
      </div>
    </div>
  );
}