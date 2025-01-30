import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>

            <div className='w-full flex rigth py-6
            			   bg-indigo-900 text-white'>

                <img
                    src="https://abrir.link/iQjFM"
                    alt="Imagen de un pinguino medico con una vacuna"
                    className="w-1/1 rounded-lg shadow-lg"
                />

                <div className="container flex center text-lg">


                    <div>
                        <ul className="flex gap-5">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/listacategorias">Lista de Categorias</Link></li>
                            <li><Link to="/cadastrarcategoria">Cadastrar Categorias</Link></li>
                            <li><Link to="/cadastrarproduto">Cadastrar Produto</Link></li>
                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar