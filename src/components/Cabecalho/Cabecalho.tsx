'use client'
import Image from "next/image";
import { Menu } from "../Menu/Menu";
import imgLogo from "@/img/img-logo.png"
import { useState } from "react";
import { MenuHamburguer } from "../MenuHamburguer/MenuHamburguer";
import { verificarSessao } from "@/app/lib/dal";
import Link from "next/link";

const sessao = await verificarSessao()

export default function Cabecalho() {

    const [isOpen, setisOpen] = useState<boolean>(false)

    const display = !isOpen ? "hidden" : ""

    const onToggle = () => {
        setisOpen(!isOpen);
    }

    return (
        <header className="w-screen fixed top-0 min-h-[6.3em] bg-black-russian md:flex md:items-center md:justify-between p-[1pc] border-b border-aliceblue">
            <div className="flex justify-between items-center">
                <Image src={imgLogo} width={50} height={50} alt="Logo do Site"/>
                <span onClick={onToggle}>
                    <MenuHamburguer isOpen={isOpen} />
                </span>
            </div>

            <Menu className={`${display}`} />

            <div className={`md:flex ${display}`}>
            {sessao ? (
                <Link className="flex gap-2 text-white hover:underline hover:text-sky-400 my-6 md:my-0" href="/perfil">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span className="md:hidden">
                        Ver Perfil
                    </span>
            </Link>
            )
            : 
            (
                <div className="flex flex-col w-auto md:flex md:flex-row md:items-center md:z-auto gap-5">
                    <Link className="text-curious-blue-500 transition hover:underline md:hover:scale-105" href="/cadastrar">Cadastre-se</Link>
                    <Link className="botao text-center" href="/entrar">Entrar</Link>
                </div>
            )}
            </div>
        </header>
    )
}
