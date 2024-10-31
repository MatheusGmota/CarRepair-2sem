import { redirect } from "next/navigation";
import { verificarSessao } from "../lib/dal";
import { FormState } from "../lib/definitions";

export async function cadVeiculo(state: FormState, formData: FormData) {

    const usuario = await verificarSessao();
    if (!usuario) {
        redirect('/entrar')
    }

    const ano = formData.get("ano")
    if(!ano) return {message: "Deve ser um número"}

    const quilometragem = formData.get("quilometragem")
    if(!quilometragem) return {message: "Deve ser um número"}

    const data = {
        marca: formData.get("marca"),
        modelo: formData.get("modelo"),
        ano: parseInt(ano.toString()),
        quilometragem: parseInt(quilometragem.toString()),
        diagnostico: {
            descricaoProblema: formData.get("descricaoProblema")
        }
    }

    // console.log(`http://localhost:8080/carrepair/veiculos/${usuario.userId}`)
    // console.log(JSON.stringify(data))
    try {
        const response = await fetch(`http://localhost:8080/carrepair/veiculos/${usuario.userId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );
        if (response.status == 400) {
            return { message: "Erro ao cadastrar veículo" }
        }

        const orcamento = await response.json()
        sessionStorage.setItem("orcamento", JSON.stringify(orcamento));
    } catch (e) {
        console.error(e);
    }

}