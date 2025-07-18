import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Users,
  Stethoscope,
  Calendar,
  Activity,
  ChevronRight,
  BarChart2,
  FileText,
  LogIn
} from "lucide-react"
import { LinkBtn } from "@/components/common/link-btn"
import AdminIntroBanner from "./dashboard/(helpers)/_components/auth/hero"
import { HomeHeader } from "./dashboard/(helpers)/_components/common/home-header"

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      <HomeHeader />

      <AdminIntroBanner />

      <main className='container mx-auto px-4 py-8'>
        <section className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Unified Hospital Management
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Streamline operations across your three hospitals with our powerful, intuitive platform.
          </p>
          <div className='flex gap-2 justify-center'>
            <Button size='lg' variant='outline'>
              Get Started
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>

            <LinkBtn href='/login' size='lg' className='bg-blue-600 hover:bg-blue-700'>
              Login
              <LogIn className='ml-2 h-4 w-4' />
            </LinkBtn>
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Our Hospitals</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {["Central Hospital", "Westside Medical Center", "Eastview Health Institute"].map(
              (hospital, index) => (
                <Card
                  key={index}
                  className='bg-white hover:shadow-lg transition-shadow duration-300'
                >
                  <CardHeader>
                    <CardTitle className='flex items-center'>
                      <Building2 className='h-6 w-6 text-blue-600 mr-2' />
                      {hospital}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>
                      Managing excellence in healthcare with state-of-the-art facilities and
                      compassionate care.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant='outline' className='w-full'>
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Key Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: Building2,
                title: "Multi-Hospital Management",
                description: "Centralized control for all your facilities"
              },
              {
                icon: Users,
                title: "Staff Scheduling",
                description: "Efficient workforce management"
              },
              {
                icon: Calendar,
                title: "Appointment Booking",
                description: "Streamlined patient scheduling"
              },
              {
                icon: Activity,
                title: "Resource Tracking",
                description: "Real-time inventory and asset management"
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className='bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-shadow duration-300'
              >
                <CardHeader>
                  <feature.icon className='h-12 w-12 text-blue-600 mb-2' />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Why Choose Techmed?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: BarChart2,
                title: "Data-Driven Insights",
                description: "Make informed decisions with powerful analytics"
              },
              {
                icon: FileText,
                title: "Compliance Ready",
                description: "Stay up-to-date with healthcare regulations"
              },
              {
                icon: Users,
                title: "Patient-Centric",
                description: "Improve patient experience and outcomes"
              }
            ].map((reason, index) => (
              <div key={index} className='flex items-start space-x-4'>
                <div className='bg-blue-100 rounded-full p-3'>
                  <reason.icon className='h-6 w-6 text-blue-600' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>{reason.title}</h3>
                  <p className='text-gray-600'>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='bg-blue-600 text-white rounded-lg p-8 mb-16'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Transform Your Hospital Management?
            </h2>
            <p className='text-xl mb-6'>
              Join the leading hospitals that have streamlined their operations with Techmed.
            </p>
            <Button size='lg' variant='secondary'>
              Contact the Developers
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </section>
      </main>

      <footer className='bg-gray-800 text-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Techmed</h3>
              <p className='text-gray-400'>
                Empowering healthcare management for a better tomorrow.
              </p>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-2'>
                <li>
                  <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Connect With Us</h4>
              <div className='flex space-x-4'>
                <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
                <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </Link>
                <Link href='#' className='text-gray-400 hover:text-white transition-colors'>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-gray-700 text-center text-gray-400'>
            <p>&copy; 2025 Techmed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
