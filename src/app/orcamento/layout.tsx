import React from 'react'

export default function OrcamentoLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className="main">
        <h1 className="text-white text-4xl mb-8 md:mb-12">Orcamento</h1>
        {children}
    </main>
  )
}
