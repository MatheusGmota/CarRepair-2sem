import { FormularioCadastro } from "@/components/FormularioCadastro/FormularioCadastro";
import Link from "next/link";

export default function Cadastro() {
    return (
    <>
        <section className="grid content-center items-center md:justify-center gap-5 h-screen p-6">
            <div>
                <article className="flex flex-col gap-5 justify-between border border-gray-300 bg-white rounded-lg shadow-lg p-4 md:p-8 md:w-screen max-w-screen-sm">
                    <h1 className="font-bold text-center text-lg text-curious-blue-500 md:text-3xl">Cadastre-se</h1>
                    <FormularioCadastro />
                </article>
            </div>
            <div>
                <article className="text-center">
                    <p className="font-bold text-sm text-white antialiased">Já possui login? <Link className="underline text-bright-turquoise-300 hover:text-bright-turquoise-500" href="/login">Login</Link></p>
                </article>
            </div>
        </section>
    </>
    )
  }
  