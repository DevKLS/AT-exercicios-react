import { useMemo } from "react";
import { fakerPT_BR as faker } from "@faker-js/faker";

export default function Ex14() {
  const funcionarios = useMemo(() => {
    const lista = Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      nome: faker.person.fullName(),
      cargo: faker.person.jobTitle(),
      departamento: faker.commerce.department()
    }));

    return lista.sort((a, b) => a.departamento.localeCompare(b.departamento));
  }, []);

  const agrupados = funcionarios.reduce((acc, funcionario) => {
    if (!acc[funcionario.departamento]) acc[funcionario.departamento] = [];
    acc[funcionario.departamento].push(funcionario);
    return acc;
  }, {});

  return (
    <div className="page">
      <h1 className="title">Exercício 14</h1>
      <p className="subtitle">Agrupamento de Funcionários por Departamento</p>

      {Object.entries(agrupados).map(([departamento, lista]) => (
        <div key={departamento}>
          <h2 className="department-title">{departamento}</h2>
          <div className="grid">
            {lista.map((funcionario) => (
              <div key={funcionario.id} className="employee-card">
                <h3>{funcionario.nome}</h3>
                <p><strong>ID:</strong> {funcionario.id}</p>
                <p><strong>Cargo:</strong> {funcionario.cargo}</p>
                <p><strong>Departamento:</strong> {funcionario.departamento}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}