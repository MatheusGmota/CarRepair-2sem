'use client'
import Image from "next/image";
import { Menu } from "../Menu/Menu";
import imgLogo from "@/img/img-logo.png"
import { PerfilUsuario } from "../PerfilUsuario/PerfilUsuario";
import { useState } from "react";
import { MenuHamburguer } from "../MenuHamburguer/MenuHamburguer";

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
            <PerfilUsuario className={`${display}`} />
        </header>
    )
}
