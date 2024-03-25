import { Spinner } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button, Input, Label } from '@/components/ui'

const signInSchema = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInSchema>

export function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const handleSignIn = async (data: SignInForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autenticação para o seu e-mail.')
      console.log(data)
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar o link de autenticação.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    }
  }

  return (
    <>
      <Helmet title="Entrar" />
      <div className="p-8">
        <Button className="absolute right-8 top-8" variant="ghost" asChild>
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-small text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro.
            </p>
          </div>
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting && <Spinner className="mr-2 size-4 animate-spin" />}
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
