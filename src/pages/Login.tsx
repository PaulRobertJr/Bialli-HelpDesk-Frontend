import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

type FormField = {
  autoComplete: string
  id: string
  label: string
  placeholder: string
  type: 'email' | 'password'
}

const formFields: ReadonlyArray<FormField> = [
  {
    autoComplete: 'email',
    id: 'email',
    label: 'E-mail',
    placeholder: 'exemplo@mail.com',
    type: 'email',
  },
  {
    autoComplete: 'current-password',
    id: 'password',
    label: 'Senha',
    placeholder: 'Digite sua senha',
    type: 'password',
  },
]

const navigationTargets = {
  chamados: '/chamados',
  createAccount: '/register',
} as const


const LoginPage = (): JSX.Element => {
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(navigationTargets.chamados)
  }

  return (
    <AuthLayout
      description="Entre usando seu e-mail e senha cadastrados"
      secondaryCard={{
        actionLabel: 'Criar conta',
        description: 'Cadastre agora mesmo',
        onAction: () => navigate(navigationTargets.createAccount),
        title: 'Ainda não tem uma conta?',
      }}
      title="Acesse o portal"
    >
      <form
        className="space-y-6 rounded-3xl bg-white p-8 shadow-[0_24px_48px_-32px_rgba(15,23,42,0.45)]"
        onSubmit={handleSubmit}
      >
        <div className="space-y-5">
          {formFields.map((field) => (
            <label className="block text-left text-sm font-medium text-slate-700" htmlFor={field.id} key={field.id}>
              {field.label}
              <input
                autoComplete={field.autoComplete}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder-slate-400 transition focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                type={field.type}
              />
            </label>
          ))}
        </div>
        <button
          className="w-full rounded-xl bg-slate-900 px-4 py-3 text-base font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </AuthLayout>
  )
}

export default LoginPage

