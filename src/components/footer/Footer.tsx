const Footer = () => {
const data = new Date().getFullYear();

    return (
        <footer className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <div className="text-xl font-bold">
                    <p>
                       Desenvolvido por: Vivian  | copyrigth {data}
                    </p>
                    <div className='flex gap-2 justify-center'>
                        <a href="https://github.com/vivianrcc"><i className='bx bxl-github'></i></a>
                        <a href="https://linkedin.com/in/vivianrcc"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;