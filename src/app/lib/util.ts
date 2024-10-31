export const maskCPF = (cpf: string) => {
    if (!cpf || cpf.length !== 11) return cpf;
    return `${cpf.slice(0, 3)}.***.***-${cpf.slice(-2)}`;
}

export const maskPhone = (phone: string) => {
    return `(${phone.slice(0, 2)}) ${phone.slice(-4)}-${phone.slice(-4)}`;
}