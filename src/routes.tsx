import { createBrowserRouter } from 'react-router-dom'

import { AppLayout, AuthLayout } from '@/pages/_layouts'
import { DashboardPage } from '@/pages/app'
import { SignInPage, SignUpPage } from '@/pages/auth'

import { OrderPage } from './pages/app/orders'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/orders', element: <OrderPage /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
    ],
  },
])
