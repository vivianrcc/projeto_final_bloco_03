import { useEffect, useState } from "react";
import produtoServices from "../../../services/ProdutoServices";
import CardProduto from "../cardprodutos/CardProdutos"; 
const ListarProdutos = () => {
    const [produtos, setProdutos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const listarProdutos = async () => {
        setIsLoading(true);
        try {
            const response = await produtoServices.getProdutos();
            if (Array.isArray(response.data)) {
                setProdutos(response.data);
            } else {
                console.error("Erro: a API não retornou um array", response.data);
                setProdutos([]);
            }
        } catch (error) {
            console.error("Erro ao listar produtos:", error);
            setProdutos([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        listarProdutos(); 
    }, []);

    return (
        <div className="container mx-auto py-8">
            {isLoading ? (
                <div className="flex justify-center">
                    <span>Carregando...</span>
                </div>
            ) : (
                <>
                    <h2 className="text-4xl text-center mb-6">Ofertas do Dia!</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {produtos.length > 0 ? (
                            produtos.map((produto) => (
                                <CardProduto key={produto.id} produto={produto} />
                            ))
                        ) : (
                            <p className="text-center">Nenhum produto encontrado.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ListarProdutos;
