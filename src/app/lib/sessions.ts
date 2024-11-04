import { redirect } from "next/navigation"

export const sairSessao = () => {
    sessionStorage.removeItem('user')    
    redirect("/")
}