import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'animate.css';
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClinet = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClinet}>
      <AuthProvider>
        <RouterProvider router={router} />,
      </AuthProvider>
      
    </QueryClientProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>,
)
