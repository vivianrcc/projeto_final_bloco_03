import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg">
                    <h1><Link to="/home">Farmacia </Link> <i className='bx bxs-band-aid'></i></h1>

                    <div className='flex gap-4'>
                    <span><Link to='/produto' className='hover:underline'>Produto</Link></span>
                    <Link to='/cadastrarproduto' className='hover:underline'>Cadastrar produto</Link>
                    <span><Link to='/categoria' className='hover:underline'>Categoria</Link></span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar