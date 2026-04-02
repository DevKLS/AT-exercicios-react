import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import Alerta from "../components/Alerta";

export default function Ex07() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();
    setMensagem("");

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      setTipo("SUCESSO");
      setMensagem("Conta criada com sucesso.");
      setEmail("");
      setSenha("");
    } catch (error) {
      setTipo("ERRO");
      setMensagem(error.message);
    }
  };

  return (
    <div className="page">
      <h1 className="title">Exercício 07</h1>
      <p className="subtitle">Tela de Cadastro com Firebase Auth</p>

      <form className="form-box" onSubmit={handleCadastro}>
        <h2>Criar conta</h2>
        <input className="input" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="input" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button className="button" type="submit">Cadastrar</button>
        {mensagem && <Alerta tipo={tipo} mensagem={mensagem} />}
      </form>
    </div>
  );
}