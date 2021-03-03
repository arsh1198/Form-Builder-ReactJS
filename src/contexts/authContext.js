import firebaseClient from '../firebase/firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  firebaseClient()
  const [user, setUser] = useState({})

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async user => {
      if (!user) {
        setUser(null)
        return
      }

      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
