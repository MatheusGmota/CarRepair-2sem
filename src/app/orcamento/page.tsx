"use client"

import FormOrcamento from "@/components/FormOrcamento/FormOrcamento"
import OrcamentoDashboard from "@/components/OrcamentoDashboard/OrcamentoDashboard"
import { useEffect, useState } from "react"
import { obterOrcamento } from "../lib/dal"

const orc = await obterOrcamento()

export default function Orcamento() {

    const [passo, setPasso] = useState<number>(1)

    useEffect(() =>{
        if(orc){
            setPasso(2)
        }
    }, [orc])
    
    if (passo === 1) {
        return (
            <FormOrcamento />
        )
    } else if (passo === 2) {
        return (
            <OrcamentoDashboard/>
        )
    }
}