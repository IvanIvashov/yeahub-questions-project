import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/common.css'
import "./app/styles/reset.css";

import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
