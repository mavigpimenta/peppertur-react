import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/Navbar.tsx'
import { Home } from './components/Home.tsx'
import { WhoAre } from './components/WhoAre.tsx'
import { Services } from './components/Services.tsx'
import { Contact } from './components/Contact.tsx'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer.tsx'
import 'boxicons/css/boxicons.min.css';
import { Page } from './Page.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page/>
    <ToastContainer />  
  </StrictMode>,
)
