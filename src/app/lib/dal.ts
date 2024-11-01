export const verificarSessao = async () => {
    const sessao = sessionStorage.getItem('user')
    if (!sessao) return null

    const user = JSON.parse(sessao)

    return { autenticado: true, userId: user.id}
}

export const obterOrcamento = async () => {
    const sessao = sessionStorage.getItem('orcamento')
    if (!sessao) return null

    const orcamento = JSON.parse(sessao)

    return orcamento
}