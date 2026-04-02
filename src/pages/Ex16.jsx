import { useMemo } from "react";
import { fakerPT_BR as faker } from "@faker-js/faker";

export default function Ex16() {
  const produtos = useMemo(() => {
    const lista = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      nome: faker.commerce.productName(),
      descricao: faker.commerce.productDescription(),
      adjetivo: faker.commerce.productAdjective(),
      preco: faker.commerce.price({ min: 10, max: 500 }),
      departamento: faker.commerce.department()
    }));

    return lista.sort((a, b) => a.departamento.localeCompare(b.departamento));
  }, []);

  const agrupados = produtos.reduce((acc, produto) => {
    if (!acc[produto.departamento]) acc[produto.departamento] = [];
    acc[produto.departamento].push(produto);
    return acc;
  }, {});

  return (
    <div className="page">
      <h1 className="title">Exercício 16</h1>
      <p className="subtitle">Agrupamento de Produtos por Categoria</p>

      {Object.entries(agrupados).map(([departamento, lista]) => (
        <div key={departamento}>
          <h2 className="department-title">{departamento}</h2>
          <div className="product-grid">
            {lista.map((produto) => (
              <div key={produto.id} className="product-card">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p><strong>Adjetivo:</strong> <span className="highlight">{produto.adjetivo}</span></p>
                <p className="price">R$ {produto.preco}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}