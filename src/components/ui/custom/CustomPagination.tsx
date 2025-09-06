import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../button'
import { useSearchParams } from 'react-router'

interface Props {
  totalPages: number
  limit?: number
}

export const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const queryPage = searchParams.get('page') ?? '1'
  const page = isNaN(+queryPage) ? 1 : +queryPage

  const handleChangePage = (page: number) => {
    if (page < 1 || page > totalPages) return

    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }
  return (
    <div className='flex items-center justify-center space-x-2'>
      <Button
        onClick={() => handleChangePage(page - 1)}
        variant='outline'
        size='sm'
        disabled={page === 1}
      >
        <ChevronLeft className='h-4 w-4' />
        Anteriores
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          variant={page === index + 1 ? 'default' : 'outline'}
          onClick={() => handleChangePage(index + 1)}
          size='sm'
        >
          {index + 1}
        </Button>
      ))}

      <Button
        onClick={() => handleChangePage(page + 1)}
        variant='outline'
        size='sm'
        disabled={page === totalPages}
      >
        Siguientes
        <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  )
}
