import { FormularioLogin } from "@/components/FormularioLogin/FormularioLogin";
import Link from "next/link";

export default function Login() {
    return (
    <main className="main">
        <section className="grid content-center items-center md:justify-center gap-5 h-screen p-6">
            <div>
                <article className="flex flex-col gap-5 justify-between border border-gray-300 bg-bunker rounded-lg shadow-lg p-4 md:p-8 md:w-screen max-w-[466px]">
                    <h1 className="font-bold text-center text-xl text-curious-blue-500 md:text-3xl">Entrar</h1>
                    <FormularioLogin />
                </article>
            </div>
            <div>
                <article className="text-center">
                    <p className="font-bold text-sm text-white antialiased">Não possui cadastro? <Link className="underline text-bright-turquoise-300 hover:text-bright-turquoise-500" href="/cadastrar">Cadastre-se</Link></p>
                </article>
            </div>
        </section>
    </main>
    )
  }
  