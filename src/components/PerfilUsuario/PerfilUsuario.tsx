'use client'
import { obterUsuario } from "@/app/lib/dal"
import { TipoCliente } from "@/types"
import { useEffect, useState } from "react"

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

    return (
        <div>
            <p>{usuario.nome}</p>
        </div>
    )
}
