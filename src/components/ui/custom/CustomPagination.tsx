import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../button'

interface Props {
  totalPages: number
  limit?: number
}

export const CustomPagination = ({ totalPages }: Props) => {
  const page = 1 as number
  return (
    <div className='flex items-center justify-center space-x-2'>
      <Button variant='outline' size='sm' disabled>
        <ChevronLeft className='h-4 w-4' />
        Anteriores
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          variant={page === index + 1 ? 'default' : 'outline'}
          size='sm'
          disabled={page === 1}
        >
          {index + 1}
        </Button>
      ))}

      <Button variant='outline' size='sm' disabled={page === totalPages}>
        Siguientes
        <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  )
}
