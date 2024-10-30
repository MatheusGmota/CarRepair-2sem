export const FormularioCadastro: React.FC = () => {
    return (
    <>
        <form className="form-cadastro">
            <div>
                <label>Nome</label>
                <input
                    name="nome" 
                    type="text" 
                    placeholder="Digite seu nome"
                    required/>
            </div>
            <div>
                <label>Sobrenome</label>
                <input
                    name="sobrenome" 
                    type="text" 
                    placeholder="Digite seu sobrenome"/>
                {/* <p className="absolute text-red-repair ml-4">Erro</p> */}
            </div>
            <div>
                <label>CPF</label>
                <input
                    name="cpf" 
                    type="number" 
                    placeholder="xxx.xxx.xxx-xx"
                    required/>
            </div>
            <div>
                <label>Telefone</label>
                <input
                    name="telefone" 
                    type="number" 
                    placeholder="(xx) xxxxx-xxxx"
                    required/>
            </div>
            <div>
                <label>E-mail</label>
                <input
                    name="email" 
                    type="text" 
                    placeholder="Digite seu email"
                    required/>
            </div>
            <div>
                <label>Senha</label>
                <input
                    name="senha" 
                    type="password" 
                    placeholder="Digite sua senha"
                    required/>
            </div>
            <div className="mt-4 md:col-span-2">
                <button className="botao">Cadastrar</button>
            </div>
        </form>
    </>
    )
}
