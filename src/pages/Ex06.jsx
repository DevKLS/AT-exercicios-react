import Alerta from "../components/Alerta";

export default function Ex06() {
  return (
    <div className="page">
      <h1 className="title">Exercício 06</h1>
      <p className="subtitle">Componente de Alertas</p>
      <div className="list">
        <Alerta tipo="ERRO" mensagem="Ocorreu um erro ao processar a operação." />
        <Alerta tipo="SUCESSO" mensagem="Operação realizada com sucesso." />
        <Alerta tipo="ATENCAO" mensagem="Atenção: confira os dados antes de continuar." />
      </div>
    </div>
  );
}