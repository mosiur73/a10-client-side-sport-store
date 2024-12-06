import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './component/Style/Style.css'
import { RouterProvider } from 'react-router-dom'
import router from './Utills/router.jsx'
import AuthProvider from './component/Provider/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
