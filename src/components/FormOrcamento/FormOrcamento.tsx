"use client"

import { cadVeiculo } from "@/app/actions/orcamento"
import { useActionState } from "react"

export default function FormOrcamento() {

    const [state, action] = useActionState(cadVeiculo, undefined)

    return (
        <>
            <form className="formulario" action={action}>
                <h2 className="text-center text-2xl text-curious-blue-500 mb-5">Preencha as informações</h2>
                <div className="grid md:grid-cols-2">
                    <fieldset className="flex flex-col gap-2">
                        <label>
                            Marca
                        </label>
                        <input name="marca" type="text" placeholder="Ex: GM Crecholet" className="campos"/>
                    </fieldset>
                    <fieldset className="flex flex-col gap-2">
                        <label className="text-base block my-2 text-curious-blue-500">
                            Modelo
                        </label>
                        <input name="modelo" type="text" placeholder="Ex: Prisma" className="campos"/>
                    </fieldset>
                    <fieldset className="flex flex-col gap-2">
                        <label>
                            Ano
                        </label>
                        <input name="ano" type="text" placeholder="XXXX" className="campos"/>
                    </fieldset>
                    <fieldset className="flex flex-col gap-2">
                        <label>
                        Quilometragem
                        </label>
                        <input name="quilometragem" type="text" placeholder="Ex: 10000" className="campos"/>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="flex flex-col gap-2">
                        <label>
                            Descrição
                        </label>
                        <textarea name="descricaoProblema" placeholder="Descreva seu problema" className="descricao"/>
                    </fieldset>
                </div>
                <button className="button-orcamento">Gerar Orcamento</button>
            </form>
        </>
    )
}