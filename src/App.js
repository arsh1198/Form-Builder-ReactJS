import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Builder from './pages/builder'
import Form from './pages/form'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <Switch>
      <ProtectedRoute exact path="/">
        <Home />
      </ProtectedRoute>
      <Route path="/login">
        <Login />
      </Route>
      <ProtectedRoute path="/builder">
        <Builder />
      </ProtectedRoute>
      <ProtectedRoute path="/form/:id">
        <Form />
      </ProtectedRoute>
    </Switch>
  )
}
