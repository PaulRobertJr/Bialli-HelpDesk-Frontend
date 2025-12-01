import { type ReactElement, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import { getTecnicoByEmail } from '../data/tecnicos'

type Periodo = {
  label: string
  horarios: ReadonlyArray<string>
}

const periodos: ReadonlyArray<Periodo> = [
  {
    horarios: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    label: 'MANHÃ',
  },
  {
    horarios: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    label: 'TARDE',
  },
  {
    horarios: ['19:00', '20:00', '21:00', '22:00', '23:00'],
    label: 'NOITE',
  },
]

const PerfilTecnicoPage = (): ReactElement => {
  const { email: emailParam } = useParams<{ email: string }>()
  const navigate = useNavigate()

  const emailDecodificado = emailParam ? decodeURIComponent(emailParam) : ''
  const tecnico = emailDecodificado ? getTecnicoByEmail(emailDecodificado) : undefined

  const [nome, setNome] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [senha, setSenha] = useState('')
  const [horariosSelecionados, setHorariosSelecionados] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (tecnico) {
      setNome(tecnico.nome)
      setEmailValue(tecnico.email)
      setHorariosSelecionados(new Set(tecnico.disponibilidade))
    }
  }, [tecnico])

  if (!tecnico) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center py-12">
          <p className="text-slate-600">Técnico não encontrado</p>
        </div>
      </DashboardLayout>
    )
  }

  const toggleHorario = (horario: string) => {
    const novosHorarios = new Set(horariosSelecionados)
    if (novosHorarios.has(horario)) {
      novosHorarios.delete(horario)
    } else {
      novosHorarios.add(horario)
    }
    setHorariosSelecionados(novosHorarios)
  }

  const handleSalvar = () => {
    // TODO: Implementar salvamento
    navigate('/tecnicos')
  }

  const handleCancelar = () => {
    navigate('/tecnicos')
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
              onClick={() => navigate('/tecnicos')}
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Voltar</span>
            </button>
            <h1 className="text-3xl font-bold text-slate-900">Perfil de técnico</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              onClick={handleCancelar}
              type="button"
            >
              Cancelar
            </button>
            <button
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              onClick={handleSalvar}
              type="button"
            >
              Salvar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-2">
              <h2 className="text-lg font-semibold text-slate-900">Dados pessoais</h2>
              <p className="mt-1 text-sm text-slate-500">Defina as informações do perfil de técnico</p>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700" htmlFor="nome">
                  NOME
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder-slate-400 transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  id="nome"
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome completo"
                  type="text"
                  value={nome}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                  E-MAIL
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder-slate-400 transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  id="email"
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="exemplo@mail.com"
                  type="email"
                  value={emailValue}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700" htmlFor="senha">
                  SENHA
                </label>
                <input
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder-slate-400 transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  id="senha"
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Defina a senha de acesso"
                  type="password"
                  value={senha}
                />
                <p className="mt-1 text-xs text-slate-500">Mínimo de 6 dígitos</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-2">
              <h2 className="text-lg font-semibold text-slate-900">Horários de atendimento</h2>
              <p className="mt-1 text-sm text-slate-500">
                Selecione os horários de disponibilidade do técnico para atendimento
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {periodos.map((periodo) => (
                <div key={periodo.label}>
                  <h3 className="mb-3 text-sm font-semibold text-slate-700">{periodo.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {periodo.horarios.map((horario) => {
                      const isSelected = horariosSelecionados.has(horario)

                      return (
                        <button
                          className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                            isSelected
                              ? 'border-slate-900 bg-slate-900 text-white'
                              : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                          }`}
                          key={horario}
                          onClick={() => toggleHorario(horario)}
                          type="button"
                        >
                          {horario}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PerfilTecnicoPage

