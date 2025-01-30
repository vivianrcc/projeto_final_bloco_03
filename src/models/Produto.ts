import Categoria from "./Categoria";

interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;  

    categoria: Categoria;
    categoriaId: number; 
}

export default Produto;
