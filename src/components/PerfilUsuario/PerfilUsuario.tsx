import Link from "next/link"

export const PerfilUsuario = ({className}: {className: string | ""}) => {
    const user = null
    if(!user) {
        return (
            <div className={`${className} flex flex-col w-auto md:flex md:flex-row md:items-center md:z-auto gap-5`}>
                <Link className="text-curious-blue-500 transition hover:underline md:hover:scale-105" href="/cadastrar">Cadastre-se</Link>
                <Link className="botao text-center" href="/entrar">Entrar</Link>
            </div>
        )
    } else {
        return (
            <div className={`${className}`}>
            </div>
        )
    }
}
