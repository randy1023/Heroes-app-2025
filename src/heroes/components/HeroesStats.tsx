import { Badge } from '@/components/ui/badge'
import { Users, Heart, Zap, Trophy } from 'lucide-react'
import { HeroStatCard } from './HeroStatCard'

export const HeroesStats = () => {
  return (
    <div className='grid grid-cols-4 md:grid-cols-4 gap-4 mb-8'>
      <HeroStatCard
        cardTitle='Total Characters'
        icon={<Users className='h-4 w-4 text-muted-foreground' />}
      >
        <div className='text-2xl font-bold'>16</div>
        <div className='flex gap-1 mt-2'>
          <Badge variant='secondary' className='text-xs'>
            12 Heroes
          </Badge>
          <Badge variant='destructive' className='text-xs'>
            2 Villains
          </Badge>
        </div>
      </HeroStatCard>
      <HeroStatCard
        cardTitle='Favoritos'
        icon={<Heart className='h-4 w-4 text-muted-foreground' />}
      >
        <div className='text-2xl font-bold text-red-600'>3</div>
        <p className='text-xs text-muted-foreground'>18.8% of total</p>
      </HeroStatCard>

      <HeroStatCard
        cardTitle='Mas fuerte'
        icon={<Zap className='h-4 w-4 text-muted-foreground' />}
      >
        <div className='text-lg font-bold'>Superman</div>
        <p className='text-xs text-muted-foreground'>Fuerza: 10/10</p>
      </HeroStatCard>

      <HeroStatCard
        cardTitle='Mas Inteligente'
        icon={<Trophy className='h-4 w-4 text-muted-foreground' />}
      >
        <div className='text-lg font-bold'>Batman</div>
        <p className='text-xs text-muted-foreground'>Inteligencia: 10/10</p>
      </HeroStatCard>
    </div>
  )
}
