import { createContext } from 'react'
import type { Hero } from '../types/hero.interface'

interface FavoriteHeroContectProps {
  //state
  favorites: Hero[]
  favoriteCount: number
  // methods
  toggleFavorite: (hero: Hero) => void
  isFavorite: (hero: Hero) => boolean
}

export const FavoriteHeroContext = createContext<FavoriteHeroContectProps>(
  {} as FavoriteHeroContectProps
)
