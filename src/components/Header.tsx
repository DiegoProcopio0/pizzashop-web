import { Separator } from '@radix-ui/react-separator'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="size-6" />
            Inicio
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="size-6" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
