import { useMemo } from "react";
import { fakerPT_BR as faker } from "@faker-js/faker";

export default function Ex13() {
  const funcionarios = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      nome: faker.person.fullName(),
      cargo: faker.person.jobTitle(),
      departamento: faker.commerce.department()
    }));
  }, []);

  return (
    <div className="page">
      <h1 className="title">Exercício 13</h1>
      <p className="subtitle">Gerador de Lista de Funcionários</p>
      <div className="grid">
        {funcionarios.map((funcionario) => (
          <div key={funcionario.id} className="employee-card">
            <h3>{funcionario.nome}</h3>
            <p><strong>ID:</strong> {funcionario.id}</p>
            <p><strong>Cargo:</strong> {funcionario.cargo}</p>
            <p><strong>Departamento:</strong> {funcionario.departamento}</p>
          </div>
        ))}
      </div>
    </div>
  );
}