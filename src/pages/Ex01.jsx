import LivroCard from "../components/LivroCard";
import { livros } from "../data/dados";

export default function Ex01() {
  return (
    <div className="page">
      <h1 className="title">Exercício 01</h1>
      <p className="subtitle">Componente de Classificação de Livros</p>
      <div className="grid">
        {livros.map((livro, index) => (
          <LivroCard key={index} livro={livro} />
        ))}
      </div>
    </div>
  );
}