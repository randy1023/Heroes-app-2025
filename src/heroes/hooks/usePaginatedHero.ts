import { useQuery } from '@tanstack/react-query'
import { getHeroesByPagesAction } from '../actions/get-heroes-by-page.action'
interface Props {
  page: number
  limit: number
  category?: string
}
export const usePaginatedHero = ({ page, limit, category = 'all' }: Props) => {
  return useQuery({
    queryKey: ['heroes', { page, limit, category }],
    queryFn: () => getHeroesByPagesAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}
