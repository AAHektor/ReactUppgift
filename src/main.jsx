import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ValidationProvider } from './components/ValidationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ValidationProvider>
    <App />
    </ValidationProvider>
  </StrictMode>,
)
