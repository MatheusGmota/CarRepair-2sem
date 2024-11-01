"use client"

import { obterOrcamento } from "@/app/lib/dal";
import { useEffect, useState } from "react";

const obterOrc = await obterOrcamento();

export default function OrcamentoFinal({ params }: { params: string }) {

    const [orcamento, setOrcamento] = useState<TipoOrcamento>({
        veiculo:{
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
        setOrcamento(obterOrc);
    }, []);

    return (
        <main className="main">
            <h1 className="text-white text-4xl mb-8 md:mb-12">Orcamento</h1>
            <div className="orcamento">
                <h2 className="text-center text-curious-blue-500 text-2xl md:text-3xl mb-4">Seu orçamento final</h2>
                <div className="flex flex-col md:hidden">
                    <div className="linha">
                        <p>Marca</p>
                        <p>{orcamento.veiculo.marca}</p>
                    </div>
                    <div className="linha">
                        <p>Modelo</p>
                        <p>{orcamento.veiculo.modelo}</p>
                    </div>
                    <div className="linha">
                        <p>Ano</p>
                        <p>{orcamento.veiculo.ano}</p>
                    </div>
                    <div className="linha">
                        <p>Quilometragem</p>
                        <p>{orcamento.veiculo.quilometragem}</p>
                    </div>
                    <div className="linha">
                        <p>Descrição</p>
                        <p>{orcamento.veiculo.diagnostico.descricaoProblema}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p>Orçamento</p>
                        <p>R${orcamento.valorTotal}</p>
                    </div>
                </div>
                <table className="tabela">
                    <thead className="h-14 md:h-20">
                        <tr>
                            <th className="text-xl pr-12">Marca</th>
                            <th className="text-xl pr-12">Modelo</th>
                            <th className="text-xl pr-12">Ano</th>
                            <th className="text-xl pr-12">Quilometragem</th>
                            <th className="text-xl pr-12">Descrição</th>
                        </tr>
                    </thead>
                    <tbody className="h-14 md:h-20">
                        <tr>
                            <td className="text-lg">{orcamento.veiculo.marca}</td>
                            <td className="text-lg">{orcamento.veiculo.modelo}</td>
                            <td className="text-lg">{orcamento.veiculo.ano}</td>
                            <td className="text-lg">{orcamento.veiculo.quilometragem}</td>
                            <td className="text-lg">{orcamento.veiculo.diagnostico.descricaoProblema}</td>
                        </tr>
                    </tbody>
                    <tfoot className="h-14 md:h-20">
                        <tr>
                            <td colSpan={4} className="text-xl">Orçamento Final :</td>
                            <td colSpan={1} className="text-xl text-end">R${orcamento.valorTotal}</td>
                        </tr>
                    </tfoot>
                </table>
                <button className="button">Confirmar</button>
            </div>
        </main>
    )
}