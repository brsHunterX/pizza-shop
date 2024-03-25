import './global.css'

import { useTheme } from 'next-themes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme'
import { Toaster } from '@/components/ui'
import { router } from '@/routes'

export function App() {
  const { theme } = useTheme()
  const currentTheme = theme as 'light' | 'dark' | 'system' | undefined

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza-shop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors theme={currentTheme} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
