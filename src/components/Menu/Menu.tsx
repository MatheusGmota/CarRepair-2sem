import Link from "next/link";

export const Menu = ({className}: {className: string | ""}) => {

    return (
        <nav className={`${className} md:flex`}>
            <ul className="menu">
                <li><Link href="/orcamento">Orçamento</Link></li>
                <li><Link href="/time">Página dos Participantes</Link></li>
                <li><Link href="/">Sobre nós</Link></li>
            </ul>
        </nav>
    )
}
