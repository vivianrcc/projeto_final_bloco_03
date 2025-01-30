import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
    categoria: Categoria;
}

const CardCategorias = ({ categoria }: CardCategoriasProps) => {
    return (
        <section className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md">
            <header className="py-2 px-6 bg-blue-800 text-white font-bold text-2xl">
                {categoria.nome}
            </header>
            <p className="p-8 text-3xl bg-blue-100 h-full text-gray-700">{categoria.descricao}</p>

            <div className="flex space-x-2">
                {/* Botão Editar */}
                <Link
                    to={`/editarcategoria/${categoria.id}`}
                    className="w-full text-white bg-blue-400 hover:bg-blue-600 
                    flex items-center justify-center py-2 rounded-lg transition-colors duration-300"
                >
                    <button>
                        <i className="bx bxs-edit"></i> Editar
                    </button>
                </Link>

                {/* Botão Deletar */}
                <Link
                    to={`/deletarcategoria/${categoria.id}`}
                    className="w-full text-white bg-red-400 hover:bg-red-700 
                    flex items-center justify-center py-2 rounded-lg transition-colors duration-300"
                >
                    <button>
                        <i className="bx bx-trash"></i> Deletar
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default CardCategorias;
