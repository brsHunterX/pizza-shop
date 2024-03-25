import { Spinner } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button, Input, Label } from '@/components/ui'

const signInSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

type SignUpForm = z.infer<typeof signInSchema>

export function SignUpPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const handleSignUp = async (data: SignUpForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('O estabelecimento foi cadastrado com sucesso.', {
        action: {
          label: 'Entrar',
          onClick: () => navigate('/sign-in'),
        },
      })
      console.log(data)
    } catch (error) {
      toast.error('Ocorreu um erro ao cadastrar o estabelecimento.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignUp(data),
        },
      })
    }
  }

  return (
    <>
      <Helmet title="Cadastrar" />
      <div className="p-8">
        <Button className="absolute right-8 top-8" variant="ghost" asChild>
          <Link to="/sign-in">Entrar na conta</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-small text-muted-foreground">
              Seja um parceiro e inicie suas vendas.
            </p>
          </div>
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                <Input
                  id="restaurantName"
                  type="text"
                  {...register('restaurantName')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Seu nome</Label>
                <Input
                  id="managerName"
                  type="text"
                  {...register('managerName')}
                />
              </div>
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting && <Spinner className="mr-2 size-4 animate-spin" />}
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos <br />
              <a className="underline underline-offset-1" href="#">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-1" href="#">
                Políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
