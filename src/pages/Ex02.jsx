import DataCard from "../components/DataCard";
import { datas } from "../data/dados";

export default function Ex02() {
  return (
    <div className="page">
      <h1 className="title">Exercício 02</h1>
      <p className="subtitle">Componente de Formatação de Data</p>
      <div className="grid">
        {datas.map((data, index) => (
          <DataCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}