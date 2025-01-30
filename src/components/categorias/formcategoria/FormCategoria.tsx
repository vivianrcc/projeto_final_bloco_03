import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoriaServices from "../../../services/CategoriaServices";
import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";

// Definindo o tipo das props
interface FormCategoriaProps {
    atualizarListaCategorias: (novaCategoria: any) => void;
}

const FormCategoria = ({ atualizarListaCategorias }: FormCategoriaProps) => {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    // Função para atualizar o estado da categoria
    const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
        setCategoria({ ...categoria, [e.target.name]: e.target.value });
    }

    // Função para retornar à lista de categorias
    const retornar = () => {
        navigate('/categorias');
    }

    const gerarNovaCategoria = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let resposta;
            if (id !== undefined) {
                // Atualizar categoria existente
                resposta = await categoriaServices.updateCategoria(categoria);
            } else {
                // Criar nova categoria
                resposta = await categoriaServices.createCategoria(categoria);
            }

            // Chama a função do componente pai para atualizar a lista de categorias
            atualizarListaCategorias(resposta.data);
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
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Categoria</label>
                    <input
                        type="text"
                        placeholder="Beleza, cosméticos ..."
                        name="nome"
                        className="border-4 border-slate-500 rounded-lg p-2"
                        value={categoria.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Exemplo: Beleza, Perfumaria, etc...."
                        name="descricao"
                        className="border-4 border-slate-500 rounded-lg p-2"
                        value={categoria.descricao || ""}
                        onChange={atualizarEstado}
                    />
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

export default FormCategoria;
