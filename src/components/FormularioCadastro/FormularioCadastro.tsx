"use client"
import { cadastrar } from "@/app/actions/auth"
import { useActionState } from "react"

export function FormularioCadastro () {

    const [state, action] = useActionState(cadastrar, undefined)

    return (
    <>
        <form action={action} className="form-cadastro">
            <div>
                <label>Nome</label>
                <input
                    name="nome" 
                    type="text"
                    id="idNome"
                    placeholder="Digite seu nome"
                    required/>
                <p className="absolute text-red-repair ml-4">{state?.errors?.nome && state.errors.nome}</p>
            </div>
            <div>
                <label>Sobrenome</label>
                <input
                    name="sobrenome" 
                    type="text"
                    id="idSobrenome"
                    placeholder="Digite seu sobrenome"/>
            </div>
            <div>
                <label>CPF</label>
                <input
                    name="cpf" 
                    type="number"
                    id="idCpf"
                    placeholder="xxx.xxx.xxx-xx"
                    required/>
                <p className="absolute text-red-repair ml-4">{state?.errors?.numeroDocumento && state.errors.numeroDocumento}</p>
            </div>
            <div>
                <label>Telefone</label>
                <input
                    name="telefone" 
                    type="number"
                    id="idTelefone"
                    placeholder="(xx) xxxxx-xxxx"
                    required/>
                    <p className="absolute text-red-repair ml-4">{state?.errors?.telefone && state.errors.telefone}</p>
            
            </div>
            <div>
                <label>E-mail</label>
                <input
                    name="email" 
                    type="email"
                    id="idEmail"
                    placeholder="Digite seu email"
                    required/>
                    <p className="absolute text-red-repair ml-4">{state?.errors?.email && state.errors.email}</p>
            </div>
            <div>
                <label>Senha</label>
                <input
                    name="senha" 
                    type="password"
                    id="idSenha" 
                    placeholder="Digite sua senha"
                    required/>
                    <p className="absolute text-red-repair ml-4">{state?.errors?.senha && state.errors.senha}</p>
            </div>
            <div className="mt-4 md:col-span-2">
                <button className="botao">Cadastrar</button>
            </div>
        </form>
    </>
    )
}
