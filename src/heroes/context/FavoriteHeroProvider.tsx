import { useEffect, useState, type PropsWithChildren } from 'react'
import { FavoriteHeroContext } from './FavoriteHeroContext'
import type { Hero } from '../types/hero.interface'

const getFavoriteFromStorage = (): Hero[] => {
  const favorites = localStorage.getItem('favorites')
  return favorites ? JSON.parse(favorites) : []
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getFavoriteFromStorage())

  const toggleFavorite = (hero: Hero) => {
    const heroExists = favorites.find((h) => h.id === hero.id)

    if (heroExists) {
      setFavorites(favorites.filter((h) => h.id !== hero.id))
      return
    }

    setFavorites([...favorites, hero])
  }

  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id)
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return (
    <FavoriteHeroContext
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,
        toggleFavorite: toggleFavorite,
        isFavorite: isFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  )
}
