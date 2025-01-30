import React from "react";

// Defina o tipo da propriedade `produto`
interface CardProdutoProps {
  produto: {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagemUrl: string;
  };
}

const CardProduto: React.FC<CardProdutoProps> = ({ produto }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={produto.imagemUrl}
        alt={produto.nome}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{produto.nome}</h3>
      <p className="text-gray-700 mt-2">{produto.descricao}</p>
      <p className="text-lg font-bold text-indigo-600 mt-4">R$ {produto.preco}</p>
    </div>
  );
};

export default CardProduto;
