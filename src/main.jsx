import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ValidationProvider } from './components/ValidationContext.jsx'
import { DarkModeProvider } from './components/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <ValidationProvider>
        <App /> 
      </ValidationProvider>
    </DarkModeProvider>
  </StrictMode>,
)
