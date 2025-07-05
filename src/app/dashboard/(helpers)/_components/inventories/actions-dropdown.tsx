"use client"

import { useRouter } from "next/navigation"

import { BoxIcon, BriefcaseMedical, Cog, MoreHorizontal, Paperclip, Pickaxe, PillIcon } from "lucide-react"
import { ATFullInventory } from "../../_types"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { adminRoutes } from "../../_utils/routes"

type Props = {
  inventory: ATFullInventory
}
export const AdminInventoryActionsDropdown = ({ inventory }: Props) => {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button icon={MoreHorizontal} variant='outline' className='p-0 px-2' />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => router.push(adminRoutes.inventories.medicine(inventory.id))}>
          <PillIcon className='size-4' /> Medicine
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push(adminRoutes.inventories.update(inventory.id))}>
          <Cog className='size-4' /> Update
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
