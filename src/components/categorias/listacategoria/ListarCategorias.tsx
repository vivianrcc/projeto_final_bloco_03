import { useEffect, useState } from "react";
import categoriaServices from "../../../services/CategoriaServices";
import CardCategorias from "../cardcategoria/CardCategoria";

const ListarCategorias = () => {
    const [categorias, setCategorias] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const listarCategorias = async () => {
        setIsLoading(true);
        try {
            const response = await categoriaServices.getCategorias();
            console.log("Resposta da API:", response.data); 
    
            if (Array.isArray(response.data)) {
                setCategorias(response.data);
            } else {
                console.error("Erro: a API não retornou um array", response.data);
                setCategorias([]); 
            }
        } catch (error) {
            console.error("Erro ao listar categorias:", error);
            setCategorias([]); 
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        listarCategorias(); 
    }, []);

    return (
        <div className="container mx-auto py-8">
            {isLoading ? (
                <div className="flex justify-center">
                    <span>Carregando...</span>
                </div>
            ) : (
                <>
                    <h2 className="text-4xl text-center mb-6">Confira nossas ofertas!</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {categorias.length > 0 ? (
                            categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))
                        ) : (
                            <p className="text-center">Nenhuma categoria encontrada.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ListarCategorias;
