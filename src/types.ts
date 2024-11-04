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

export type TipoCliente = {
    id?: number;
    nome: string;
    tipoDocumento: string;
    numeroDocumento: number;
    email: string;
    telefone: number;
    login?: {
        usuario: string,
        senha: string
    }