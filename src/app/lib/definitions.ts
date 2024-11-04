import { z } from 'zod'
 
export const CadastroFormSchema = z.object({
    nome: z
        .string()
        .min(2, { message: 'Nome deve conter pelo menos 2 carateres.' })
        .trim(),
    numeroDocumento: z
        .string()
        .length(11, { message: 'O CPF deve conter exatamente 11 dígitos.' })
        .regex(/^\d+$/, { message: 'O CPF deve conter apenas números.' })
        .transform((val) => Number(val)),
    telefone: z
        .string()
        .length(11, { message: 'O telefone deve conter exatamente 11 dígitos.' })
        .regex(/^\d+$/, { message: 'O telefone deve conter apenas números.' })
        .transform((val) => Number(val)),
    email: z
        .string()
        .email({ message: 'Coloque um email válido.' })
        .trim(),
    senha: z
        .string()
        .min(8, { message: 'Conter pelo menos 8 caracteres.' })
        .regex(/[a-zA-Z]/, { message: 'Conter pele menos uma letra' })
        .regex(/[0-9]/, { message: 'Conter pelo menos um número.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Conter pelo menos um caracter especial.',
        })
        .trim(),
})
 
export type FormState =
  | {
      errors?: {
        nome?: string[]
        numeroDocumento?: string[]
        telefone?: string[]
        email?: string[]
        senha?: string[]
      }
      message?: string
    }
  | undefined