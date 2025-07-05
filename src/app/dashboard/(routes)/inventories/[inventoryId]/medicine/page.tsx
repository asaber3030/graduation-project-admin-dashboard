import React from "react"
import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { findInventoryById, paginateInventoryMedicine } from "@/app/dashboard/(helpers)/_actions/inventories"

import { AdminUpdateInventtoryForm } from "@/app/dashboard/(helpers)/_components/inventories/update-form"
import { LinkBtn } from "@/components/common/link-btn"
import { Plus } from "lucide-react"

import { adminRoutes } from "@/app/dashboard/(helpers)/_utils/routes"
import { notFound } from "next/navigation"
import { SearchParams } from "@/types"
import { AdminMedicineTable } from "@/app/dashboard/(helpers)/_components/medicine/table"

type Props = {
  params: {
    inventoryId: string
  }
  searchParams: SearchParams
}

export default async function InventoryIdMedicinePage({ searchParams, params }: Props) {
  const inventoryId = +params.inventoryId
  const inventory = await findInventoryById(inventoryId)

  if (!inventory) return notFound()

  const medicine = await paginateInventoryMedicine(searchParams, inventory.id)

  return (
    <div>
      <AdminPageTitle title={`Inventory ${inventory.code} - Medicine`}>
        <LinkBtn icon={Plus} variant='outline' href={adminRoutes.medicine.create}>
          Create
        </LinkBtn>
      </AdminPageTitle>

      <AdminMedicineTable data={medicine.medicine} hasNextPage={medicine.hasNextPage} searchParams={searchParams} />
    </div>
  )
}
