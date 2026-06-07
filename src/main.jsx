import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact", element: <h1>Contact Page</h1> },
], {
  basename: "/abdel-healthcare"
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
