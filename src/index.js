import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import BuilderProvider from './contexts/builderContext'
import { AuthProvider } from './contexts/authContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <AuthProvider>
          <BuilderProvider>
            <App />
          </BuilderProvider>
        </AuthProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
