"use client"

export default function Veiculo() {

    return (
        <main className="main">
            <h1 className="text-white text-4xl mb-8">Orçamento</h1>
            <form className="formulario">
                <h2 className="text-center text-2xl text-curious-blue-500 mb-5">Preencha as informações</h2>
                <div className="grid md:grid-cols-2">
                    <fieldset className="flex flex-col gap-3">
                        <label>
                            Marca
                        </label>
                        <input type="text" placeholder="Ex: GM Crecholet" className="campos"/>
                    </fieldset>
                    <fieldset className="flex flex-col gap-3">
                        <label className="text-base block my-2 text-curious-blue-500">
                            Modelo
                        </label>
                        <input type="text" placeholder="Ex: Prisma" className="campos"/>
                    </fieldset>
                    <fieldset className="flex flex-col gap-3">
                        <label>
                            Ano
                        </label>
                        <input type="text" placeholder="XXXX" className="campos"/>
                    </fieldset>
                    <fieldset className="flex flex-col gap-3">
                        <label>
                        Quilometragem
                        </label>
                        <input type="text" placeholder="Ex: 10000" className="campos"/>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="flex flex-col gap-3">
                        <label>
                            Descrição
                        </label>
                        <textarea placeholder="Descreva seu problema" className="descricao"/>
                    </fieldset>
                </div>
                <button className="button-orcamento">Gerar Orcamento</button>
            </form>
        </main>
    )
}