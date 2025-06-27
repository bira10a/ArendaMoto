import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App';
import { BrowserRouter } from "react-router";
import ThemeProvider from './themes/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
