export default function LivroCard({ livro }) {
  let backgroundColor = "#ffcdd2";

  if (livro.classificacao >= 4) backgroundColor = "#c8e6c9";
  else if (livro.classificacao === 3) backgroundColor = "#fff9c4";

  return (
    <div className="card" style={{ backgroundColor }}>
      <h3>{livro.titulo}</h3>
      <p><strong>Autor:</strong> {livro.autor}</p>
      <p><strong>Classificação:</strong> {livro.classificacao}</p>
    </div>
  );
}