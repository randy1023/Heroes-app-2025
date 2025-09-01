import { SlashIcon } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from '../breadcrumb'
import { Link } from 'react-router'

interface BreadCrumb {
  label: string
  to: string
}
interface Props {
  currentPage: string
  breadCrumb?: BreadCrumb[]
}

export const CustomBreadCrumb = ({ currentPage, breadCrumb = [] }: Props) => {
  return (
    <Breadcrumb className='my-5'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to='/'>inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadCrumb.map((crumb) => (
          <>
            <BreadcrumbSeparator>
              <SlashIcon className='h-4 w-4' />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={crumb.to}>{crumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ))}
        <BreadcrumbSeparator>
          <SlashIcon className='h-4 w-4' />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className='text-black'>{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
