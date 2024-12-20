import { TipoCliente } from "@/types";
import { CadastroFormSchema, FormState } from "../lib/definitions";
import { redirect } from "next/navigation";

export async function cadastrar(state: FormState, formData:FormData) {


    const camposValidados = CadastroFormSchema.safeParse({
        nome: `${formData.get("nome")} ${formData.get("sobrenome")}`,
        numeroDocumento: formData.get("cpf"),
        email: formData.get("email"),
        telefone: formData.get("telefone"),
        senha: formData.get("senha"),
    })

    if (!camposValidados.success) {
        return {
          errors: camposValidados.error.flatten().fieldErrors,
        }
    }

    const {nome, numeroDocumento, email, telefone, senha} =  camposValidados.data

    const data: TipoCliente = {
        nome: nome,
        tipoDocumento: 'cpf',
        numeroDocumento: numeroDocumento,
        email: email,
        telefone: telefone,
        login: {
            usuario: email,
            senha: senha,
        }
    }
  
    try {
        const response = await fetch("http://localhost:8080/carrepair/clientes",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )
        
        if (response.status == 406) {
            return { message: "Email já cadastrado."}
        }
        
        const user = await response.json()
        if(!user) return { message: 'Erro ao criar usuário.'}
        
        sessionStorage.setItem("user",JSON.stringify(user))
        alert("Cadastrado!")

    } catch (err) {
        console.error(err)
        alert("Erro ao cadastrar no site, tente novamente mais tarde.")
    } finally {
        redirect('/')
    }
}

export async function entrar (state: FormState, formData:FormData) {

    let caminho: string | null = null
    const data =  {usuario: formData.get("email"), senha: formData.get("senha") }

    try {
        const response = await fetch("http://localhost:8080/carrepair/auth",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )
        if (response.status == 401) {
            return { message: "Email ou senha incorretos"}
        }

        const user = await response.json()
        if(!user) return { message: 'Erro ao criar usuário.'}
        
        if (!sessionStorage.getItem('user')) {
            sessionStorage.removeItem('user')
        }

        sessionStorage.setItem("user",JSON.stringify(user))
        alert("Login efetuado com sucesso!")
        caminho = "/orcamento"
    } catch (err) {

        console.error(err)
        alert("Erro ao logar no site, tente novamente mais tarde.")

    } finally {
        if (caminho) {
            redirect(caminho)
        }
    }
} 