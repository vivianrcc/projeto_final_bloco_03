function Home() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-pink-400 to-pink-100 text-white w-full overflow-hidden mb-[-1px]">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem-vindos
                        </h2>
                        <p className='text-xl'>
                            Farm Company
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='
                                            border-spacing border-spacing-2 border-8 py-2 px-2'
                            >
                                <h2>Produtos</h2>
                                <p>Ofertas do dia!!!</p>
                            </div>
                        
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://media.tenor.com/khD0DPobzSYAAAAj/leaf-prodeco.gif"
                            alt="Imagem de um gato "
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home