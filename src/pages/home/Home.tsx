
import ListarProdutos from "../../components/produtos/listarprodutos/ListarProdutos";

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">
                            FARM COMPANY
                        </h2>
                        <p className="text-xl">
                            Saúde para TODOS!
                        </p>
                        <div className="flex justify-around gap-4">

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

            <ListarProdutos />
        </>
    );
}

export default Home;
