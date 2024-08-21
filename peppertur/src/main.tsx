import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'boxicons/css/boxicons.min.css';
import { Page } from './Page.tsx'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page/>
    <ToastContainer/> 
  </StrictMode>,
)
