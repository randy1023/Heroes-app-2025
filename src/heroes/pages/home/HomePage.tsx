import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CustomHeader } from '@/components/ui/custom/CustomHeader'
import { HeroesStats } from '@/heroes/components/HeroesStats'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { useState } from 'react'
import { CustomPagination } from '@/components/ui/custom/CustomPagination'
import { CustomBreadCrumb } from '@/components/ui/custom/CustomBreadCrumb'

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' | 'villains'
  >('all')
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
        <Tabs value={activeTab} className='mb-8  '>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='all' onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab('favorites')}
              value='favorites'
              className='flex items-center gap-2'
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab('heroes')} value='heroes'>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab('villains')}
              value='villains'
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <h1>Todos los personajes</h1>
            <HeroGrid />
          </TabsContent>

          <TabsContent value='favorites'>
            <h1>Favoritos</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value='heroes'>
            <h1>Heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value='villains'>
            <h1>Villanos</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Results info */}

        {/* Pagination */}
        <CustomPagination totalPages={10} />
      </>
    </>
  )
}
