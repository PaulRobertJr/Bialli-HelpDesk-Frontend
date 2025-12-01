import { type ReactElement } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import { getChamadoById } from '../data/chamados'

const statusStyles = {
  closed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  open: 'bg-pink-100 text-pink-800',
} as const

const statusIcons = {
  closed: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'in-progress': (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  open: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
} as const

const ChamadoDetalhadoPage = (): ReactElement => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const chamado = id ? getChamadoById(id) : undefined

  if (!chamado) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center py-12">
          <p className="text-slate-600">Chamado não encontrado</p>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
              onClick={() => navigate('/chamados')}
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Voltar</span>
            </button>
            <h1 className="text-3xl font-bold text-slate-900">Chamado detalhado</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 rounded-lg border border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
              type="button"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Em atendimento
            </button>
            <button
              className="flex items-center gap-2 rounded-lg border border-green-600 bg-white px-4 py-2 text-sm font-medium text-green-600 transition hover:bg-green-50"
              type="button"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Encerrado
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">ID do Chamado</p>
                  <p className="text-lg font-semibold text-slate-900">{chamado.id}</p>
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[chamado.status.variant]}`}
                >
                  {statusIcons[chamado.status.variant]}
                  {chamado.status.label}
                </span>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-slate-900">{chamado.titulo}</h2>

              <div className="mb-6 space-y-4">
                <div>
                  <p className="mb-2 text-sm font-medium text-slate-700">Descrição</p>
                  <p className="text-sm text-slate-600">{chamado.descricao}</p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-slate-700">Categoria</p>
                  <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {chamado.servico}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                <div>
                  <p className="text-sm text-slate-500">Criado em</p>
                  <p className="text-sm font-medium text-slate-900">{chamado.criadoEm}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Atualizado em</p>
                  <p className="text-sm font-medium text-slate-900">{chamado.atualizadoEm}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="mb-3 text-sm font-medium text-slate-700">Cliente</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {chamado.cliente.iniciais}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{chamado.cliente.nome}</p>
                    <p className="text-xs text-slate-500">{chamado.cliente.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Técnico responsável</h3>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {chamado.tecnico.iniciais}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{chamado.tecnico.nome}</p>
                  <p className="text-xs text-slate-500">{chamado.tecnico.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Valores</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Preço base</span>
                  <span className="text-sm font-medium text-slate-900">{chamado.precoBase}</span>
                </div>

                {chamado.adicionais && chamado.adicionais.length > 0 && (
                  <div className="border-t border-slate-200 pt-3">
                    <p className="mb-2 text-sm font-medium text-slate-700">Adicionais</p>
                    <div className="space-y-2">
                      {chamado.adicionais.map((adicional, index) => (
                        <div className="flex justify-between" key={index}>
                          <span className="text-sm text-slate-600">{adicional.nome}</span>
                          <span className="text-sm font-medium text-slate-900">{adicional.valor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-slate-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-base font-semibold text-slate-900">Total</span>
                    <span className="text-base font-bold text-slate-900">{chamado.valorTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ChamadoDetalhadoPage

