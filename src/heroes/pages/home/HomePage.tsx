import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CustomHeader } from '@/components/ui/custom/CustomHeader'
import { HeroesStats } from '@/heroes/components/HeroesStats'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { CustomPagination } from '@/components/ui/custom/CustomPagination'
import { CustomBreadCrumb } from '@/components/ui/custom/CustomBreadCrumb'
import { getHeroesByPagesAction } from '@/heroes/actions/get-heroes-by-page.action'

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = searchParams.get('tab') ?? 'all'
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '6'
  const selectedTab = useMemo(() => {
    const validateTab = ['all', 'favorites', 'heroes', 'villains']
    return validateTab.includes(activeTab) ? activeTab : 'all'
  }, [activeTab])

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes', { page, limit }],
    queryFn: () => getHeroesByPagesAction(+page, +limit),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })

  return (
    <>
      <>
        {/* Header */}
        <CustomHeader
          title='Universo de Super heroes'
          description='Descubre, explora y administras Heroes y Villanos'
        />
        <CustomBreadCrumb currentPage='Super Heroes' />
        {/* Stats Dashboard */}
        <HeroesStats />

        {/* Controls */}

        {/* Advanced Filters */}

        {/* Tabs */}
        <Tabs value={selectedTab} className='mb-8  '>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger
              value='all'
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'all')

                  return prev
                })
              }
            >
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'favorites')

                  return prev
                })
              }
              value='favorites'
              className='flex items-center gap-2'
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'heroes')

                  return prev
                })
              }
              value='heroes'
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'villains')

                  return prev
                })
              }
              value='villains'
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <h1>Todos los personajes</h1>

            <HeroGrid heroesList={heroesResponse?.heroes ?? []} />
          </TabsContent>

          <TabsContent value='favorites'>
            <h1>Favoritos</h1>
            <HeroGrid heroesList={[]} />
          </TabsContent>
          <TabsContent value='heroes'>
            <h1>Heroes</h1>
            <HeroGrid heroesList={[]} />
          </TabsContent>
          <TabsContent value='villains'>
            <h1>Villanos</h1>
            <HeroGrid heroesList={[]} />
          </TabsContent>
        </Tabs>

        {/* Results info */}

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 0} />
      </>
    </>
  )
}
