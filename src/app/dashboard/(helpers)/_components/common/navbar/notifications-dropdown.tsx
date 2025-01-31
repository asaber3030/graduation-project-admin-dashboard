"use client"

import { Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { useRouter } from "next/router"

export const AdminNavbarNotificationDropdown = () => {
  const { push } = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='relative size-9'>
          <Bell />
          <p className='text-xs bg-red-500 text-white size-4 rounded-full flex items-center justify-center absolute top-0 -right-2'>
            5
          </p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Update Password</DropdownMenuItem>
        <DropdownMenuItem>Change Avatar</DropdownMenuItem>
        <DropdownMenuItem>Personal Information</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Admins</DropdownMenuItem>
        <DropdownMenuItem>Hospitals</DropdownMenuItem>
        <DropdownMenuItem>Employees</DropdownMenuItem>
        <DropdownMenuItem>Inventories</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className='size-4' /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
