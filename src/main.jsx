import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/*wrapping the entire application in the react strict mode to avoid the errors in the application*/}

    <AuthProvider> {/* Wrapping the entire application in AuthProvider to provide user data to the entire application */}
      <App /> {/* Main application component */}
    </AuthProvider>

  </React.StrictMode>,
)
