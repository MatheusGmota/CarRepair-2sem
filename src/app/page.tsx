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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg-card">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <span className="span">Orçamento</span>
                </div>
                <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg-card">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>

                    <span className="span">Mecânicas</span>
                </div>
                <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg-card">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <span className="span">Agendamento</span>
                </div>
            </article>
        </section>
        <section className="secao-form">
            <h2 className="titulo-home">Contate-nos</h2>
            <section className="lg:flex lg:justify-center">
                <form className="form">
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
        </section>
      </main>
    </>
  )
}
