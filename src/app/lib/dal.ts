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

export const obterUsuario = async () => {
    const sessao = await verificarSessao()
    if (!sessao) return null

    try {
        const data = await fetch(`http://localhost:8080/carrepair/clientes/${sessao.userId}`)
        if (!data.ok) return null

        const user = await data.json()

        return user;

    } catch (error) {
        console.log('Falha ao encontrar usuario.', error)
        return null
    }
    
} 
