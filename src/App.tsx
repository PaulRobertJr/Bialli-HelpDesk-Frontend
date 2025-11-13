import { FormEvent } from 'react'
import backgroundPattern from './assets/background/login-pattern.svg'
import brandIcon from './assets/logo/helpdesk-mark.svg'

type FormField = {
  id: string
  label: string
  placeholder: string
  type: 'email' | 'password'
  autoComplete: string
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

/**
 * Renderiza a tela de login do HelpDesk.
 * @returns {JSX.Element} Estrutura visual da página de autenticação.
 */
const App = (): JSX.Element => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 lg:flex-row">
      <div className="relative hidden min-h-screen w-full lg:block lg:w-1/2">
        <img
          alt="Painel gráfico do portal HelpDesk"
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundPattern}
        />
      </div>

      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-16">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-3 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 shadow-sm shadow-slate-900/30">
              <img alt="Ícone HelpDesk" className="h-7 w-7" src={brandIcon} />
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold text-slate-900">Acesse o portal</h1>
              <p className="text-sm text-slate-500">Entre usando seu e-mail e senha cadastrados</p>
            </div>
          </div>

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

          <div className="rounded-3xl bg-white p-8 text-center shadow-[0_24px_48px_-32px_rgba(15,23,42,0.45)]">
            <p className="text-sm text-slate-500">Ainda não tem uma conta?</p>
            <button
              className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-base font-semibold text-slate-500 transition hover:border-slate-300 hover:bg-slate-200 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
              type="button"
            >
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
