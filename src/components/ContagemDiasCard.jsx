function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

function criarDataLocal(dia, mes, ano) {
  return new Date(ano, mes - 1, dia);
}

function calcularDiasFaltando(dia, mes, ano) {
  const hoje = new Date();
  const dataHoje = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const dataFutura = criarDataLocal(dia, mes, ano);
  const diferencaMs = dataFutura - dataHoje;
  return Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
}

export default function ContagemDiasCard({ evento }) {
  const diasFaltando = calcularDiasFaltando(evento.dia, evento.mes, evento.ano);

  return (
    <div className="card">
      <h3>{evento.titulo}</h3>
      <p><strong>Data:</strong> {formatarNumero(evento.dia)}/{formatarNumero(evento.mes)}/{evento.ano}</p>
      <p><strong>Contagem:</strong> faltam {diasFaltando} dias</p>
    </div>
  );
}