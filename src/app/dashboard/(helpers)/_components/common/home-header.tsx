import { Button } from "@/components/ui/button"
import { Stethoscope } from "lucide-react"
import Link from "next/link"

export const HomeHeader = () => {
  return (
    <header className='bg-white border-b border-gray-200'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <Stethoscope className='h-8 w-8 text-blue-600' />
          <span className='text-2xl font-bold text-gray-800'>Techmed</span>
        </div>
        <nav className='hidden md:block'>
          <ul className='flex space-x-6'>
            <li>
              <Link href='/' className='text-gray-600 hover:text-blue-600 transition-colors'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link href='/login' className='text-gray-600 hover:text-blue-600 transition-colors'>
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant='outline' className='md:hidden'>
          Menu
        </Button>
      </div>
    </header>
  )
}
