import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    const data = new Date().getFullYear()

    return (
        <div className="flex justify-center bg-sky-600 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">
                    Desenvolvido por Vivian Cuentas | Copyright: {data}
                </p>
                <div className="flex gap-2 justify-center">
                    <a href="https://www.linkedin.com/in/vivianrcc" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={48} weight="bold" />
                    </a>
                    <a href="https://github.com/vivianrcc" target="_blank" rel="noopener noreferrer">
                        <GithubLogo size={48} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
