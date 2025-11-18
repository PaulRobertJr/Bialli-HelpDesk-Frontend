import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import { chamados } from '../data/chamados'

const statusStyles = {
  closed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  open: 'bg-red-100 text-red-800',
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

const ChamadosPage = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Chamados</h1>

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Atualizado em</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Id</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Título e Serviço</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Valor total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Técnico</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {chamados.map((chamado) => (
                <tr className="hover:bg-slate-50" key={chamado.id}>
                  <td className="px-6 py-4 text-sm text-slate-600">{chamado.atualizadoEm}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{chamado.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900">{chamado.titulo}</span>
                      <span className="text-xs text-slate-500">{chamado.servico}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">{chamado.valorTotal}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                        {chamado.cliente.iniciais}
                      </div>
                      <span className="text-sm text-slate-900">{chamado.cliente.nome}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                        {chamado.tecnico.iniciais}
                      </div>
                      <span className="text-sm text-slate-900">{chamado.tecnico.nome}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[chamado.status.variant]}`}
                    >
                      {statusIcons[chamado.status.variant]}
                      {chamado.status.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="text-slate-400 transition hover:text-slate-600"
                      onClick={() => navigate(`/chamados/${chamado.id}`)}
                      type="button"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ChamadosPage

