import { CustomHeader } from '@/components/ui/custom/CustomHeader'
import { HeroesStats } from '@/heroes/components/HeroesStats'
import { SearchControls } from './ui/SearchControls'
import { CustomBreadCrumb } from '@/components/ui/custom/CustomBreadCrumb'
import { useQuery } from '@tanstack/react-query'
import { searchHeroesAction } from '@/heroes/actions/search-heroes.action'
import { useSearchParams } from 'react-router'
import { HeroGrid } from '@/heroes/components/HeroGrid'

export const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') || undefined
  const strength = searchParams.get('strength') || undefined
  const { data: heroesSearched = [] } = useQuery({
    queryKey: ['search-heroes', { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
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

      <HeroGrid heroesList={heroesSearched} />
    </>
  )
}

export default SearchPage
