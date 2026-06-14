import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/career", element: <h1>Career</h1>},
  { path: "/faq", element: <h1>FAQ</h1>}
], {
  basename: "/abdel-healthcare"
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
