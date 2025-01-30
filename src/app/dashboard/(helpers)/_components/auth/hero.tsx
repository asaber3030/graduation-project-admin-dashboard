import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Users, BarChart, Shield } from "lucide-react"
import React from "react" // Import React

export default function AdminIntroBanner() {
  return (
    <div className='relative min-h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-white/10 backdrop-blur-sm'>
        <svg className='absolute inset-0 h-full w-full' xmlns='http://www.w3.org/2000/svg'>
          <pattern
            id='hero-pattern'
            width='32'
            height='32'
            patternUnits='userSpaceOnUse'
            x='50%'
            y='100%'
            patternTransform='translate(0 -1)'
          >
            <path d='M0 32V.5H32' fill='none' stroke='rgba(255, 255, 255, 0.1)'></path>
          </pattern>
          <rect width='100%' height='100%' fill='url(#hero-pattern)'></rect>
        </svg>
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl'>
            Hospital Admin System
          </h1>
          <p className='mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            Streamline your hospital management with our comprehensive admin dashboard. Manage
            patients, staff, and resources efficiently.
          </p>
          <div className='mt-10 flex justify-center'>
            <Button size='lg' variant='blue' className='rounded-full px-8'>
              Get Started
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <FeatureCard
            icon={<Laptop className='h-6 w-6 text-indigo-200' />}
            title='Intuitive Dashboard'
            description='Access all critical information at a glance'
          />
          <FeatureCard
            icon={<Users className='h-6 w-6 text-indigo-200' />}
            title='Staff Management'
            description='Efficiently manage schedules and assignments'
          />
          <FeatureCard
            icon={<BarChart className='h-6 w-6 text-indigo-200' />}
            title='Analytics'
            description='Make data-driven decisions with powerful insights'
          />
          <FeatureCard
            icon={<Shield className='h-6 w-6 text-indigo-200' />}
            title='Secure Access'
            description='Role-based access control for data protection'
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className='bg-white/10 backdrop-blur-sm border-none'>
      <CardContent className='p-6'>
        <div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 mb-4'>
          {icon}
        </div>
        <h3 className='text-lg font-medium text-white mb-2'>{title}</h3>
        <p className='text-indigo-100'>{description}</p>
      </CardContent>
    </Card>
  )
}
