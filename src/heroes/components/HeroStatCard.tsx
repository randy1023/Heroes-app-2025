import type { JSX } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface Props {
  cardTitle: string
  icon: JSX.Element
  children: React.ReactNode
}

export const HeroStatCard = ({ cardTitle, icon, children }: Props) => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{cardTitle}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
