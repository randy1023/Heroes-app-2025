import { heroApi } from '../api/hero.api'
import type { HeroesResponse } from '../types/get-heroes.response'

const BASE_URL = import.meta.env.VITE_API_URL
export const getHeroesByPagesAction = async (
  page: number,
  limit: number = 6,
  category: string = 'all'
): Promise<HeroesResponse> => {
  if (isNaN(page)) {
    page = 1
  }
  if (isNaN(limit)) {
    limit = 6
  }
  console.log({ page })
  const { data } = await heroApi.get<HeroesResponse>('/', {
    params: {
      limit,
      offset: (page - 1) * limit,
      category,
    },
  })

  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }))
  return {
    ...data,
    heroes,
  }
}
