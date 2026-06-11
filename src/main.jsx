import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Services from './pages/Services.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <h1>Contact Page</h1> },
], {
  basename: "/abdel-healthcare"
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
