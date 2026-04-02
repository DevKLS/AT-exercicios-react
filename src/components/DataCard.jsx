import { diasSemana, meses } from "../data/dados";

function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

function criarDataLocal(dia, mes, ano) {
  return new Date(ano, mes - 1, dia);
}

export default function DataCard({ data }) {
  const dataObj = criarDataLocal(data.dia, data.mes, data.ano);
  const diaSemana = diasSemana[dataObj.getDay()];
  const nomeMes = meses[data.mes - 1];

  return (
    <div className="card">
      <h3>{formatarNumero(data.dia)}/{formatarNumero(data.mes)}/{data.ano}</h3>
      <p><strong>Dia da semana:</strong> {diaSemana}</p>
      <p><strong>Mês:</strong> {nomeMes}</p>
    </div>
  );
}