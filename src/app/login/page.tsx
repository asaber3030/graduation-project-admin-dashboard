import { AdminLoginForm } from "@/app/dashboard/(helpers)/_components/auth/login-form"
import { Metadata } from "next"

import { getCurrentAdmin } from "@/app/dashboard/(helpers)/_actions/auth"
import { adminRoutes } from "@/app/dashboard/(helpers)/_utils/routes"
import { redirect } from "next/navigation"
import AdminIntroBanner from "../dashboard/(helpers)/_components/auth/hero"
import { HomeHeader } from "../dashboard/(helpers)/_components/common/home-header"

export const metadata: Metadata = { title: "Admin Login" }

export default async function AdminLoginPage() {
  const admin = await getCurrentAdmin()
  if (admin) return redirect(adminRoutes.dashboard.root)

  console.log("admin:", admin)

  return (
    <div>
      <HomeHeader />
      <div className='bg-white border shadow-md max-w-screen-lg mx-auto my-20 p-4 rounded-md'>
        <div className='space-y-1'>
          <h1 className='text-2xl font-bold text-center'>Hospital Admin Login</h1>
          <p className='text-center'>Enter your credentials to access the admin dashboard</p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  )
}
