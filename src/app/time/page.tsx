import Link from "next/link";

export default function Time() {
  return (
    <>
      {/* <section>
            <article classNameName="title">
                Conhecendo o nosso time
            </article>
            <section classNameName="section-cards">
                <section classNameName="card">
                    <div></div>
                    <h3>
                        Felipe Seike Hashiguti
                    </h3>
                    <p>
                        RM - 98985
                    </p>
                    <p>
                        Turma - 1TDSPY
                    </p>
                    <section classNameName="links">
                        <Link href="https://github.com/felipeSeiki">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/felipe-seiki-hashiguti/">
                            Linkedin
                        </Link>
                        <Link href="https://www.instagram.com/felipeseiki18/RR">
                            Insta
                        </Link>
                    </section>
                </section>
                <section classNameName="card">
                    <div></div>
                    <h3>
                        Lucas Corradini Silveira
                    </h3>
                    <p>
                        RM - 555118
                    </p>
                    <p>
                        Turma - 1TDSPY
                    </p>
                    <section classNameName="links">
                        <Link href="https://github.com/lu-corradini">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/lucas-corradini-330856214/">
                            Linkedin
                        </Link>
                        <Link href="https://www.instagram.com/corradini_l12/">
                            Insta
                        </Link>
                    </section>
                </section>
                <section classNameName="card">
                    <div></div>
                    <h3>
                        Matheus Gregorio Mota
                    </h3>
                    <p>
                        RM - 557254
                    </p>
                    <p>
                        Turma - 1TDSPY
                    </p>
                    <section classNameName="links">
                        <Link href="https://github.com/MatheusGmota">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/matheus-g-mota-/">
                            Linkedin
                        </Link>
                        <Link href="https://www.instagram.com/theusz.g?igsh=MXJjMXNmazFkcjY2ag==">
                            Insta
                        </Link>
                    </section>
                </section>
            </section>
      </section> */}
      <section className="text-center">
        <h1 className="text-2xl font-semibold mb-8">Conhecendo o nosso time</h1>
        <div className="flex flex-wrap justify-center gap-8">

            <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 w-64">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                    <h2 className="text-lg font-semibold text-blue-500">Felipe Seiki Hashiguti</h2>
                    <p className="text-gray-700">RM - 98985</p>
                    <p className="text-gray-700">Turma - 1TDSY</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.88-.01-1.73-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.05 1.54 1.05.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.92 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0112 7.8c.85.01 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.86 0 1.35-.01 2.44-.01 2.77 0 .27.16.58.67.48A9.98 9.98 0 0022 12c0-5.52-4.48-10-10-10z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3.5c-1.932 0-3.5 1.568-3.5 3.5s1.568 3.5 3.5 3.5 3.5-1.568 3.5-3.5-1.568-3.5-3.5-3.5zM17.5 6a1 1 0 110 2 1 1 0 010-2z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4h-.1C2.8 7 2 7.8 2 8.8v8.3c0 .7.6 1.2 1.2 1.2H6c.6 0 1.2-.5 1.2-1.2V8.8c0-.9-.8-1.7-1.7-1.7zM8.8 8h1.6v1.2h.1c.2-.3.5-.5.9-.7.3-.1.6-.2.9-.2.7 0 1.4.4 1.7 1.1.2.5.3 1.1.3 1.6v5.7c0 .6-.6 1.2-1.2 1.2h-2.3c-.6 0-1.2-.6-1.2-1.2V9.8c0-.7-.6-1.2-1.2-1.2zM22 8h-2.2V8H18c-.6 0-1.2.6-1.2 1.2v8.3c0 .7.6 1.2 1.2 1.2h2.2c.6 0 1.2-.6 1.2-1.2V8.8c0-.9-.7-1.8-1.5-1.8h.1z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


        </div>
        <Link href="https://github.com/MatheusGmota/CarRepair-2sem/tree/main" className="link-github">
                Link do reposirio no github
        </Link>
        <p className="mt-8 text-blue-400">
            <a href="#" className="hover:underline">Link do repositório no GitHub</a>
        </p>
    </section>
    </>
  )
}
