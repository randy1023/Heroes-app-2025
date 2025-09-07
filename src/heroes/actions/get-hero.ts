import { heroApi } from '../api/hero.api'
import type { Hero } from '../types/hero.interface'

const BASE_URL = import.meta.env.VITE_API_URL
export const getHeroAction = async (idSlug: string): Promise<Hero> => {
  console.log({ idSlug })
  const { data } = await heroApi.get<Hero>(`/${idSlug}`)
  console.log({ data })
  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  }
}
