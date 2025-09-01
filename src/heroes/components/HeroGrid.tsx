import { HeroGridCard } from './HeroGridCard'

export const HeroGrid = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
      {/* Hero Card 1 - Superman */}
      <HeroGridCard />
      {/* Hero Card 2 - Batman */}
    </div>
  )
}
