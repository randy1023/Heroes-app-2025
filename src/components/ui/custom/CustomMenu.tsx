import { Link, useLocation } from 'react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../navigation-menu'
import { cn } from '@/lib/utils'

export const CustomMenu = () => {
  const { pathname } = useLocation()

  const isActive = (path: string) => path === pathname

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/**Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive('/') && 'bg-slate-200 ', 'rounded-md  p-2')}
          >
            <Link to='/'>Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/**Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive('/search') && 'bg-slate-200 ',
              'rounded-md  p-2'
            )}
          >
            <Link to='/search'>Search</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
