import { useMemo } from "react";
import { fakerPT_BR as faker } from "@faker-js/faker";

export default function Ex15() {
  const produtos = useMemo(() => {
    return Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      nome: faker.commerce.productName(),
      descricao: faker.commerce.productDescription(),
      adjetivo: faker.commerce.productAdjective(),
      preco: faker.commerce.price({ min: 10, max: 500 }),
      departamento: faker.commerce.department()
    }));
  }, []);

  return (
    <div className="page">
      <h1 className="title">Exercício 15</h1>
      <p className="subtitle">Catálogo de Produtos E-commerce</p>
      <div className="product-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="product-card">
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p><strong>Adjetivo:</strong> <span className="highlight">{produto.adjetivo}</span></p>
            <p className="price">R$ {produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}