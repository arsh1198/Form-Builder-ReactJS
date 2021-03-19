import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import BuilderProvider from './contexts/builderContext'
import { AuthProvider } from './contexts/authContext'
import { HistoryListener } from 'react-router-navigation-confirm'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HistoryListener>
        <ChakraProvider>
          <AuthProvider>
            <BuilderProvider>
              <App />
            </BuilderProvider>
          </AuthProvider>
        </ChakraProvider>
      </HistoryListener>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
