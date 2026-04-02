import ContagemDiasCard from "../components/ContagemDiasCard";
import { eventos } from "../data/dados";

export default function Ex03() {
  return (
    <div className="page">
      <h1 className="title">Exercício 03</h1>
      <p className="subtitle">Componente de Contagem de Dias</p>
      <div className="grid">
        {eventos.map((evento, index) => (
          <ContagemDiasCard key={index} evento={evento} />
        ))}
      </div>
    </div>
  );
}