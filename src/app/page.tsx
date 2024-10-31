import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <main className="main">
        <section className="secao-home">
            <aside>
                <h2 className="titulo-home">
                    Gerar Orçamento
                </h2>
            </aside>
            <article className="texto-home">
                <p className="texto">
                    Obtenha uma estimativa personalizada e precisa para a manutenção do seu veículo, utilizando nossas ferramentas automatizadas para facilitar o planejamento e a execução dos serviços necessários.
                </p>
            </article>
            <aside className="text-right">
                <Link href="" className="botao-home">
                    Gerar Orçamento
                </Link>
            </aside>
        </section>
        <section className="secao-home">
            <aside>
                <h2 className="titulo-home">
                    Quem nós somos?
                </h2>
            </aside>
            <article className="texto-home">
                <p className="texto">
                    Somos uma equipe de estudantes apaixonados por tecnologia e inovação. Unimos nossas habilidades e conhecimentos para enfrentar desafios reais do mercado, aplicando conceitos aprendidos em sala de aula para criar soluções práticas e eficazes. Nosso objetivo é transformar ideias em projetos que façam a diferença, sempre com foco em qualidade, inovação e aprendizado contínuo.
                </p>
            </article>
        </section>
        <section className="secao-home">
            <aside>
                <h2 className="titulo-home">
                    Nosso objetivo
                </h2>
            </aside>
            <article className="texto-home">
                <p className="texto">
                    Fomos desafiados pela Porto Seguro a desenvolver um programa que melhore a jornada e a experiência do cliente durante a manutenção automotiva. Nosso foco está em criar soluções tecnológicas para oferecer diagnósticos automáticos rápidos, orçamentos precisos usando inteligência artificial e automatizar todo o processo de manutenção, desde o agendamento até a finalização do serviço.
                </p>
            </article>
        </section>
        <section className="text-white w-full flex flex-col gap-y-3">
            <h2 className="titulo-home">Contate-nos</h2>
            <form className="space-y-4">
                <aside className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2">Nome</label>
                        <input type="text" id="name" placeholder="Digite seu nome" className="w-full p-3 bg-transparent text-gray-300 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label className="block mb-2">Email</label>
                        <input type="email" id="email" placeholder="Digite seu email" className="w-full p-3 bg-transparent text-gray-300 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                </aside>
                <div>
                    <label className="block mb-2">Mensagem</label>
                    <textarea id="message" placeholder="Escreva sua mensagem" className="w-full h-32 p-3 bg-transparent text-gray-300 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div className="text-right">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">Enviar</button>
                </div>
            </form>
        </section>
      </main>
    </>
  )
}
