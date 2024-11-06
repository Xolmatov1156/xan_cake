import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BasketProvider } from './context/useContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <BasketProvider>
        <App />
    </BasketProvider>
    </BrowserRouter>
)
