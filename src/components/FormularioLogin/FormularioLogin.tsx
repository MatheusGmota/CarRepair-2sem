'use client'
import { entrar } from "@/app/actions/auth"
import { useActionState } from "react"

export const FormularioLogin = () => {

    const [state, action] = useActionState(entrar, undefined)

    return (
        <>
            <form action={action} className="form-login">
                <div>
                    <p className="text-red-repair text-center">{state?.message && state.message}</p>
                </div>
                <div>
                    <label>E-mail</label>
                    <input
                        name="email" 
                        type="email" 
                        placeholder="Digite seu email"
                        required/>
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        name="senha" 
                        type="password" 
                        placeholder="Digite sua senha"
                        required/>
                </div>
                <div className="mt-6">
                    <button className="botao">Entrar</button>
                </div>
            </form>
        </>
    )
}