'use client'
import { obterUsuario } from "@/app/lib/dal"
import { TipoCliente } from "@/types"
import { useEffect, useState } from "react"
import BotaoLogout from "../BotaoLogout/BotaoLogout"
import { maskCPF, maskPhone } from "@/app/lib/util"
import NotFound from "@/app/not-found"

export const PerfilUsuario = () => {
    
    const [usuario, setUsuario] = useState<TipoCliente>({
        nome: "",
        tipoDocumento: "cpf",
        numeroDocumento: 0,
        email: "",
        telefone: 0,
        login: {
            usuario: "",
            senha: ""
        }
    })

    useEffect(() => {
        const verificarSessao = async () => {
            const user = await obterUsuario()
            setUsuario(user)
        }
        
        verificarSessao()
    },[])
    
    if (!usuario) return (<NotFound/>)

    return (
        <div className="w-full">
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-curious-blue-400">Perfil</h3>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Informações do usuário</p>
            </div>
            <div className="mt-6 border-t border-gray-900">
                <dl className="divide-y divide-gray-900">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-curious-blue-400">Nome Completo</dt>
                        <dd className="mt-1 text-sm/6 text-white sm:col-span-2 sm:mt-0">{usuario.nome}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-curious-blue-400">{usuario.tipoDocumento.toUpperCase()}</dt>
                        <dd className="mt-1 text-sm/6 text-white sm:col-span-2 sm:mt-0">{maskCPF(usuario.numeroDocumento.toString())}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-curious-blue-400">Email</dt>
                        <dd className="mt-1 text-sm/6 text-white sm:col-span-2 sm:mt-0">{usuario.email}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-curious-blue-400">Telefone</dt>
                        <dd className="mt-1 text-sm/6 text-white sm:col-span-2 sm:mt-0">{maskPhone(usuario.telefone.toString())}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:px-0">
                        <dd className="mt-1 text-sm/6 text-white sm:col-span-2 sm:mt-0">
                            <BotaoLogout/>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
