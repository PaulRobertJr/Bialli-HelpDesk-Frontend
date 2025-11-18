import { type ReactElement } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { tecnicos } from '../data/tecnicos'

const TecnicosPage = (): ReactElement => {
  const handleNovo = () => {
    //chamar qual rota ? pendente
  }

  const handleEditar = (email: string) => {
    // aguardando rota, utilizando dados mockados
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-900">Técnicos</h1>
          <button
            className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            onClick={handleNovo}
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Novo
          </button>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Nome</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">E-mail</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Disponibilidade</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {tecnicos.map((tecnico) => {
                const horariosVisiveis = tecnico.disponibilidade.slice(0, 4)
                const horariosRestantes = tecnico.disponibilidade.length - 4

                return (
                  <tr className="hover:bg-slate-50" key={tecnico.email}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                          {tecnico.iniciais}
                        </div>
                        <span className="text-sm font-medium text-slate-900">{tecnico.nome}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{tecnico.email}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {horariosVisiveis.map((horario) => (
                          <span
                            className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                            key={horario}
                          >
                            {horario}
                          </span>
                        ))}
                        {horariosRestantes > 0 && (
                          <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                            +{horariosRestantes}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="text-slate-400 transition hover:text-slate-600"
                        onClick={() => handleEditar(tecnico.email)}
                        type="button"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TecnicosPage

