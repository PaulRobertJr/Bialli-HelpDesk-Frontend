import { type ReactElement } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { clientes } from '../data/clientes'

const ClientesPage = (): ReactElement => {
  const handleEditar = (email: string) => {
    // aguardando rota do back
  }

  const handleDeletar = (email: string) => {
    // aguardando rota do back
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Clientes</h1>

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Nome</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">E-mail</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {clientes.map((cliente) => (
                <tr className="hover:bg-slate-50" key={cliente.email}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {cliente.iniciais}
                      </div>
                      <span className="text-sm font-medium text-slate-900">{cliente.nome}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{cliente.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        className="text-red-500 transition hover:text-red-700"
                        onClick={() => handleDeletar(cliente.email)}
                        type="button"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        className="text-slate-900 transition hover:text-slate-700"
                        onClick={() => handleEditar(cliente.email)}
                        type="button"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
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

export default ClientesPage

