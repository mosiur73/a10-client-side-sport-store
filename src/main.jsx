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
   <div className='max-w-screen-2xl mx-auto'>
   <RouterProvider router={router}></RouterProvider>
   </div>
   </AuthProvider>
  </StrictMode>,
)
