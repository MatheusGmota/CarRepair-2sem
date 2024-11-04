import { sairSessao } from '@/app/lib/sessions'
import React from 'react'

export default function BotaoLogout() {
  return (
    <button onClick={sairSessao} className='botao text-sm'>Desconectar</button>
  )
}
