import { Link } from "react-router-dom";
import ListarCategorias from "../../components/categorias/listacategoria/ListarCategorias";

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">
                            Farm Company
                        </h2>
                        <p className="text-xl">
                            Saúde para TODOS!
                        </p>
                        <div className="flex justify-around gap-4">
                            <Link 
                                to="/categorias" 
                                className="bg-white text-indigo-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all"
                            >
                                Categorias
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <img
                            src="https://abrir.link/TeMEd" 
                            alt="Imagem Página Home"
                            className="w-2/3 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <ListarCategorias />
        </>
    );
}

export default Home;
