import Link from "next/link";

export default function NotFound() {
    return (
      <>
        <main className="main">
          <div className="text-center">
            <p className="text-base font-semibold text-curious-blue-600">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-100 sm:text-7xl">
              Página não encontrada
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Desculpe, não conseguimos achar a página que está procurando
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="botao"
              >
                Voltar à página inicial
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  