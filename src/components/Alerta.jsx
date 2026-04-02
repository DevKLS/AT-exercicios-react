export default function Alerta({ mensagem, tipo }) {
  let backgroundColor = "#fff3cd";

  if (tipo === "ERRO") backgroundColor = "#f8d7da";
  if (tipo === "SUCESSO") backgroundColor = "#d1e7dd";
  if (tipo === "ATENCAO") backgroundColor = "#fff3cd";

  return (
    <div className="alert" style={{ backgroundColor }}>
      {tipo}: {mensagem}
    </div>
  );
}