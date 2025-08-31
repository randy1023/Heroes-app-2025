import { Link, Outlet } from 'react-router'

export const HeroesLayout = () => {
  return (
    <div className='bg-red-100'>
      <ul>
        <li>
          <Link to='/'> Home</Link>
        </li>
        <li>
          <Link to='/heroes/1'> Hero</Link>
        </li>
        <li>
          <Link to='/search'>Busqueda </Link>
        </li>
        <li>
          <Link to='admin'>Admin </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}
