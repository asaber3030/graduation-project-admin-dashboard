"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { adminRoutes } from "../../../_utils/routes"

export const AdminNavbarCreateDropdown = () => {
  const { push } = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='size-9'>
          <Plus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel className='flex gap-2 items-center font-bold'>
            <Plus size={16} /> Create Resource{" "}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => push(adminRoutes.doctors.create)}>
            Create Doctor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => push(adminRoutes.employees.create)}>
            Create Employee
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => push(adminRoutes.inventories.create)}>
            Create Inventory
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => push(adminRoutes.medicine.create)}>
            Create Medicine
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => push(adminRoutes.patients.create)}>
            Create Patient
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => push(adminRoutes.prescriptions.create)}>
            Create Prescription
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
