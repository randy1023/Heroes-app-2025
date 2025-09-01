import { CustomHeader } from '@/components/ui/custom/CustomHeader'
import { HeroesStats } from '@/heroes/components/HeroesStats'
import { SearchControls } from './ui/SearchControls'
import { CustomBreadCrumb } from '@/components/ui/custom/CustomBreadCrumb'

export const SearchPage = () => {
  return (
    <>
      <CustomHeader
        title='Busqueda de Super heroes'
        description='Descubre, explora y administras Heroes y Villanos'
      />
      <CustomBreadCrumb currentPage='Busqueda de heroes' />
      {/**Stats Dashboard */}
      <HeroesStats />

      {/**Filter and search*/}
      <SearchControls />
    </>
  )
}

export default SearchPage
