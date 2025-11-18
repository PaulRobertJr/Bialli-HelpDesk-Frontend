import { type ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import ChamadosPage from './pages/Chamados'
import ChamadoDetalhadoPage from './pages/ChamadoDetalhado'

type AppRoute = {
  element: ReactElement
  path: string
}

const routes: ReadonlyArray<AppRoute> = [
  {
    element: <Navigate replace to="/login" />,
    path: '/',
  },
  {
    element: <LoginPage />,
    path: '/login',
  },
  {
    element: <RegisterPage />,
    path: '/register',
  },
  {
    element: <ChamadosPage />,
    path: '/chamados',
  },
  {
    element: <ChamadoDetalhadoPage />,
    path: '/chamados/:id',
  },
  {
    element: <Navigate replace to="/login" />,
    path: '*',
  },
]


const App = (): ReactElement => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={route.element} key={route.path} path={route.path} />
      ))}
    </Routes>
  )
}

export default App
