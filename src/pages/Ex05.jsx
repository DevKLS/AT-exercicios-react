import Saudacao from "../components/Saudacao";
import LivroCard from "../components/LivroCard";
import DataCard from "../components/DataCard";
import ContagemDiasCard from "../components/ContagemDiasCard";
import ContagemDiasCardComCores from "../components/ContagemDiasCardComCores";
import { livros, datas, eventos } from "../data/dados";

export default function Ex05() {
  return (
    <div className="page">
      <h1 className="title">Exercício 05</h1>
      <p className="subtitle">Componente de Saudação</p>

      <div className="section">
        <Saudacao nome="Armênio Cardoso" />
      </div>

      <div className="grid">
        <LivroCard livro={livros[0]} />
        <DataCard data={datas[0]} />
        <ContagemDiasCard evento={eventos[0]} />
        <ContagemDiasCardComCores evento={eventos[1]} />
      </div>
    </div>
  );
}