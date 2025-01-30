import { useNavigate, useParams } from "react-router-dom";
import categoriaServices from "../../../services/ProdutoServices";  
import { ChangeEvent, useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import { RotatingLines } from "react-loader-spinner";

const FormProduto = () => {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [categorias, setCategorias] = useState<any[]>([]);  // Para armazenar as categorias
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    // Função para buscar categorias
    const buscarCategorias = async () => {
        try {
            const response = await categoriaServices.getCategorias();
            setCategorias(response.data);  // Atualiza o estado com as categorias
        } catch (error: any) {
            console.log(error);
        }
    }

    const buscarPorId = async (id: string) => {
        try {
            const response = await categoriaServices.getProdutoById(Number(id));
            setProduto(response.data);
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscarCategorias();  // Carregar categorias ao montar o componente
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
        setProduto({ ...produto, [e.target.name]: e.target.value });
    }

    const atualizarCategoria = (e: ChangeEvent<HTMLSelectElement>) => {
        setProduto({ ...produto, categoriaId: Number(e.target.value) });  // Atualiza categoriaId com o valor selecionado
    }

    const retornar = () => {
        navigate('/produto');
    }

    const gerarNovoProduto = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await categoriaServices.updateProduto(produto);
            } else {
                await categoriaServices.createProduto(produto);
            }
        } catch (error: any) {
            console.log(error);
        } finally {
            setIsLoading(false);
            retornar();
        }
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome Produto</label>
                    <input
                        type="text"
                        placeholder="Exemplo: Beleza, cosméticos..."
                        name="nome"
                        className="border-4 border-slate-500 rounded-lg p-2"
                        value={produto.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Produto</label>
                    <input
                        type="text"
                        placeholder="Exemplo: Beleza, Perfumaria, etc..."
                        name="descricao"
                        className="border-4 border-slate-500 rounded-lg p-2"
                        value={produto.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>
                {/* Campo para selecionar a categoria */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        name="categoriaId"
                        className="border-4 border-slate-500 rounded-lg p-2"
                        value={produto.categoriaId || ""}
                        onChange={atualizarCategoria}
                    >
                        <option value="">Selecione a Categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    className="rounded text-slate-100 bg-sky-400 hover:bg-sky-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormProduto;
