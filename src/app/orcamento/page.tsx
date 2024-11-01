"use client"

import FormOrcamento from "@/components/FormOrcamento/FormOrcamento"
import OrcamentoDashboard from "@/components/OrcamentoDashboard/OrcamentoDashboard"
import { useEffect, useState } from "react"

export default function Orcamento() {

    const [passo, setPasso] = useState<number>(1)

    useEffect(() =>{
        setPasso(2)
    }, [])
    
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