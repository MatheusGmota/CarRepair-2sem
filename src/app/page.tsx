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
        <section className="section-cards">
            <h2 className="titulo-home">Ferramentas</h2>
            <article className="article-cards">
                <div className="card">
                    <svg className="svg-card" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5 3.6 9.9 9 11 5.4-1.1 9-6 9-11V5l-9-4zM12 12.5c-1.5 0-2.5-1-2.5-2.5S10.5 7.5 12 7.5s2.5 1 2.5 2.5S13.5 12.5 12 12.5z"></path>
                    </svg>
                    <span className="span">Orçamento</span>
                </div>
                <div className="card">
                    <svg className="svg-card" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.4 7l-2.4 2.4-3.1-.7L10.8 13 8 10.2 13.3 5 12 3.6 7.7 7.9 3.6 6.6 2 8.2l4.3 4.3c-.2 1.2.1 2.4.8 3.3L5.5 19 9 21.5l3.2-1.3c.9.7 2.1 1 3.3.8l4.3 4.3 1.6-1.6-1.3-4.1L19.4 7z"></path>
                    </svg>
                    <span className="span">Mecânicas</span>
                </div>
                <div className="card">
                    <svg className="svg-card" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm5 4h8v2H8v-2zm0 4h5v2H8v-2zm8 0h2v2h-2v-2zm-4-4h5v2h-5v-2zm4-4h2v2h-2V7zm-4 0h5v2h-5V7zm0 4h8v2h-8v-2z"></path>
                    </svg>
                    <span className="span">Agendamento</span>
                </div>
            </article>
        </section>
        <section className="secao-form">
            <h2 className="titulo-home">Contate-nos</h2>
            <form className="space-y-4">
                <aside className="aside-inputs">
                    <div>
                        <label className="label-inputs">Nome</label>
                        <input type="text" id="name" placeholder="Digite seu nome" className="input-contact"/>
                    </div>
                    <div>
                        <label className="label-inputs">Email</label>
                        <input type="email" id="email" placeholder="Digite seu email" className="input-contact"/>
                    </div>
                </aside>
                <div>
                    <label className="label-inputs">Mensagem</label>
                    <textarea id="message" placeholder="Escreva sua mensagem" className="input-contact"></textarea>
                </div>
                <div className="text-right">
                    <button type="submit" className="botao-form">Enviar</button>
                </div>
            </form>
        </section>
        
      </main>
    </>
  )
}
