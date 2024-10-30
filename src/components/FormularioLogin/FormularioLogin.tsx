export const FormularioLogin: React.FC = () => {
  return (
    <>
        <form className="form-login">
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
            <div className="mt-6">
                <button className="botao">Entrar</button>
            </div>
        </form>
    </>
  )
}