export type TipoCliente = {
    id?: number;
    nome: string;
    tipoDocumento: string;
    numeroDocumento: number;
    email: string;
    telefone: number;
    login?: {
        usuario: string,
        senha: string,
    }
}