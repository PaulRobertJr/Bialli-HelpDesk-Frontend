import { ReactNode } from 'react'
import backgroundPattern from '../assets/background/login-pattern.svg'
import brandIcon from '../assets/logo/helpdesk-mark.svg'

type SecondaryCard = {
  actionLabel: string
  description: string
  onAction: () => void
  title: string
}

type AuthLayoutProps = {
  children: ReactNode
  description: string
  secondaryCard: SecondaryCard
  title: string
}

const AuthLayout = ({ children, description, secondaryCard, title }: AuthLayoutProps): JSX.Element => {
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
              <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
              <p className="text-sm text-slate-500">{description}</p>
            </div>
          </div>

          {children}

          <div className="rounded-3xl bg-white p-8 text-center shadow-[0_24px_48px_-32px_rgba(15,23,42,0.45)]">
            <p className="text-sm font-medium text-slate-700">{secondaryCard.title}</p>
            <p className="mt-1 text-sm text-slate-500">{secondaryCard.description}</p>
            <button
              className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-base font-semibold text-slate-500 transition hover:border-slate-300 hover:bg-slate-200 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
              onClick={secondaryCard.onAction}
              type="button"
            >
              {secondaryCard.actionLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout

