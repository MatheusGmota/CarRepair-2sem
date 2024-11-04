"use client"
import { obterOrcamento } from "@/app/lib/dal"
import { TipoOrcamento } from "@/types"
import Link from "next/link"
import { useEffect, useState } from "react"

const obterOrc = await obterOrcamento()

export default function OrcamentoDashboard() {

    const [orcamento, setOrcamento] = useState<TipoOrcamento>({
        veiculo: {
            marca: "",
            modelo: "",
            ano: 0,
            quilometragem: 0,
            diagnostico: {
                descricaoProblema: ""
            }
        },
        possivelReparo: "",
        valorTotal: 0
    })

    useEffect(() => {
        setOrcamento(obterOrc)
    }, [])

    return (
        <div className="w-full md:w-3/5 bg-zinc-900 h-auto flex flex-col p-5 content-center rounded-lg">
            <div className="px-4 sm:px-0">
                <h3 className="text-2xl/7 font-semibold sm:text-center text-curious-blue-400">Seu orçamento final</h3>
            </div>
            <div className="mt-6 border-t border-gray-900">
                <dl className="divide-y divide-gray-200">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-lg/5 font-medium text-white">Marca</dt>
                        <dd className="mt-1 text-base text-white sm:text-right sm:col-span-2 sm:mt-0">{orcamento.veiculo.marca}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-lg/5 font-medium text-white">Modelo</dt>
                        <dd className="mt-1 text-base text-white sm:text-right sm:col-span-2 sm:mt-0">{orcamento.veiculo.modelo}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-lg/5 font-medium text-white">Ano</dt>
                        <dd className="mt-1 text-base text-white sm:text-right sm:col-span-2 sm:mt-0">{orcamento.veiculo.ano}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-lg/5 font-medium text-white">Quilometragem</dt>
                        <dd className="mt-1 text-base text-white sm:text-right sm:col-span-2 sm:mt-0">{orcamento.veiculo.quilometragem} Km</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-lg/5 font-medium text-white">Descrição</dt>
                        <dd className="mt-1 text-base text-white sm:text-right sm:col-span-2 sm:mt-0">{orcamento.veiculo.diagnostico.descricaoProblema}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-2xl/6 font-medium text-curious-blue-500">Possível Problema:</dt>
                        <dd className="mt-1 text-xl/6 text-white sm:text-right sm:col-span-2 sm:mt-0">{orcamento.possivelReparo}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-2xl/6 font-medium text-curious-blue-500">Orçamento final:</dt>
                        <dd className="mt-1 text-xl/6 text-white sm:text-right sm:col-span-2 sm:mt-0">R${orcamento.valorTotal}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:px-0">
                        <dd className="mt-1 text-sm/6 text-white sm:col-span-2 sm:mt-0">
                            <Link href="/agendamento" className="button">Agendar</Link>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
