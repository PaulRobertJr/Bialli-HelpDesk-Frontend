import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

type AppRoute = {
  element: JSX.Element
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
    element: <Navigate replace to="/login" />,
    path: '*',
  },
]


const App = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={route.element} key={route.path} path={route.path} />
      ))}
    </Routes>
  )
}

export default App
