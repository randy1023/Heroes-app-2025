import { HeroGridCard } from './HeroGridCard'
import type { Hero } from '../types/hero.interface'
interface Props {
  heroesList: Hero[]
}

export const HeroGrid = ({ heroesList }: Props) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
      {/* Hero Card 1 - Superman */}
      {heroesList.map((hero) => (
        <HeroGridCard key={hero.id} hero={hero} />
      ))}
      {/* Hero Card 2 - Batman */}
    </div>
  )
}
