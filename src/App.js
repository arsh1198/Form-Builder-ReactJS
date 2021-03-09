import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import ProtectedRoute from './components/ProtectedRoute'
import ViewForm from './pages/viewForm'
import ReviewForm from './pages/reviewForm'

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
        <ReviewForm />
      </ProtectedRoute>
      <ProtectedRoute path="/form/u/:userId/:formId">
        <ViewForm />
      </ProtectedRoute>
    </Switch>
  )
}
