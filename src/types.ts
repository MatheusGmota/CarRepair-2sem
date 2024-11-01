export type TipoOrcamento = {
    veiculo: {
        marca: string,
        modelo: string,
        ano: number,
        quilometragem: number,
        diagnostico: {
            descricaoProblema: string
        }
    },
    possivelReparo: string,
    valorTotal: number
}