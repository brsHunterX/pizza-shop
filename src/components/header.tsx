import { CookingPot, House, Pizza } from '@phosphor-icons/react'

import { AccountMenu, NavLink } from '@/components'
import { ThemeToggle } from '@/components/theme'
import { Separator } from '@/components/ui'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6 fill-primary" />
        <Separator className="h-6" orientation="vertical" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <House className="size-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <CookingPot className="size-4" />
            Pedidos
          </NavLink>
        </nav>
        <div className="items0center ml-auto flex gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
