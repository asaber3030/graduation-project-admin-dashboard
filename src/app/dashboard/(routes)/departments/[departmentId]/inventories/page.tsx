import AdminPageTitle from "@/app/dashboard/(helpers)/_components/common/title"

import { AdminCreateInventoryModal } from "@/app/dashboard/(helpers)/_components/inventories/create-modal"
import { AdminInventoriesTable } from "@/app/dashboard/(helpers)/_components/inventories/table"
import { SearchParams } from "@/types"
import { Directions } from "@/app/dashboard/(helpers)/_components/common/breadcrumb-directions"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

import { paginateInventoriesByDepartmentId } from "@/app/dashboard/(helpers)/_actions/inventories"
import { getDepartmentById } from "@/app/dashboard/(helpers)/_actions/departments"
import { adminRoutes } from "@/app/dashboard/(helpers)/_utils/routes"
import { notFound } from "next/navigation"

type Props = {
  searchParams: SearchParams
  params: {
    departmentId: string
  }
}

export default async function DepartmentIdInventories({ searchParams, params }: Props) {
  const departmentId = +params.departmentId
  const department = await getDepartmentById(departmentId)
  const inventories = await paginateInventoriesByDepartmentId(searchParams, departmentId)

  const breadcrumbs = [
    { href: adminRoutes.departments.root, label: "Departments", disabled: false },
    {
      href: adminRoutes.departments.view(departmentId),
      label: `Department ID: ${departmentId}`
    },
    {
      href: adminRoutes.departments.departmentDoctors(departmentId),
      label: `Inventories`,
      disabled: true
    }
  ]

  if (!department) return notFound()

  const pageTitle = (
    <span>
      Department: <strong>{department?.name}</strong> - Inventories
    </span>
  )

  return (
    <div>
      <AdminPageTitle title={pageTitle}>
        <AdminCreateInventoryModal departmentId={department.id} asChild>
          <Button icon={Plus} variant='outline'>
            Create
          </Button>
        </AdminCreateInventoryModal>
      </AdminPageTitle>

      <Directions urls={breadcrumbs} />

      <AdminInventoriesTable searchParams={searchParams} hasNextPage={inventories.hasNextPage} data={inventories.inventories} />
    </div>
  )
}
