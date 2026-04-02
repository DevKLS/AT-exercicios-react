import ContagemDiasCardComCores from "../components/ContagemDiasCardComCores";
import { eventos } from "../data/dados";

export default function Ex04() {
  return (
    <div className="page">
      <h1 className="title">Exercício 04</h1>
      <p className="subtitle">Componente de Contagem de Dias com Cores</p>
      <div className="grid">
        {eventos.map((evento, index) => (
          <ContagemDiasCardComCores key={index} evento={evento} />
        ))}
      </div>
    </div>
  );
}